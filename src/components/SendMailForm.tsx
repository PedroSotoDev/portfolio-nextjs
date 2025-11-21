"use client"
import { useState } from "react";

const styles = {
    container: "w-full flex flex-col justify-left text-white",
    tittle: "text-lg font-bold mb-4",
    form: "flex flex-col items-left justify-around",
    name: "h-7 mb-4 px-2 bg-[rgb(20,20,30)] rounded-sm text-[0.9rem] placeholder:text-gray-500",
    email: "h-7 mb-4 px-2 bg-[rgb(20,20,30)] rounded-sm text-[0.9rem] placeholder:text-gray-500",
    bodymail: "w-full h-20 mb-4 bg-[rgb(20,20,30)] rounded-sm text-[0.9rem] p-1 px-2 placeholder:text-gray-500",
    sendbtn: "bg-[rgb(60,120,65)] rounded-sm active:shadow-[inset_0rem_0rem_0.4rem_0rem_rgb(0,10,5)]",
    error: "text-sm text-red-500",

}

function SendMailForm() {
    const [error,setError] = useState("");

    function handleSend(){
        setError("⚠️ Todos los campos son obligatorios")
        
    }

    return ( 
        <section className={styles.container}>
            <p className={styles.tittle}>
                📩 You can use this form to contact me. 
            </p>

            <form className={styles.form}>
                <p>Name:</p>
                <input className={styles.name} type="text" name="name" id="name" placeholder="Ex: Gustavo Fring"/>
                <p>Email:</p>
                <input className={styles.email} type="email" name="mail" id="mail" placeholder="Ex: gus.fring@gmail.com"/>
                <p>Message:</p>
                <textarea className={styles.bodymail} name="bodymail" id="bodymail" rows={10} placeholder="Ex: Hello Mr. Soto. I'm the Los Pollos Hermanos Family's CEO and we're looking for someone wih yout skills for a important job ..."/>
                <p className={styles.error}>{error}</p>
                <button className={styles.sendbtn} type="button" onClick={handleSend}>Send</button>
            </form>
        </section>
     );
}

export default SendMailForm;