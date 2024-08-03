import React from "react";
import Image from "next/image";
import Link from "next/link";
import { MdLocationOn } from "react-icons/md";

import Logo from "../../../public/assets/logo.png";

const Footer = () => {
	const date = new Date();

	return (
		<div className="w-screen h-auto bg-slate-400 px-4 py-8 md:py-12 md:px-20">
			<div className="grid grid-cols-1 md:grid-cols-3 gap-4">
				{/* Left Section */}
				<div className="flex flex-col items-center md:items-start">
					<Image src={Logo} className="w-28 h-28 mb-4" alt="Event Logo" />
					<p className="text-base font-bold text-center md:text-left mb-4">
						AI-Driven Smart Healthcare for Society 5.0 (ADSoc5). The event will
						be held from 14th to 15th February at Guru Nanak Institute of
						Technology.
					</p>
					<Link
						href="https://maps.app.goo.gl/NxELcAqAFaNhC6769"
						className="flex gap-2 items-center text-sm font-light text-center md:text-left"
					>
						<MdLocationOn className="text-xl" />
						157/F, Nilgunj Rd, Sahid Colony, Panihati, Khardaha, West Bengal
						700114
					</Link>
				</div>

				{/* Center Sections */}
				<div className="flex justify-between items-center md:items-start md:col-span-1 md:mr-10">
					<p className="text-lg font-semibold text-center md:text-left">
						Convenor
					</p>
					<p className="text-lg font-semibold text-center md:text-left">
						Jt.Contact
					</p>
				</div>

				{/* Map Section */}
				<div className="w-full h-[200px] md:h-[300px] md:col-span-1">
					<iframe
						src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d471156.211960511!2d88.378602!3d22.694472!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f89c6df041e831%3A0x6e3fc1531d1cb33!2sGuru%20Nanak%20Institute%20of%20Technology!5e0!3m2!1sen!2sus!4v1722631019731!5m2!1sen!2sus"
						width="100%"
						height="100%"
						style={{ border: "0" }}
						allowFullScreen
						loading="lazy"
						referrerPolicy="no-referrer-when-downgrade"
						title="Google Map Location"
					></iframe>
				</div>
			</div>

			{/* Copyright Section */}
			<div className="text-center mt-8">
				<p className="text-lg font-semibold text-slate-600">
					© Copyright GNIT {date.getFullYear()}. All Rights Reserved.
				</p>
			</div>
		</div>
	);
};

export default Footer;
