export default defineNuxtConfig({
	srcDir: 'src',
	compatibilityDate: '2024-04-03',
	devtools: { enabled: true },
	ssr: true,

	modules: ['@pinia/nuxt', 'pinia-plugin-persistedstate/nuxt'],

	css: ['~/assets/css/tailwind.css', '@/assets/main.css'],

	postcss: {
		plugins: {
			tailwindcss: {},
			autoprefixer: {},
		},
	},
});
