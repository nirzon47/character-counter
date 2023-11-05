/** @type {import('tailwindcss').Config} */
export default {
	content: ['*.html'],
	theme: {
		extend: {},
	},
	plugins: [require('daisyui')],
	daisyui: {
		themes: ['valentine', 'halloween', 'dark', 'cupcake', 'dracula', 'emerald'],
	},
}
