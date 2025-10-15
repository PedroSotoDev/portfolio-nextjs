import Image from "next/image"
import Link from "next/link";
import AnimaText from "./AnimaText";

const styles = {
    container: "w-70 min-w-50 mt-18 flex flex-col justify-center items-left text-white sm:my-0 sm:max-w-74 md:max-w-88 xl:max-w-100",
    wrapper: "text-left pb-4",
    myName: "text-2xl font-medium tracking-wide sm:text-4xl",
    Wrapper: "flex flex-row items-center",
    tagline: "text-lg font-medium sm:text-xl",
    icon: "w-[2rem] h-auto pl-2 invert",
    typewriterWrapper: "text-lg flex items-start font-medium sm:text-2xl",
    btnWrapper: "w-full mt-8 flex flex-row justify-between items-center",
    link: "w-30 h-8 text-[0.8rem] font-medium flex justify-center items-center rounded-lg bg-gradient-to-br from-[rgb(55,30,45)] via-[rgb(30,30,40)] to-[rgb(40,30,40)]",

}

function NameCard() {
    
    const list = ['Software Engineer','Web Developer','Code Lover'];

    return (
        <section className={styles.container}>
            
            <h1 className={styles.myName}>Alejandro Soto</h1>
            <div className={styles.Wrapper}>
                <p className={styles.tagline}>I'm not a robot</p>
                <Image 
                    className={styles.icon} 
                    src="/icons/bot_transparente.png" 
                    alt="bot"
                    width={500}
                    height={500}
                />
            </div>
            <div className={styles.typewriterWrapper}>
                <span className="mr-2">I'm a</span><AnimaText data={list}/>
            </div>
            <div className={styles.btnWrapper}>
                <Link className={styles.link} rel="stylesheet" href="s">My projects</Link>
                <Link className={styles.link} rel="stylesheet" href="s">About me</Link>
            </div>
        </section>
    )
    }

export default NameCard