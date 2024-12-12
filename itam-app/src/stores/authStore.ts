import { defineStore } from 'pinia';
import { login } from '@/services/auth/authApi';
import type { IRegistrationForm } from '~/services/commentsTypes';

export const useAuthStore = defineStore(
	'auth',
	() => {
		const user = ref<IRegistrationForm | null>();
		const isAdmin = ref<boolean>();
		const isLoading = ref<boolean>();

		// const getMe = async () => {
		// 	isLoading.value = true;
		// 	const data = await login();

		// 	if (data) {
		// 		user.value = data;
		// 	} else user.value = null;

		// 	isLoading.value = false;
		// };

		const logOut = async () => {
			user.value = null;
		};

		return {
			user,
			isAdmin,
			isLoading,
			// getMe,
			logOut,
		};
	},
	{
		persist: {
			storage: piniaPluginPersistedstate.cookies(),
		},
	},
);
