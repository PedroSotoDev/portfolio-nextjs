const styles = {
    container: "w-[80%] h-2 my-2 bg-gray-100 overflow-hidden relative border border-black",
    barberBar: "h-full overflow-hidden bg-[repeating-linear-gradient(-45deg,theme(colors.white)_0_10px,theme(colors.gray.400)_10px_20px)] animate-barber absolute top-0 left-0",
    colorBar: "h-[1rem] w-[100%] bg-gradient-to-r from-[rgba(100,50,180,0.9)] via-[rgba(100,50,100,0.9)] to-[rgba(180,25,80,0.9)]",
};

export function SkillBar({ value }) {
    return (
        <div className={styles.container}>
                
            <div className={styles.barberBar} style={{ width: `${value}%` }}> 
                <div className={styles.colorBar}></div>  
            </div>

            
        </div>
    );
}
