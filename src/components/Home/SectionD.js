import React from "react";

const SectionD = () => {
	const data = [
		{ col1: "Row 1, Column 1", col2: "Row 1, Column 2" },
		{ col1: "Row 2, Column 1", col2: "Row 2, Column 2" },
		{ col1: "Row 3, Column 1", col2: "Row 3, Column 2" },
		{ col1: "Row 4, Column 1", col2: "Row 4, Column 2" },
		{ col1: "Row 5, Column 1", col2: "Row 5, Column 2" },
	];

	return (
		<section>
			<h1 className="text-2xl md:text-6xl font-extrabold text-center mb-6 md:mb-10">
				Important Dates
			</h1>
			<div className="overflow-x-auto md:px-20">
				<table className="min-w-full divide-y divide-gray-200">
					<thead className="bg-gray-200">
						<tr>
							<th className="px-6 py-3 text-center text-xl font-bold text-gray-500 uppercase tracking-wider">
								Title
							</th>
							<th className="px-6 py-3 text-center text-xl font-bold text-gray-500 uppercase tracking-wider">
								Date
							</th>
						</tr>
					</thead>
					<tbody className="bg-white divide-y divide-gray-200">
						{data.map((row, index) => (
							<tr key={index}>
								<td className="px-6 py-4 text-center whitespace-nowrap text-sm font-medium text-gray-900">
									{row.col1}
								</td>
								<td className="px-6 py-4 text-center whitespace-nowrap text-sm text-gray-500">
									{row.col2}
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</section>
	);
};

export default SectionD;
