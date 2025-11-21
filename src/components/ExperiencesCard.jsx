import Experience from "./Experience";

const styles = {
    container: "max-w-100 mt-10 flex flex-col text-white sm:my-0 sm:w-full sm:flex-1",
    tittle: "text-xl mb-2 font-semibold tracking-wide",
    line: "w-full h-[0.15rem] rounded mb-4 bg-gradient-to-r from-[rgb(130,0,30)] to-[rgb(140,0,30)]",
    wrapper: "px-2",

}

function ExperiencesCard() {

    return ( 
        <section className={styles.container}>
            <p className={styles.tittle}>Experience</p>
            <div className={styles.line}></div>
            
            <div className={styles.wrapper}>
                <Experience 
                    tittle="Freelance" 
                    date="Since 2021" 
                    text="Development projects for start-ups and university research."
                />

                <Experience 
                    tittle="CEDISAP" 
                    date="Since 2025" 
                    text="Web development company for the Cuban Ministry of Public Health."
                />
            </div>


        </section>
     );
}

export default ExperiencesCard;