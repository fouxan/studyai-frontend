import type { Config } from "tailwindcss";

const config: Config = {
	darkMode: ["class"],
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			colors: {
				primary: {
					"50": "#FAFBF9",
					"100": "#F6F7F2",
					"200": "#EAEEE2",
					"300": "#E1E6D6",
					"400": "#D7DEC9",
					"500": "#CDD6BB",
					"600": "#A8B889",
					"700": "#82965A",
					"800": "#56633B",
					"900": "#003231",
					"950": "#16190F",
				},
				font: {
					"50": "#FEFDFB",
					"100": "#FEFDFB",
					"200": "#FCF8F3",
					"300": "#FBF6EF",
					"400": "#F9F2E7",
					"500": "#F8F0E3",
					"600": "#E4C695",
					"700": "#D29F4B",
					"800": "#976C26",
					"900": "#4E3713",
					"950": "#251A09",
				},
			},
			borderRadius: {
				lg: "var(--radius)",
				md: "calc(var(--radius) - 2px)",
				sm: "calc(var(--radius) - 4px)",
			},
			fontFamily: {
				sans: ["Manrope", "sans-serif"],
				monospace: ["Courier", "monospace"],
			},
			keyframes: {
				"accordion-down": {
					from: {
						height: "0",
					},
					to: {
						height: "var(--radix-accordion-content-height)",
					},
				},
				"accordion-up": {
					from: {
						height: "var(--radix-accordion-content-height)",
					},
					to: {
						height: "0",
					},
				},
			},
			animation: {
				"accordion-down": "accordion-down 0.2s ease-out",
				"accordion-up": "accordion-up 0.2s ease-out",
			},
		},
	},
	// plugins: [require("tailwindcss-animate")],
};
export default config;
