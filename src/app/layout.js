import { Inter } from "next/font/google";
import "./globals.css";

import SmoothScroll from "@/components/SmoothScroll";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
	title: "ADSoc5",
	description: "AI-Driven Smart Healthcare for Society 5.0(ADSoc5)",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<SmoothScroll>
				<body className={inter.className}>
					<Navbar />
					{children}
					<Footer />
				</body>
			</SmoothScroll>
		</html>
	);
}
