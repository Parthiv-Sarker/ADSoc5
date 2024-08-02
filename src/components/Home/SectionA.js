import React from "react";

const SectionA = () => {
	return (
		<div>
			<section className="w-screen flex flex-col justify-center items-center">
				<div className="w-[95%] md:w-[85%] text-center mt-28 md:mb-6">
					<h1 className="text-4xl md:text-8xl font-extrabold mb-4">
						AI-Driven Smart Healthcare for Society 5.0
					</h1>
					<h2 className="text-3xl md:text-6xl font-extrabold mb-4">(ADSoc5)</h2>
					<p className="text-lg md:text-xl font-bold mb-4 text-orange-500 md:p-4">
						14th Feb-15th Feb 2025
					</p>
				</div>
				<div className="w-[95%] md:w-[85%] text-center mb-10">
					<p className="text-xl font-bold text-orange-500">Organised by</p>
					<h2 className="text-xl md:text-2xl font-bold">
						Department of Computer Science and Engineering and Electrical
						Engineering <br />
						(Both are NBA accredited)
					</h2>
				</div>
				<div className="w-[95%] md:w-[85%] text-center flex flex-col gap-2 mb-10">
					<h2 className="text-xl md:text-4xl font-bold">
						Guru Nanak Institute of Technology
					</h2>
					<p className="text-base md:text-xl font-bold">
						(NAAC ‘A+’ Accredited)
					</p>
					<p className="md:text-lg font-medium">
						157/F, Nilgunj Road, Panihati, Kolkata, West Bengal 700114
					</p>
				</div>
				<div className="w-[95%] md:w-[85%] text-center mb-20">
					<p className="text-xl font-bold text-orange-500 mb-2">
						Technically Co-sponsored by
					</p>
					<h1 className="text-2xl font-extrabold">IEEE Kolkata Section</h1>
				</div>
				<div className="w-screen text-center mb-6 bg-black p-4 overflow-hidden whitespace-nowrap">
					<h1 className="md:text-6xl font-bold text-white inline-block animate-marquee">
						Accepted papers will be submitted for SCOPUS/SCI/BOOK CHAPTER
						Publication.
					</h1>
					<h1 className="md:text-6xl font-bold text-white inline-block animate-marquee">
						Accepted papers will be submitted for SCOPUS/SCI/BOOK CHAPTER
						Publication.
					</h1>
				</div>
			</section>
		</div>
	);
};

export default SectionA;
