module.exports = {
	// файлы в которых применяется tailwind
	darkMode: 'class',
	content: ['./src/components/**/*.{vue,js,ts}', './src/layouts/**/*.vue', './src/pages/**/*.vue', './src/app.vue'],
	theme: {
		extend: {
			keyframes: {
				scroll: {
					'0%': { transform: 'translateX(0)' },
					'100%': { transform: 'translateX(-100%)' },
				},
			},
			animation: {
				scroll: 'scroll 15s linear infinite',
			},
		},
		screens: {
			xs: '480px',
			sm: '640px',
			md: '768px',
			lg: '1024px',
			xl: '1440px',
			'2xl': '1536px',
			'3xl': '1600px',
		},
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
					info: '#6300DB',
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
					info: '#6300DB',
					success: '#00eab9',
					warning: '#f4be00',
					error: '#e04662',
				},
			},
		],
	},
};
