import type { Config } from 'tailwindcss';

export default {
	content: ['src/**/*.{js,ts,svelte,html}'],
	theme: {
		container: {
			center: true,
			padding: '1rem'
		},
		extend: {}
	},
	plugins: []
} satisfies Config;
