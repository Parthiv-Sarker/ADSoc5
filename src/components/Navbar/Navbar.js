"use client"
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

import Logo from "/public/assets/logo.png"
import GnitLogo from "/public/assets/GNIT.png"
import JisLogo from "/public/assets/jisgroup.png"

const Navbar = () => {
	const [nav, setNav] = useState(false);

	const handleNav = () => {
		setNav(!nav);
	};

	// Array containing navigation items
	const navItems = [
		{ id: 1, text: "Home", navLink: "/" },
		{ id: 2, text: "About", navLink: "/about" },
		{ id: 3, text: "Committee", navLink: "/committee" },
	];

	return (
		<div className="fixed flex justify-between items-center h-24 w-screen px-4 text-black bg-slate-300 bg-opacity-30 backdrop-filter backdrop-blur-md drop-shadow-xl z-10">
			{/* Logo */}
			<h1 className="w-full pl-6">
				<Link href="/">
					<Image src={Logo} placeholder="blur" alt="logo" className="h-20 w-20" />
				</Link>
			</h1>

			{/* Desktop Navigation */}
			<ul className="hidden md:flex md:pr-20">
				{navItems.map((item) => (
					<Link
						href={item.navLink}
						key={item.id}
						className="w-28 text-lg font-bold text-center hover:bg-orange-600 rounded-xl m-2 cursor-pointer duration-300 hover:text-black"
					>
						{item.text}
					</Link>
				))}
			</ul>

			<div className="hidden md:pr-20 md:flex md:gap-4">
				<Image src={GnitLogo} placeholder="blur" alt="Gnit Logo" className="w-14 h-14" />
				<Image src={JisLogo} placeholder="blur" alt="JIS Logo" className="w-14 h-14" />
			</div>

			{/* Mobile Navigation Icon */}
			<div onClick={handleNav} className="block md:hidden z-20">
				{nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
			</div>

			{/* Mobile Navigation Menu */}
			<ul
				className={
					nav
						? "fixed md:hidden left-0 top-0 w-full h-screen flex flex-col justify-center items-center bg-white ease-in-out duration-500"
						: "fixed top-0 left-[-100%] w-full h-screen flex flex-col justify-center items-center bg-white ease-in-out duration-500"
				}
			>
				{/* Mobile Navigation Items */}
				{navItems.map((item) => (
					<Link
						href={item.navLink}
						key={item.id}
						className="p-4 text-xl text-center w-full hover:bg-orange-600 rounded-xl duration-300 hover:text-black cursor-pointer"
						onClick={() => setNav(false)}
					>
						{item.text}
					</Link>
				))}
			</ul>
		</div>
	);
};

export default Navbar;
