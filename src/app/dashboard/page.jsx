"use client";

import "@/styles/dashboard.scss";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import WordsMastered from "@/components/WordsMastered";
import SessionsChart from "@/components/SessionsChart";

export default function Dashboard() {
	const [userName, setUserName] = useState("");
	const router = useRouter();

	// useEffect(()=>{
	//     const token=localStorage.getItem("token");

	// // if there is no token in localstorage, then push user to login page - check this endpoint!!
	//     if(!token){
	//         router.push('/login');
	//         return
	//     }

	//     const storedUserName=localStorage.getItem("userName")
	//     setUserName(storedUserName)
	// }, [router])

	return (
		<div className="dashboard-container">
			<h2 className="greeting">Welcome back, {userName} </h2>
			<div className="dashboardColumn1-container">
				<WordsMastered />
				<SessionsChart />
			</div>
			<div className="dashboardColumn2-container">
				<button className="learnLanguage">Learn English</button>
				<button className="learnLanguage">Learn Polish</button>
			</div>
		</div>
	);
}
