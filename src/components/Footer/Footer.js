import React from "react";

const Footer = () => {
	return (
		<div className="w-screen h-auto flex flex-col md:flex-row justify-between items-center bg-slate-400 px-4 py-8 md:px-20">
			<h1 className="text-3xl md:text-6xl text-center md:text-left mb-4 md:mb-0">
				Footer
			</h1>
			<div className="w-[120px] md:w-[300px] h-[120px] md:h-[300px]">
				<iframe
					src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d471156.211960511!2d88.378602!3d22.694472!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f89c6df041e831%3A0x6e3fc1531d1cb33!2sGuru%20Nanak%20Institute%20of%20Technology!5e0!3m2!1sen!2sus!4v1722631019731!5m2!1sen!2sus"
					width="100%"
					height="100%"
					style={{ border: "0" }}
					allowFullScreen
					loading="lazy"
					referrerPolicy="no-referrer-when-downgrade"
				></iframe>
			</div>
		</div>
	);
};

export default Footer;
