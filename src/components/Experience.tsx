
const styles = {
    container: "w-full mb-8 px-4 py-2 flex flex-row items-right justify-left",
    img: "w-full my-2 mb-8 rounded-[0.4rem] sm:w-50",
    wrapper: "flex flex-col items-left justify-between",
    tittlesWrapper: "w-full w-full mb-3 flex flex-col justify-between items-start sm:flex-row",
    tittle: "text-xl font-semibold tracking-wide text-[rgb(140,10,40)]",
    date: "text-md text-[rgb(140,10,40)]",
    text: "text-lg text-left font-medium",

}

interface experienceProps{
    tittle: string,
    date: string,
    text: string;
}

function Experience({tittle, date, text}: experienceProps) {

    return ( 
        <article className={styles.container}>
            <div className={styles.wrapper}> 
                <div className={styles.tittlesWrapper}>
                    <p className={styles.tittle}>{tittle}</p>
                    <p className={styles.date}>{date}</p>
                </div>  
                <p className={styles.text}>{text}</p>
            </div>
        </article>
    );
}

export default Experience;

                