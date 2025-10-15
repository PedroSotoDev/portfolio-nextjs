import Image from "next/image";

const styles = {
    container: " min-w-[377px] mt-28 flex items-center justify-center sm:my-0",
    img: "w-46 shadow-[-0.3rem_0.3rem_1.2rem_0.2rem_rgb(140,0,30)] rounded-[0.3rem]"
}

function PictureCard() {
    return ( 
        <picture className={styles.container}>
            <Image 
                className={styles.img} 
                src="/face/face.jpg"
                alt="my face" 
                width={600} 
                height={600}
                priority={true}
            />
        </picture>
     );
}

export default PictureCard;