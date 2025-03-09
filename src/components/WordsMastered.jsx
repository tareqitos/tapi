"use client";
const API_URL = process.env.NEXT_PUBLIC_API_URL;
import { useState, useEffect } from "react";

export default function WordsMastered() {
	const [wordsMastered, setWordsMastered] = useState(0);

	return (
		<div className="masteredWords">
			<p>
				You mastered <strong>0</strong> words. <br />
				Keep going!
			</p>
		</div>
	);
}
