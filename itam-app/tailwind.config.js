module.exports = {
	// файлы в которых применяется tailwind
	darkMode: 'class',
	content: ['./src/components/**/*.{vue,js,ts}', './src/layouts/**/*.vue', './src/pages/**/*.vue', './src/app.vue'],
	theme: {
		extend: {},
	},
	plugins: [require('daisyui')],
	daisyui: {
		themes: [
			{
				dark: {
					primary: '#f3f4f6',
					secondary: '#9ca3af',
					accent: '#84cc16',
					neutral: '#6b7280',
					'base-100': '#1118',
					info: '#38bdf8',
					success: '#22c55e',
					warning: '#facc15',
					error: '#f43f5e',
				},
			},
			{
				light: {
					primary: '#1118',
					secondary: '#00a39a',
					accent: '#ff4500',
					neutral: '#0f1516',
					'base-100': '#f3f4f6',
					info: '#00d5ff',
					success: '#00eab9',
					warning: '#f4be00',
					error: '#e04662',
				},
			},
		],
	},
};
