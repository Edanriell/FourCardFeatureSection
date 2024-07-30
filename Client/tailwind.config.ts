import type { Config } from "tailwindcss";

export default {
	content: [
		"./app/**/{**,.client,.server}/**/*.{js,jsx,ts,tsx}",
		"./pages/**/*.{js,ts,jsx,tsx}",
		"./shared/**/*.{js,ts,jsx,tsx}",
		"./widgets/**/*.{js,ts,jsx,tsx}"
	],
	theme: {
		screens: {
			tablet: "768px",
			laptop: "1024px",
			desktop: "1440px"
		},
		fontWeight: {
			thin: "100",
			extralight: "200",
			light: "300",
			normal: "400",
			medium: "500",
			semibold: "600",
			bold: "700",
			extrabold: "800",
			black: "900"
		},
		fontFamily: {
			poppins: ["Poppins"]
		},
		extend: {
			boxShadow: {
				featureCard: "0 1.5rem 3rem -1.1rem rgba(131, 166, 210, 0.5)"
			},
			gridTemplateRows: {
				"4-custom": "repeat(4, 11rem)"
			},
			gridTemplateColumns: {
				"3-custom": "repeat(3, 35rem)"
			}
		}
	},
	plugins: []
} satisfies Config;
