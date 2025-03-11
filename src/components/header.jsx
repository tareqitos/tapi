"use client"

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import Login from "./login";
import { useEffect, useState } from "react";

export default function Header() {

    const [hasAccess, setHasAccess] = useState(null)
    const searchParams = useSearchParams();
    const login = searchParams.get('login')

    const checkIfLoggedIn = () => {
        const token = localStorage.getItem("accessToken");
        if (!token) return console.log("Token not found");

        setHasAccess(true);
        console.log(hasAccess)
    }

    useEffect(() => {
        checkIfLoggedIn();
    }, []);

    return (
        <header>
            <div>
                <Link href="/" className="title">Tapi</Link>
            </div>
            <div>
                {!hasAccess ? <Link href="/?login=true">
                    <button className="button login">Log In</button>
                </Link> :
                <Link href="/dashboard">
                    <button className="button login">Dashboard</button>
                </Link>}
            </div>
            {login && <Login />}
        </header>
    )
}
