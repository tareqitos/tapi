import "@/styles/auth.scss"
import Link from "next/link"

export default function Register() {
    return (
        <>
            <div className="form-container">
                <form className="user-form">
                    <h1>Sign in</h1>
                    <div className="fields-container">
                        <div className="field">
                            <label htmlFor="username">Username</label>
                            <input type="text" id="username" name="username" required />
                        </div>
                        <div className="field">
                            <label htmlFor="email">Email</label>
                            <input type="email" id="email" name="email" required />
                        </div>
                        <div className="field">
                            <label htmlFor="password">Password</label>
                            <input type="password" id="password" name="password" required />
                        </div>
                        <div className="field">
                            <label htmlFor="verifyPassword">Verify Password</label>
                            <input type="password" id="verifyPassword" name="verifyPassword" required />
                        </div>
                    </div>
                    <button type="button submit" className="button">Register</button>
                </form>
            </div>
        </>
    )
}