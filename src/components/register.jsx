"use client"

import { userRegister } from "@/app/hooks/auth"
import "@/styles/auth.scss"
import Link from "next/link"
import { useState } from "react"

export default function Register() {
    const [email, setEmail] = useState()
    const [fullname, setFullname] = useState();
    const [password, setPassword] = useState();
    const [message, setMessage] = useState('');
    const [messages, setMessages] = useState(['']);
    const [success, setSuccess] = useState(false)

    const handleRegister = async (event) => {
        event.preventDefault();
        const { response, result } = await userRegister(fullname, email, password);
        console.log(response)

        switch (response.status) {
            case 200:
                console.log('WELCOME')
                setSuccess(true)
                setMessage(result.message)
                console.log(result.message)
                break;

            case 401:
                setMessage(result.message)
                console.log(result.message)
                break;

            case 403:
                setMessages(result.message)
                console.log(result.message)
                break;

            case 500:
                setMessage(result.message)
                console.log(result.message)
                break;

            default:
                break;
        }
    }

    return (
        <>
            <div className="form-container">
                {success ?
                    <div className="register-login-success">
                        <div>Welcome to <span className="title">Tapi!</span></div>
                        <div>
                            <Link href="/?login=true">
                                <button className="button login">Log In</button>
                            </Link>
                        </div>
                    </div>
                    :
                    <div>
                        <form className="user-form" method="POST" onSubmit={handleRegister}>
                            <h1>Sign in</h1>
                            <div className="fields-container">
                                <div className="field">
                                    <label htmlFor="fullname">Full Name</label>
                                    <input type="text" id="fullname" name="fullname" onChange={(e) => setFullname(e.target.value)} required />
                                </div>
                                <div className="field">
                                    <label htmlFor="email">Email</label>
                                    <input type="email" id="email" name="email" onChange={(e) => setEmail(e.target.value)} required />
                                </div>
                                <div className="field">
                                    <label htmlFor="password">Password</label>
                                    <input type="password" id="password" name="password" onChange={(e) => setPassword(e.target.value)} required />
                                </div>
                            </div>
                            <button type="button submit" className="button">Register</button>
                        </form>
                        <div className={`warning-messages ${message || messages.length > 0 ? 'show' : ''}`}>
                            {message && <p className="warning">{message}</p>}
                            {messages && messages.length > 0 && messages.map((elements, i) => (
                                <p className="warning" key={i}>{elements.message}</p>
                            ))}
                        </div>
                    </div>
                }
            </div>
        </>
    )
}