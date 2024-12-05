export default defineNuxtConfig({
	srcDir: 'src',
	compatibilityDate: '2024-04-03',
	devtools: { enabled: true },
	ssr: true,

	modules: ['@pinia/nuxt', 'pinia-plugin-persistedstate/nuxt', '@vueuse/motion/nuxt'],

	css: ['~/assets/css/tailwind.css', '@/assets/main.css'],

	postcss: {
		plugins: {
			tailwindcss: {},
			autoprefixer: {},
		},
	},
	runtimeConfig: {
		public: {
			motion: {
				directives: {
					'pop-bottom': {
						initial: {
							scale: 0,
							opacity: 0,
							y: 100,
						},
						visible: {
							scale: 1,
							opacity: 1,
							y: 0,
						},
					},
				},
			},
		},
	},
});
