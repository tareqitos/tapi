import Link from "next/link";

export default function Header() {
    return (
        <header>
            <div>
                <Link href="/" className="title">Tapi</Link>
            </div>
            <div>
                <button className="button login">Login</button>
            </div>
        </header>
    )
}