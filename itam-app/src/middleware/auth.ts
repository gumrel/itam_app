export default defineNuxtRouteMiddleware(async () => {
	const authStore = useAuthStore();

	// if (!authStore.user) {
	return await navigateTo('/');
	// }

	// if (smt) {
	//     return abortNavigation()
	//   }
});
