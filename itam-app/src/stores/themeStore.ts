import { defineStore } from 'pinia';

export const useThemeStore = defineStore('theme', {
	state: () => ({
		themeName: 'dark',
	}),

	actions: {
		toggleTheme() {
			this.themeName = this.themeName === 'light' ? 'dark' : 'light';
			document.documentElement.setAttribute('data-theme', this.themeName);
		},
	},
	persist: {
		storage: piniaPluginPersistedstate.cookies(),
	},
});
