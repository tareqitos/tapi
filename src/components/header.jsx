"use client"

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import Login from "./login";

export default function Header() {

    const searchParams = useSearchParams();
    const login = searchParams.get('login')

    return (
        <header>
            <div>
                <Link href="/" className="title">Tapi</Link>
            </div>
            <div>
                <Link href="/?login=true">
                    <button className="button login">Log In</button>
                </Link>
            </div>
            {login && <Login />}
        </header>
    )
}
