
const styles = {
    container: "w-full mb-8 px-3 py-2 flex flex-row items-right justify-left rounded bg-[rgb(20,20,30)] shadow-[0rem_0rem_0.6rem_0rem_rgb(0,0,0)]",
    img: "w-full my-2 mb-8 rounded-[0.4rem] sm:w-50",
    wrapper: "flex flex-col items-left justify-between",
    tittlesWrapper: "w-full w-full mb-3 flex flex-col justify-between items-start sm:flex-row",
    tittle: "text-md font-semibold tracking-wide text-white",
    date: "text-md text-white",
    text: "text-md text-left font-medium",
    line: "w-1 h-full mr-6 bg-whithe rounded-sm",
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

                