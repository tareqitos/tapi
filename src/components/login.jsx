import "@/styles/auth.scss"
import Link from "next/link"

export default function Login() {
    return (
        <>
            <Link href='/?' className="form-bg"></Link>
            <div className="form-container form-container-login">
                <form className="user-form">
                    <h1>Log in</h1>
                    <div className="fields-container-login">
                        <div className="field">
                            <label htmlFor="email">Email</label>
                            <input type="email" id="email" name="email" required />
                        </div>
                        <div className="field">
                            <label htmlFor="password">Password</label>
                            <input type="password" id="password" name="password" required />
                            <Link href="/">Forgot password?</Link>
                        </div>
                    </div>
                    <button type="button submit" className="button">Log in</button>
                </form>
            </div>
        </>
    )
}