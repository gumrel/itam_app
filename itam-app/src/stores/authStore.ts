import { defineStore } from 'pinia';
import { login } from '~/services/auth/authApi';
import type { IUser } from '~/services/commentsTypes';

export const useAuthStore = defineStore(
	'auth',
	() => {
		const isLoading = ref<boolean>(false);
		const user = ref<IUser | null>();

		// const refreshingError = ref<boolean>(false);
		// const loginErrorMessage = ref<string | null>(null);
		// const isAuthinticated = computed<boolean>(() => !!user.value);
		// const isAdmin = computed<boolean>(() => !!user.value && user.value.is_superuser);

		const getMe = async () => {
			isLoading.value = true;
			const data = await login();

			if (data) {
				user.value = data;
			} else user.value = null;

			isLoading.value = false;
		};

		const logOut = async () => {
			user.value = null;
		};

		return {
			user,
			isLoading,
			getMe,
			logOut,
		};
	},
	{
		persist: {
			storage: piniaPluginPersistedstate.cookies(),
		},
	},
);
