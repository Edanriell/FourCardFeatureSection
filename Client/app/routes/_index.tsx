import type { MetaFunction } from "@remix-run/node";

import { HomePage } from "@pages/home";

export const meta: MetaFunction = () => {
	return [
		{ title: "Reliable, efficient delivery Powered by Technology" },
		{
			name: "description",
			content:
				"Our Artificial Intelligence powered tools use millions of project data points to ensure that your project is successful"
		}
	];
};

export default HomePage;
