import type { Metadata } from "next";
import "./globals.css";
import NavBar from "../components/NavBar"
import Footer from "../components/Footer"

export const metadata: Metadata = {
	title: "Pedro Alejandro Soto Vila | Software Developer - Portfolio",
	icons: "/icons/PS.png",
	applicationName: "Pedro Alejandro Soto Vila's Portfolio",
	category: "web development",
	description: "Professional portfolio of Pedro Alejandro Soto Vila, Full Stack Developer specializing in React,Next.js and modern web development.",
	abstract: "Professional portfolio of Pedro Alejandro Soto Vila, Full Stack Developer specializing in React,Next.js and modern web development.",
	keywords: ["Pedro Alejandro Soto Vila","web developer","desarrollador web","React","Next.js","TypeScript","Node.js"],
	authors: [{name:"Pedro Alejandro Soto Vila"}],
	creator: "Pedro Alejandro Soto Vila",
	generator: "Next.js",
	publisher: "Vercel",
	alternates: {
		canonical: "a",
		languages: {
			"en-US": "a"
		}
	},
	formatDetection: {
		telephone:true,
		date:true,
		address:true,
		email:true
	},
	robots: {index:true, follow:true,},
	archives: "a",
	assets: "a",
	manifest: "a",
	verification:{
		google:"a"
	},
};

const bodyStyles = "min-h-screen ";

export default function RootLayout({children,}: Readonly<{children: React.ReactNode;}>) {
	return (
		<html lang="en">
			<body className={bodyStyles}>
				
				{children}
				<Footer/>
			</body>
		</html>
	);
}
