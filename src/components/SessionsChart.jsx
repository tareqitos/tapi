"use client";
import { useEffect } from "react";
import { Bar } from "react-chartjs-2";
import {
	Chart,
	Colors,
	BarController,
	CategoryScale,
	LinearScale,
	BarElement,
	Legend,
	Ticks,
	Title,
} from "chart.js";

Chart.register(
	Colors,
	BarController,
	BarElement,
	CategoryScale,
	LinearScale,
	Legend,
	Title
);

export default function SessionsChart() {
	const data = {
		labels: [
			"Monday",
			"Tuesday",
			"Wednesday",
			"Thursday",
			"Friday",
			"Saturday",
			"Sunday",
		],
		datasets: [
			{
				label: "Sessions",
				barThickness: 20,
				data: [1, 0, 3, 4, 2, 1, 2],
				backgroundColor: "#eb9e8f",
				borderWidth: 0.5,
				borderColor: "#e67761",
			},
		],
	};

	const options = {
		responsive: true,
		maintainAspectRatio: false,
		plugins: {
			legend: {
				position: "top",
			},
			title: {
				display: true,
				text: "Sessions this week",
				color: "#4B4B4B",
				font: {
					size: "16",
				},
			},
		},
		scales: {
			y: {
				beginAtZero: true,
				ticks: {
					color: "#4B4B4B",
					callback: function (value) {
						return Number(value).toFixed(0);
					},
				},
			},
			x: {
				ticks: {
					color: "#4B4B4B",
				},
			},
		},
	};

	return (
		<div className="chart-container">
			<Bar data={data} options={options} />
		</div>
	);
}
