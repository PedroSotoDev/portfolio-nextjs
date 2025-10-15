

const styles = {
    container: "max-w-100 mt-10 flex flex-col text-white sm:my-0 sm:w-full sm:flex-1",
    tittle: "text-xl mb-2 font-semibold tracking-wide",
    line: "w-full h-[0.15rem] rounded mb-4 bg-gradient-to-r from-[rgb(130,0,30)] to-[rgb(140,0,30)]",
    text: "text-lg text-left",
};

function AboutCard() {
    return (
        <section className={styles.container}>
        <p className={styles.tittle}>Who I am</p>
        <div className={styles.line}></div>
        <p className={styles.text}>
            I'm a software engineer with 3+ years of experience web development. Passionate about creating SEO and Marketing oriented web experiences.
        </p>
        
        </section>
    );
}

export default AboutCard;