/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				pitch: {
					950: '#0a0e13',
					900: '#0e141b',
					800: '#141c25',
					700: '#1c2731',
					600: '#2a3742'
				},
				gold: {
					400: '#e0bc4f',
					500: '#c9a227',
					600: '#a8841c'
				},
				grass: {
					400: '#4d9670',
					500: '#2f6f4e',
					600: '#20553a'
				},
				ink: {
					100: '#edeff2',
					300: '#aeb6c2',
					500: '#8b93a1'
				}
			},
			fontFamily: {
				display: ['"Big Shoulders Display"', 'sans-serif'],
				body: ['"Inter"', 'sans-serif'],
				mono: ['"IBM Plex Mono"', 'monospace']
			},
			backgroundImage: {
				'pitch-lines':
					'repeating-linear-gradient(90deg, rgba(255,255,255,0.025) 0px, rgba(255,255,255,0.025) 1px, transparent 1px, transparent 64px)'
			}
		}
	},
	plugins: []
};