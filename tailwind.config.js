const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
	content: ["./pages/**/*.{ts,tsx,mdx}", "./lib/**/*.{ts,tsx,mdx}"],
	theme: {
		// Tailwind's breakpoints but minus 20px so it's the same with or without
		// scrollbar
		screens: {
			sm: "620px",
			md: "748px",
			lg: "1004px",
			xl: "1260px",
			"2xl": "1516px",
		},
		extend: {
			fontFamily: {
				sans: ["'Inter'", ...defaultTheme.fontFamily.sans],
			},
		},
	},
	plugins: [
		require("@tailwindcss/forms"),
		require("@tailwindcss/typography"),
	],
};
