"use client"
import { useTypewriter, Cursor } from "react-simple-typewriter"

const styles = {
    animatedText: "bg-gradient-to-r from-[rgb(140,0,30)] to-[rgb(130,0,40)] bg-clip-text text-transparent",
    
}

interface animaTextProps{
    data: string[];
}

const animaText = ({data}:animaTextProps) => {
    const [text] = useTypewriter({
        words: data,
        loop: 0,
        typeSpeed: 80,
        deleteSpeed: 40,
        delaySpeed: 1900,
    })

    return ( 
        <>
            <span className={styles.animatedText}>{text}</span>
            <Cursor cursorStyle="|" />
        </>
     );
}

export default animaText;