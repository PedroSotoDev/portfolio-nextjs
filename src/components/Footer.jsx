
const styles = {
    container: "w-full h-14 absolute z-10 flex flex-col justify-center items-center bg-[rgb(12,12,20)] shadow-[-0rem_0rem_0.8rem_0rem_rgb(180,25,80)]",
    frase: "text-[0.7rem] italic font-mono text-[rgb(200,70,100)] mb-1",
    text: "text-[0.8rem]",
    
}

function Footer() {
    return ( 
        <footer className={styles.container}>
            <p className={styles.text}>© 2025 Pedro Alejandro Soto Vila</p>
        </footer>
     );
}

export default Footer;