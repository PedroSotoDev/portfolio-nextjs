import Image from "next/image";

const styles = {
    container: "w-full h-180 mb-10 flex flex-col justify-left text-white sm:h-100",
    tittle: "text-3xl font-bold tracking-wide",

    expWrapper: "w-full mt-8 flex flex-row items-start justify-left",
    line: "w-1 h-full mr-6 bg-gradient-to-r from-[rgb(160,99,19)] to-[rgb(248,199,68)] rounded-sm",
    exp: "flex flex-col items-start justify-between sm:flex-row",
    img: "w-full my-2 mb-8 rounded-[0.4rem] sm:w-50",
    expText: "flex flex-col items-start justify-between ml-6 my-2",
    expTittles: "w-full mb-4 flex flex-col justify-between items-start sm:flex-row",
    subTittle: "text-xl font-medium text-[rgb(200,70,100)]",
    date: "text-md font-medium text-[rgb(200,70,100)]",
    
}

function EducationCard() {
    return ( 
        <section className={styles.container}>
            <p className={styles.tittle}>Education</p> 
            
            <div className={styles.expWrapper}>
                <div className={styles.line}></div>
                <div className={styles.exp}>
                    <Image 
                        className={styles.img} 
                        src="/education/uci.jpg"
                        alt="my face" 
                        width={600} 
                        height={400}
                        priority={false}
                    />
                    <div className={styles.expText}>
                        <div className={styles.expTittles}>
                            <p className={styles.subTittle}>Informatics Sciences Engineer</p>
                            <p className={styles.date}>2021 - 2026</p>
                        </div>
                        <p>Actualmente estoy cursando el último año de esta carrera en la Universidad de Ciencias Informatias de Cuba. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam quaerat nostrum, tempora rem delectus quia itaque, temporibus, fuga necessitatibus error eos libero quas! Quidem, voluptates repellendus magni sapiente provident nisi?</p>
                    </div>
                </div>

            </div>
        </section>   
     );
}

export default EducationCard;