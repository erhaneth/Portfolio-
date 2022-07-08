//special ssr image component
import Image from "next/image"
import styles from "../styles/About.module.css"

export default function About() {
    return (
        <div>
            <h1>About</h1>
            <p className={[styles.extraBlue, styles.bigFont].join(" ")}>This is about me</p>
            <div>
                <style jsx>
                 {`
                 .greenText {
                    color: green;
                 }
                 `}   
                </style>

            <p className="greenText"> I love cryptography.... endless novel</p>
            </div>
            
            {/* loading image locally */}
            <Image
                src="/about.jpg"
                alt=""
                width={300}
                height={300}
            />
            <Image
                src="https://placekitten.com/300/300"
                alt=""
                width={300}
                height={300}
            />
        </div>
    )
}