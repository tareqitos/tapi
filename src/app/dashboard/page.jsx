"use client";

import "@/styles/dashboard.scss";
import "@/styles/home.scss";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import WordsMastered from "@/components/WordsMastered";
import SessionsChart from "@/components/SessionsChart";
import Mascot from "@/components/mascot";

export default function Dashboard() {
	const [userName, setUserName] = useState("");
	const [isTransition, setIsTransition] = useState(false)
	const router = useRouter();

	const handleLogout = async () => {
		localStorage.removeItem("accessToken");
		await new Promise((resolve) => setTimeout(resolve, 300))
		router.push("/")
		window.location.reload();
	}

	const goToExercise = async () => {
		setIsTransition(true);
		await new Promise((resolve) => setTimeout(resolve, 300))
		router.push('/challenge');
	}

	useEffect(()=>{
	    const token=localStorage.getItem("accessToken");
	    if(!token){
	        router.push('/?login=true');
	        return
	    }

	    const storedUserName=localStorage.getItem("userName")
	    setUserName(storedUserName)
	}, [router])

	return (
		<div className={`dashboard-container fade-in ${isTransition ? "fade-out" : ""}`}>
			<h2 className="greeting">Welcome back, {userName} </h2>
			<div className="dashboardColumn1-container">
				<WordsMastered />
				<div className="dashboardColumn2-container">
				<button className="learnLanguage" onClick={goToExercise}>Learn English</button>
				<button className="learnLanguage disabled">Learn Polish</button>
			</div>
				<SessionsChart />
			<button onClick={handleLogout} className="learnLanguage">Log out</button>
			</div>
		</div>
	);
}
