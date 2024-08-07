"use client";
import React from "react";
import { committeeData } from "./committeeData";

const Committee = () => {
	const handleDownload = () => {
		const pdfUrl =
			"https://docs.google.com/uc?export=download&id=1lh_wjG9pOPfBxDmL3SsPhM59GgrtLSDU";
		window.open(pdfUrl, "_blank");
	};

	return (
		<div className="container mx-auto px-2 md:px-4 md:py-8">
			<h1 className="text-4xl md:text-7xl text-center font-extrabold py-28 md:py-0 md:mt-28 mb-0 md:mb-10">
				Committee
			</h1>
			{committeeData.map((data, index) => (
				<div key={index} className="mb-6">
					<h1 className="text-2xl font-extrabold uppercase underline mb-2">
						{data?.title}
					</h1>
					<h1 className="text-slate-600 text-xl font-bold underline md:pl-4 mb-2">{data?.subTitle}</h1>
					<ul className="list-disc pl-5 md:ml-6">
						{data?.member.map((memberData, index) => (
							<li key={index} className="">
								<span className="text-lg font-bold">{memberData.name},</span>
								<span className="text-base">{memberData.title},</span>
								<span className="text-base">{memberData.organization}</span>
							</li>
						))}
					</ul>
				</div>
			))}
			<div className="w-full flex justify-center items-center mb-10 md:mb-0 mt-8">
				<button
					className="w-32 md:w-56 h-10 md:h-16 md:text-3xl font-extrabold rounded-full bg-orange-600 hover:bg-orange-500 mt-10"
					onClick={handleDownload}
				>
					Download
				</button>
			</div>
		</div>
	);
};

export default Committee;
