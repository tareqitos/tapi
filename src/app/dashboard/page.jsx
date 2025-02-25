'use client'

import "@/styles/dashboard.scss"
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";


export default function Dashboard(){
  const [userName, setUserName] = useState("");
  const router = useRouter()

useEffect(()=>{
    const token=localStorage.getItem("token");


// if there is no token in localstorage, then push user to login page - check this endpoint!!
    if(!token){
        router.push('/login');
        return
    }

    const storedUserName=localStorage.getItem("userName")
    setUserName(storedUserName)
}, [router])


    return(
        <>
       <h2>Welcome back, {userName} </h2>
        </>
    )
}