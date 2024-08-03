import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import marqueeImageArray from "../../../public/assets/marquee_image/marqueeImg";

const SectionB = () => {
	const [index, setIndex] = useState(0);
	const timeoutRef = useRef(null);

	const delay = 4000;

	const resetTimeout = () => {
		if (timeoutRef.current) {
			clearTimeout(timeoutRef.current);
		}
	};

	useEffect(() => {
		resetTimeout();
		timeoutRef.current = setTimeout(
			() =>
				setIndex((prevIndex) =>
					prevIndex === marqueeImageArray.length - 1 ? 0 : prevIndex + 1
				),
			delay
		);

		return () => {
			resetTimeout();
		};
	}, [index]);

	const moveLeft = () => {
		setIndex((prevIndex) =>
			prevIndex === 0 ? marqueeImageArray.length - 1 : prevIndex - 1
		);
	};

	const moveRight = () => {
		setIndex((prevIndex) =>
			prevIndex === marqueeImageArray.length - 1 ? 0 : prevIndex + 1
		);
	};

	return (
		<div className="mt-20 relative">
			<h1 className="text-2xl md:text-6xl font-extrabold text-center md:mb-10">
				Images
			</h1>
			<section className="w-screen flex flex-col justify-center items-center relative">
				<div className="w-[98%] h-[80vh] md:h-[50vh] flex justify-center items-center overflow-hidden relative">
					<div
						className="flex transition-transform duration-500"
						style={{ transform: `translateX(${-index * 100}%)` }}
					>
						{marqueeImageArray.map((img, i) => (
							<div
								className="min-w-full box-border flex justify-center items-center"
								key={i}
							>
								<Image
									src={img.src}
									alt={`Marquee image ${i + 1}`}
									className="w-full md:w-[50rem] h-auto object-cover"
									priority={true}
								/>
							</div>
						))}
					</div>
					<button
						className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 cursor-pointer select-none"
						onClick={moveLeft}
					>
						&#10094;
					</button>
					<button
						className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 cursor-pointer select-none"
						onClick={moveRight}
					>
						&#10095;
					</button>
				</div>
			</section>
		</div>
	);
};

export default SectionB;
