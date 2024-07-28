import type { Config } from "tailwindcss";

export default {
	content: [
		"./app/**/{**,.client,.server}/**/*.{js,jsx,ts,tsx}",
		"./pages/**/*.{js,ts,jsx,tsx}",
		"./shared/**/*.{js,ts,jsx,tsx}",
		"./widgets/**/*.{js,ts,jsx,tsx}"
	],
	theme: {
		extend: {}
	},
	plugins: []
} satisfies Config;
