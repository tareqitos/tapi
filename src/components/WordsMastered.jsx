"use client";
const API_URL = process.env.NEXT_PUBLIC_API_URL;
import { useState, useEffect } from "react";

export default function WordsMastered() {
    const [wordsMastered, setWordsMastered]=useState(0)

    // fill in correct endpoint!!
    // UserId is needed to fetch correct data
    // ===========================
    useEffect(()=>{
        fetch('${API_URL}/user/wordsMastered')
        .then
    })


	return (
		<div className="masteredWords">
			<p>
				You mastered <strong>0</strong> words. <br />
				Keep going!
			</p>
		</div>
	);
}
