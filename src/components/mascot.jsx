import Image from "next/image";

export default function Mascot ({animation}) {
    return (
        <div className={`mascot-wrapper ${animation}`}>
          <Image src="pencil.svg" alt="mascot" className="mascot" priority width={400} height={400}></Image>
        </div>
    )
}