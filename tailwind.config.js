/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	theme: {
		extend: {
			fontFamily: {
				Kanit: ['Kanit, sans-serif'],
			},

			colors: {
				btnViolet: '#C422FE',
				colorPink: '#FF52A4',
				yellowTop: '#A68F08',
				yellowMiddle: '#FFDE19',
				yellowBottom: '#FFED81',
			},

			spacing: {
				'50vh': '50vh',
				'75vh': '75vh',
			},

			keyframes: {
				typing: {
					'0%': {
						width: '0%',
						visibility: 'hidden',
					},
					'100%': {
						width: '100%',
					},
				},
				blink: {
					'50%': {
						borderColor: 'transparent',
					},
					'100%': {
						borderColor: 'white',
					},
				},
			},

			animation: {
				typing: 'typing 2s steps(20) infinite alternate, blink .7s infinite',
			},
		},
	},
	plugins: [],
}

