"use client";

import "@/styles/dashboard.scss";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import WordsMastered from "@/components/WordsMastered";
import SessionsChart from "@/components/SessionsChart";

export default function Dashboard() {
	const [userName, setUserName] = useState("");
	const router = useRouter();

	const handleLogout = async () => {
		localStorage.removeItem("accessToken");
		router.push("/")
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
		<div className="dashboard-container">
			<h2 className="greeting">Welcome back, {userName} </h2>
			<div className="dashboardColumn1-container">
				<WordsMastered />
				<div className="dashboardColumn2-container">
				<button className="learnLanguage">Learn English</button>
				<button className="learnLanguage">Learn Polish</button>
			</div>
				<SessionsChart />
			<button onClick={handleLogout} className="learnLanguage">Log out</button>
			</div>
		</div>
	);
}
