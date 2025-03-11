'use client'

import '@/styles/home.scss'
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import Register from "@/components/register";
import { useEffect, useState } from "react";
import Mascot from "@/components/mascot";

export default function Home() {

  const searchParams = useSearchParams();
  const register = searchParams.get('register')
  const [isTransition, setIsTransition] = useState(false)
  const [hasAccess, setHasAccess] = useState();
  const router = useRouter()

  useEffect(() => {
    const token = localStorage.getItem("accessToken")
    if (!token) return console.log("Token not found");
    setHasAccess(true)
  }, [hasAccess])

  const handleTransition = async () => {
    setIsTransition(true);

    await new Promise((resolve) => setTimeout(resolve, 600));
    router.push("/dashboard");
  }

  return (
    <div className="homepage-container">
      <div className="left-side">
        {isTransition ? <Mascot animation="leaving-screen" /> : <Mascot />}
        <span className={isTransition ? 'leaving-screen' : ''}></span>
      </div>
      <div className="right-side">
        {register ? <Register /> :
          <>
            <h1 className={isTransition ? 'leaving-screen-right' : ''}>Learn effectively with <span className="title">Tapi</span></h1>
            <p className={isTransition ? 'leaving-screen-right' : ''}>
              Master words and phrases with smard reviews, short daily sessions and intuitive learning anytime, anywhere.
            </p>
            {!hasAccess ?
              <Link href="/?register=true">
                <button className="button lets-go">Let's go</button>
              </Link> :
              <div  className={`my-progress ${isTransition ? 'leaving-screen-right' : ''}`}>
                <button onClick={handleTransition} className='button'>My progress</button>
                </div>
            }
          </>
        }

      </div>
    </div>
  );
}
