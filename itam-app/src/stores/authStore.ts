import { defineStore } from 'pinia';
import { login } from '@/services/auth/authApi';
import type { IRegistrationForm } from '~/services/commentsTypes';

export const useAuthStore = defineStore(
	'auth',
	() => {
		const user = ref<IRegistrationForm | null>();
		const isAdmin = ref<boolean>();
		const isLoading = ref<boolean>();

		const logOut = async () => {
			user.value = null;
		};

		return {
			user,
			isAdmin,
			isLoading,
			logOut,
		};
	},
	{
		persist: {
			storage: piniaPluginPersistedstate.cookies(),
		},
	},
);
