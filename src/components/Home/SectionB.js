import React from "react";
import Image from "next/image";

import marqueeImageArray from "../../../public/assets/marquee_image/marqueeImg";

const SectionB = () => {
	return (
		<div className="mt-20">
			<h1 className="text-2xl md:text-6xl font-extrabold text-center mb-6 md:mb-10">
				Images
			</h1>
			<section className="w-screen flex flex-col justify-center items-center relative">
				<div className="w-[98%] h-[30vh] md:h-[50vh] flex justify-center items-center gap-6 overflow-hidden">
					{marqueeImageArray.map((item, index) => (
						<>
							<Image
								src={item}
								key={index}
								className="w-[28rem] h-80 rounded-md animate-img-marquee"
								alt={`Marquee Image ${index}`}
							/>
						</>
					))}
				</div>
			</section>
		</div>
	);
};

export default SectionB;
