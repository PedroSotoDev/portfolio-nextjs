import Image from "next/image";
import {skillList} from "../storage/skills"
import {SkillBar} from "../components/SkillBar"


const styles = {
    container: "max-w-100 mt-10 flex flex-col items-start justify-left  text-white sm:my-0 sm:w-full sm:flex-1",
    tittle: "text-xl font-semibold mb-2 tracking-wide",
    line: "w-full h-[0.15rem] mb-3 rounded bg-gradient-to-r from-[rgb(130,0,30)] to-[rgb(140,0,30)]",
    skillWarpper: "flex flex-wrap justify-left mt-2",
    group: "relative group",
    tooltip: "w-48 absolute bottom-full left-1/4 transform-translate-x-1/2 mb-2 px-3 py-2 bg-gray-800 text-sm rounded hidden group-hover:block transition-all duration-300 whitespace-nowrap",
    tooltipTittle: "font-medium text-sm tracking-wide",
    tooltipText: "text-xs",
    barWrapper: "flex flex-row justify-left items-center",
    barLabel: "text-xs font-medium mr-2",
    arrowTooltip: "absolute top-full left-1/8 transform-translate-x-1/2 border-4 border-transparent border-t-gray-800",
    img: "w-9 h-auto mr-4 mt-2 rounded-md group-hover:scale-140 group-active:scale-140 transition-transform duration-200 ease-in-out",
};
function SkillsCard() {

    return (
        <div className={styles.container}>
            <p className={styles.tittle}>My skills</p>
            <div className={styles.line}></div>

            <div className={styles.skillWarpper}>
                {
                    skillList.map((data)=>{
                        return(
                            <div className= {styles.group} key={data.id}>
                                <div className={styles.tooltip}>
                                    <p className={styles.tooltipTittle}>{data.name}</p>
                                    <p className={styles.tooltipText}>{data.text}</p>
                                    <div className={styles.barWrapper}>
                                        <p className={styles.barLabel}>Exp:</p>
                                        <SkillBar value={data.lvl}/>
                                    </div>
                                    <div className={styles.arrowTooltip}></div>
                                </div>
                                <Image
                                    src={data.src}
                                    className={styles.img}
                                    alt={data.name}
                                    width={512}
                                    height={512}
                                />
                            </div>
                        )
                    })
                }
            </div>   
        </div>
    );
}

export default SkillsCard;

{/* <Image
                    src="/icons/react.png"
                    className={styles.img}
                    alt="react"
                    width={512}
                    height={512}
                />
                <Image
                    src="/icons/redux.png"
                    className={styles.img}
                    alt="react"
                    width={512}
                    height={512}
                />
                <Image
                    src="/icons/tailwind.png"
                    className={styles.img}
                    alt="react"
                    width={512}
                    height={512}
                />
                <Image
                    src="/icons/node.png"
                    className={styles.img}
                    alt="react"
                    width={512}
                    height={512}
                />
                <Image
                    src="/icons/javascript.png"
                    className={styles.img}
                    alt="react"
                    width={512}
                    height={512}
                /> */}
