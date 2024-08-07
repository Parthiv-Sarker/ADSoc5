import React from "react";

const SectionD = () => {
	const importantDatesData = [
		{ col1: "Conference Date:", col2: "14th February-15th February, 2024" },
		{ col1: "Paper Submission begins :", col2: "16th August, 2024" },
		{ col1: "Paper Submission closes :", col2: "15th October, 2024" },
		{ col1: "Author's Notification :", col2: "30th November, 2024" },
		{
			col1: "Author Registration and Camera Ready Copy Submission:",
			col2: "30th December, 2024",
		},
		{
			col1: "Call for Special Session Proposal :",
			col2: "10th August, 2024",
		},
	];

	const registrationFeesData = [
		{
			col1: "National Participants (Non-IEEE Member)",
			col2: "6500 INR",
			col3: "7000 INR",
		},
		{
			col1: "National Participants (IEEE Member)",
			col2: "6000 INR",
			col3: "6500 INR",
		},
		{ col1: "International Participants", col2: "100 USD", col3: "125 US" },
	];

	return (
		<section>
			<div>
				<h1 className="text-2xl md:text-6xl font-extrabold text-center mb-6 md:mb-10">
					Important Dates
				</h1>
				<div className="overflow-x-auto px-4 md:px-20">
					<div className="border border-gray-300 rounded-lg overflow-hidden">
						<table className="min-w-full divide-y divide-gray-200 table-auto">
							<thead className="bg-gray-200">
								<tr>
									<th className="px-4 py-2 text-center text-sm md:text-xl font-bold text-gray-500 uppercase tracking-wider">
										Events
									</th>
									<th className="px-4 py-2 text-center text-sm md:text-xl font-bold text-gray-500 uppercase tracking-wider">
										Date
									</th>
								</tr>
							</thead>
							<tbody className="bg-white divide-y divide-gray-200">
								{importantDatesData.map((row, index) => (
									<tr key={index}>
										<td className="px-4 py-2 text-left whitespace-normal text-sm font-medium text-gray-900 md:text-base border-r border-gray-300">
											{row.col1}
										</td>
										<td className="px-4 py-2 text-left whitespace-normal text-sm text-gray-500 md:text-base">
											{row.col2}
										</td>
									</tr>
								))}
							</tbody>
						</table>
					</div>
				</div>
			</div>

			<div className="mt-20">
				<h1 className="text-2xl md:text-6xl font-extrabold text-center mb-6 md:mb-10">
					Registration Fees
				</h1>
				<div className="overflow-hidden px-4 md:px-20">
					<div className="border border-gray-300 rounded-lg overflow-hidden">
						<table className="w-full divide-y divide-gray-200 table-fixed">
							<thead className="bg-gray-200">
								<tr>
									<th className="w-1/3 px-4 py-2 text-center text-sm md:text-xl font-bold text-gray-500 uppercase tracking-wider">
										Participants
									</th>
									<th className="w-1/3 px-4 py-2 text-center text-sm md:text-xl font-bold text-gray-500 uppercase tracking-wider">
										Academics
									</th>
									<th className="w-1/3 px-4 py-2 text-center text-sm md:text-xl font-bold text-gray-500 uppercase tracking-wider">
										Industry
									</th>
								</tr>
							</thead>
							<tbody className="bg-white divide-y divide-gray-200">
								{registrationFeesData.map((row, index) => (
									<tr key={index}>
										<td className="px-4 py-2 text-left whitespace-normal text-sm font-semibold text-gray-900 md:text-base border-r border-gray-300">
											{row.col1}
										</td>
										<td className="px-4 py-2 font-semibold text-center whitespace-normal text-sm text-gray-900 md:text-base border-r border-gray-300">
											{row.col2}
										</td>
										<td className="px-4 py-2 font-semibold text-center whitespace-normal text-sm text-gray-900 md:text-base">
											{row.col3}
										</td>
									</tr>
								))}
							</tbody>
						</table>
					</div>
				</div>
			</div>

			<div className="w-screen flex flex-col justify-center items-center md:gap-10 mt-20 mb-20">
				<h1 className="md:w-[80%] text-2xl md:text-7xl font-extrabold text-center mb-6 md:mb-10">
					Ready to Submit Publication? It’s just a matter of one click
				</h1>
				<p className="md:w-[80%] text-sm md:text-2xl font-normal text-center">
					Accepted papers will be submitted for inclusion into IEEE Xplore
					subject to meeting IEEE Xplore’s scope and quality requirements
				</p>
				<button className="w-32 md:w-56 h-10 md:h-16 md:text-3xl font-extrabold rounded-full bg-orange-600 hover:bg-orange-500 mt-20">
					Submit
				</button>
			</div>
		</section>
	);
};

export default SectionD;
