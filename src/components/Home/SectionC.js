import React from "react";
import Image from "next/image";
import img from "../../../public/assets/marquee_image/img6.jpeg";

const SectionC = () => {
	return (
		<div>
			<section className="w-screen md:h-[80vh] md:flex justify-around items-center px-10 md:gap-10">
				<div className="md:w-[50%]">
					<Image src={img} quality={100} className="w-[100vw] h-[60vh]"/>
				</div>
				<div className="md:w-[50%] text-pretty">
					<h1 className="md:text-3xl font-semibold text-gray-500 mb-2 md:mb-6">Welcome To</h1>
                    <h1 className="md:text-5xl font-extrabold mb-2 md:mb-4">ADSoc5 2025</h1>
					<p className="text-base">
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt,
						necessitatibus animi. Facere consequuntur iste reiciendis molestiae
						hic error obcaecati fugit libero qui ea, eligendi, quasi quos
						ducimus saepe illo? Deleniti?
					</p>
				</div>
			</section>
		</div>
	);
};

export default SectionC;
