import PictureCard from "../components/PictureCard"
import NameCard from "../components/NameCard"
import AboutCard from "../components/AboutCard"
import SkillsCard from "../components/SkillsCard"
import EducationCard from "../components/EducationCard"
import ExperiencesCard from "../components/ExperiencesCard"
import ContactCard from "../components/ContactCard"
import SendMailForm from "../components/SendMailForm"
import MatrixEffect  from "../components/MatrixEffect"

const styles = {
	main: "h-full w-full px-8 flex flex-col items-center justify-between bg-[rgb(12,14,22)] sm:px-10 lg:px-14 xl:px-16",
    header: "w-full min-h-130 z-1 flex flex-col justify-left items-center sm:flex-row sm:justify-center sm:items-center",
    flexWrapper: "w-full mb-10 z-1 flex flex-col justify-between sm:flex-row-reverse",
    contactWrapper: "w-full h-90 mb-10 flex flex-col justify-between sm:flex-row sm:justify-around",
    tittle: "w-full text-xl font-semibold mb-4 tracking-wide",
    line: "w-full h-[0.15rem] rounded mb-4 bg-gradient-to-r from-[rgb(130,0,30)] to-[rgb(140,0,30)]",

};

export default function Home() {
   
	return (
		<main className={styles.main}>
            <MatrixEffect/>
            <header className={styles.header}>
                <PictureCard/>
                <NameCard/>
            </header>

            <div className={styles.flexWrapper}>
                <AboutCard/>
                <SkillsCard/>
            </div>

            <div className={styles.flexWrapper}>
                <ExperiencesCard/>
                <ExperiencesCard/>
            </div>

            <p className={styles.tittle}>Reach me</p>
            <div className={styles.line}></div>
            <div className={styles.contactWrapper}>
                <ContactCard/>
                <SendMailForm/>   
            </div>

		</main>
	);
}
