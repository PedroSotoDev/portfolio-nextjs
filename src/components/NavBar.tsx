"use client"
import { handler } from "next/dist/build/templates/app-page";
import Image from "next/image";
import { useState, useRef } from "react";

const styles = {
    nav: "w-full h-14 absolute z-10 flex flex-row justify-end items-center bg-[rgba(0,0,0,0)]",
    logo: "w-6 ml-4 invert opacity-60",
    icon: "w-6 mb-2 mr-4 invert opacity-60",
    lang: "text-xl mr-4 mono tracking-wide text-black-900 opacity-70",
    menuGroup: "relative",
    menu: "w-14 h-12 flex flex-col justify-around items-center absolute top-full right-1/8 bg-gray-800 rounded",

}

function NavBar() {
    const [menu,setMenu] = useState(false);

    const handleMenu =()=>{
        if(menu===false){
            setMenu(true);
        }
        else{setMenu(false);}
    }

    return ( 
        <nav className={styles.nav}>
            <div className={styles.menuGroup}>
                <p className={styles.lang}>
                    EN
                </p>

                {menu && (
                    <div className={styles.menu}>
                        <p>Esp</p>
                        <p>Eng</p>
                    </div>
                )}
            </div>
            
        </nav>
     );
}

export default NavBar;