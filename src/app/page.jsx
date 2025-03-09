'use client'

import Image from "next/image";
import '@/styles/home.scss'
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import Register from "@/components/register";
import { useState } from "react";

export default function Home() {

  const searchParams = useSearchParams();
  const register = searchParams.get('register')
  const [hasAccess, setHasAccess] = useState(localStorage.getItem("accessToken"))

  return (
    <div className="homepage-container">
      <div className="left-side">
        <div className="mascot-wrapper">
          <Image src="pencil.svg" alt="mascot" className="mascot" priority width={400} height={400}></Image>
        </div>
        <span></span>
      </div>
      <div className="right-side">
        {register ? <Register /> :
          <>
            <h1>Learn effectively with <span className="title">Tapi</span></h1>
            <p>
              Master words and phrases with smard reviews, short daily sessions and intuitive learning anytime, anywhere.
            </p>
            {!hasAccess ?
              <Link href="/?register=true">
                <button className="button lets-go">Let's go</button>
              </Link> :
              <Link href="/dashboard">
                <button className="button lets-go">My progress</button>
              </Link>
            }
          </>
        }

      </div>
    </div>
  );
}
