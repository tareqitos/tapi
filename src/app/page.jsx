import Image from "next/image";
import '@/styles/home.scss'

export default function Home() {
  return (
    <div className="homepage-container">
      <div className="left-side">
         <div className="mascot-wrapper">
           <Image src="pencil.svg" alt="mascot" className="mascot" priority width={400} height={400}></Image>
         </div>
           <span></span>
      </div>
      <div className="right-side">
        <h1>Learn effectively with <span className="title">Tapi</span></h1>
        <p>
          Master words and phrases with smard reviews, short daily sessions and intuitive learning anytime, anywhere.
        </p>
        <button className="button lets-go">Let's go</button>
      </div>
    </div>
  );
}
