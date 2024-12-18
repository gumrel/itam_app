import { defineNuxtRouteMiddleware } from 'nuxt/app';

export default defineNuxtRouteMiddleware(async () => {
	const authStore = useAuthStore();

	if (!authStore.user) {
		return await navigateTo('/');
	}
});
