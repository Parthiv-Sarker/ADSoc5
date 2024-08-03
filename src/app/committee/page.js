"use client";
import React from "react";

const committeeData = {
	"chief Patron": ["Sardar Taranjit Singh, Managing Director, JIS Group"],
	patron: [
		"Sardar Harnanjit Singh, Joint MD, JIS Group",
		"Sardar Amrik Singh, Deputy MD, JIS Group",
		"Ms. Manpreet Kaur, CEO, JIS Group",
		"Sardar Simarpreet Singh, Director, JIS Group",
		"Ms. Jaspreet Kaur, Director, JIS Group",
		"Sardar Harjot Singh, Director, JIS Group",
		"Sardar Amanjot Singh, Director, JIS Group",
		"Sardar Anmol Singh Narula, Director, JIS Group",
	],
	"general Chair": ["Prof. (Dr.) Swarup Kr. Mitra, Principal, GNIT"],
	"general CoChair And Convener": [
		"Dr. Suman Bhattacharya, Associate Professor, CSE Dept., GNIT",
		"Dr. Barnali Kundu, Associate Professor, EE Dept., GNIT",
		"Dr. Mahamuda Sultana, Associate Professor, CSE Dept., GNIT",
	],
	"tpc Chair": ["Dr. Suman Bhattacharya, Associate Professor, CSE Dept., GNIT"],
	"organizing Chair": [
		"Dr. Mahamuda Sultana, Associate Professor, CSE Dept., GNIT",
	],
	"publicity Chair": [
		"Dr. Debashree Saha, Associate Professor, EE Dept., GNIT",
		"Dr. Ananjan Maiti, Assistant Professor, CSE Dept., GNIT",
		"Ms. Nilanjana Adhikari, Assistant Professor, CSE Dept., GNIT",
	],
	"registration Chair": [
		"Dr. Srabani Kundu, Associate Professor, CSE Dept., GNIT",
	],
	"registration CoChair": [
		"Dr. Suman Ghosh, Assistant Professor, EE Dept., GNIT",
		"Ms. Paramita Sarkar, Assistant Professor, CSE Dept., GNIT",
	],
	"hospitality Chair": [
		"Dr. Ipsita Saha, Associate Professor, CSE Dept., GNIT",
	],
	"hospitality CoChair": [
		"Dr. Aveek Chattopadhyaya, Assistant Professor, EE Dept., GNIT",
		"Ms. Sayani Chandra, Assistant Professor, CSE Dept., GNIT",
		"Ms. Subhra Sen, Assistant Professor, EE Dept., GNIT",
	],
	"webDesign And GraphicsChair": [
		"Mr. Sourish Mitra, Assistant Professor, CSE Dept., GNIT",
	],
	"webDesign And GraphicsCoChair": [
		"Mr. Moloy Dhar, Assistant Professor, CSE Dept., GNIT",
		"Mr. Shyamal Kumar Roy, Assistant Professor, EE Dept., GNIT",
	],
	"finance Chair": [
		"Dr. Adhish Chakraborty, Registrar (Acting), GNIT",
		"Mr. Kallol Pal, Accountant, GNIT",
	],
	"finance CoChair": [
		"Dr. Sayan Nath, Assistant Professor, CSE Dept., GNIT",
		"Mr. Susovan Dutta, Assistant Professor, EE Dept., GNIT",
	],
	"organizing Committee": [
		"Dr. Hindol Bhattacharya, Assistant Professor, CSE Dept., GNIT",
		"Mr. Amit Debnath, Assistant Professor, EE Dept., GNIT",
		"Ms. Pallabi Das, Assistant Professor, CSE Dept., GNIT",
		"Mr. Nirupam Saha, Assistant Professor, CSE Dept., GNIT",
		"Ms. Bidyutmala Saha, Assistant Professor, CSE Dept., GNIT",
		"Ms. Mandira Banik, Assistant Professor, CSE Dept., GNIT",
		"Mr. Rafiqul Islam, Assistant Professor, CSE Dept., GNIT",
		"Ms. Priyanka Chakraborty, Assistant Professor, CSE Dept., GNIT",
		"Mr. Sumit Kr Banerjee, Assistant Professor, CSE Dept., GNIT",
		"Ms. Priyanka Ghosh, Assistant Professor, CSE Dept., GNIT",
		"Mr. Shuvodeep Debnath, Assistant Professor, CSE Dept., GNIT",
		"Mr. Dipankar Basu, Assistant Professor, CSE Dept., GNIT",
		"Ms. Sutapa Sarkar, JTA, CSE Dept., GNIT",
		"Mr. Krishnendu Chowdhury, JTA, CSE Dept., GNIT",
		"Mr. Suman Pandit, JTA, CSE Dept., GNIT",
		"Mr. Manash Pal, JTA, CSE Dept., GNIT",
		"Ms. Mou Ghosh, JTA, CSE Dept., GNIT",
	],
};

const Committee = () => {
	const handleDownload = () => {
		const pdfUrl = "/Committee-List.pdf";

		const link = document.createElement("a");
		link.href = pdfUrl;
		link.download = "Committee-List.pdf";
		document.body.appendChild(link);
		link.click();
		document.body.removeChild(link);
	};

	return (
		<div className="container mx-auto px-2 md:px-4 md:py-8">
			<h1 className="text-4xl md:text-7xl text-center font-extrabold py-28 md:py-0 md:mt-28 mb-0 md:mb-10">
				Committee
			</h1>
			{Object.entries(committeeData).map(([sectionTitle, members], index) => (
				<div key={index} className="mb-6">
					<h2 className="text-xl md:text-2xl font-bold mb-4 uppercase underline">
						{sectionTitle}
					</h2>
					<ul className="list-disc pl-5">
						{members.map((member, idx) => (
							<li key={idx} className="mb-2">
								{member}
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
