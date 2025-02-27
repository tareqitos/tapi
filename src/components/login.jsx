"use client";

import { userLogin } from "@/app/hooks/auth";
import "@/styles/auth.scss";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Login() {
	const [email, setEmail] = useState();
	const [password, setPassword] = useState();
	const [message, setMessage] = useState("");
	const [success, setSuccess] = useState(false);
	const router = useRouter();

	const handleLogin = async (event) => {
		event.preventDefault();
		const { response, result } = await userLogin(email, password);
		console.log(result);

		switch (response.status) {
			case 200:
				console.log("WELCOME");
				setSuccess(true);
				setMessage(result.message);
				localStorage.setItem("accessToken", result.token);
				localStorage.setItem("userName", result.userFullname);
				await new Promise((resolve) => setTimeout(resolve, 3000));
				router.push("/dashboard");
				console.log(result.message);
				break;

			case 400:
				setMessage(result.message);
				console.log(result.message);
				break;

			default:
				break;
		}
	};

	return (
		<>
			<Link href="/?" className="form-bg"></Link>
			<div className="form-container form-container-login">
				{success ? (
					<div className="register-login-success">
						<div>
							Welcome back to <span className="title">Tapi!</span>
						</div>
					</div>
				) : (
					<div>
						<form className="user-form" method="POST" onSubmit={handleLogin}>
							<h1>Log in</h1>
							<div className="fields-container-login">
								<div className="field">
									<label htmlFor="email">Email</label>
									<input
										type="email"
										id="email"
										name="email"
										onChange={(e) => setEmail(e.target.value)}
										required
									/>
								</div>
								<div className="field">
									<label htmlFor="password">Password</label>
									<input
										type="password"
										id="password"
										name="password"
										onChange={(e) => setPassword(e.target.value)}
										required
									/>
									<Link href="/">Forgot password?</Link>
								</div>
							</div>
							<button type="button submit" className="button">
								Log in
							</button>
						</form>
						<div className={`warning-messages ${message ? "show" : ""}`}>
							{message && <p className="warning">{message}</p>}
						</div>
					</div>
				)}
			</div>
		</>
	);
}
