import Image from "next/image";

const styles = {
    container: "w-full flex flex-col justify-left text-white",
    contactWrapper:"flex flex-row justify-left items-center mt-4",
    tittle: "text-xl font-semibold mb-4 tracking-wide",
    subTittle: "text-xl font-bold mb-4",
    text: "text-md font-bold ml-8",
    img: "w-[2rem] h-auto pl-2 fliter invert",
}

function ContactCard() {
    return ( 
        <section className={styles.container}>

            <div className={styles.contactWrapper}>
                <Image
                    src="/icons/mail.png"
                    className={styles.img}
                    alt="Mail:"
                    width={512}
                    height={512}
                />
                <p className={styles.text}>pasoto.dev@gmail.com</p>
            </div>

            <div className={styles.contactWrapper}>
                <Image
                    src="/icons/phone.png"
                    className={styles.img}
                    alt="Phone:"
                    width={512}
                    height={512}
                />
                <p className={styles.text}>+53 5 9014403</p>
            </div>

            <div className={styles.contactWrapper}>
                <Image
                    src="/icons/home.png"
                    className={styles.img}
                    alt="home:"
                    width={512}
                    height={512}
                />
                <p className={styles.text}>La Habana, Cuba</p>
            </div>

        </section>
     );
}

export default ContactCard;