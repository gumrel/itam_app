<script setup lang="ts">
import httpService from '~/services/httpService';
import { useAuthStore } from '#imports';

interface RegistrationForm {
	firstName: string;
	password: string;
	group: string;
	telegram: string;
	email: string;
	receiveNotifications: boolean;
}

const modal = ref();

const formData = ref<RegistrationForm>({
	firstName: '',
	password: '',
	group: '',
	telegram: '',
	email: '',
	receiveNotifications: false,
});

function openModal() {
	modal.value?.showModal();
}

function closeModal() {
	modal.value?.close();
}

const allUsers = async () => {
	const data = await httpService.get('http://localhost:5001/api/users');
	console.log(data);
};

const registration = async () => {
	const data = await httpService.post('http://localhost:5001/api/users', formData.value);
	console.log(data);
};

// /\

interface LoginResponse {
	token: string;
}

interface LoginData {
	email: string;
	password: string;
}

const authStorage = useAuthStore();

const loginData = ref({
	email: '',
	password: '',
});

const login = async () => {
	try {
		const response = await httpService.post<LoginResponse, LoginData>(
			'http://localhost:5001/api/auth/login',
			loginData.value,
		);
		if (response.token) {
			authStorage.auth_token = response.token;
			// localStorage.setItem('auth_token', response.token);
			console.log(response.token);
		}
	} catch (error) {
		console.error('Login failed', error);
	}
};
</script>

<template>
	<img
		class="h-8 mt-2 cursor-pointer"
		@click="openModal"
		src="~assets/img/qlementine-icons_user-16.png"
		alt="User Icon"
	/>

	<dialog
		ref="modal"
		class="modal"
	>
		<div class="modal-box max-w-screen-lg">
			<h1 class="text-4xl lg:text-6xl xl:text-8xl font-light text-white mt-10 ml-4">форма</h1>
			<h1 class="text-4xl lg:text-6xl xl:text-8xl font-light text-white ml-4">регистрации</h1>
			<button
				@click="closeModal"
				class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 m-8"
			>
				✕
			</button>

			<div class="flex mt-10 ml-4 gap-10">
				<div>
					<h1>* Имя</h1>
					<label class="input input-bordered flex items-center gap-2 mb-2 mt-5">
						<input
							v-model="formData.firstName"
							type="text"
							class="grow"
							placeholder="Введите имя"
						/>
					</label>
				</div>

				<div>
					<h1>* пароль</h1>
					<label class="input input-bordered flex items-center gap-2 mb-2 mt-5 mr-3">
						<input
							v-model="formData.password"
							type="password"
							class="grow"
							placeholder="Введите пароль"
						/>
					</label>
				</div>
			</div>

			<div class="flex mt-5 ml-5 gap-10">
				<div>
					<h1>* Учебная группа</h1>
					<label class="input input-bordered flex items-center gap-2 mb-2 mt-5">
						<input
							v-model="formData.group"
							type="text"
							class="grow"
							placeholder="Введите группу"
						/>
					</label>
				</div>

				<div>
					<h1>* Telegram</h1>
					<label class="input input-bordered flex items-center gap-2 mb-2 mt-5 mr-3">
						<input
							v-model="formData.telegram"
							type="text"
							class="grow"
							placeholder="Введите Telegram"
						/>
					</label>
				</div>
			</div>

			<div class="flex mt-5 ml-5 gap-10">
				<div>
					<h1>* Email</h1>
					<label class="input input-bordered flex items-center gap-2 mb-2 mt-5">
						<input
							v-model="formData.email"
							type="email"
							class="grow"
							placeholder="Введите Email"
						/>
					</label>
				</div>

				<div class="flex mt-12 items-center">
					<h1 class="mb-2">Получать уведомления на почту</h1>
					<label class="cursor-pointer label mb-3 ml-3">
						<input
							v-model="formData.receiveNotifications"
							type="checkbox"
							class="checkbox checkbox-accent"
						/>
					</label>
				</div>
			</div>

			<div class="flex justify-between m-5">
				<button
					class="btn-primary text-primary"
					@click="allUsers()"
				>
					логин
				</button>
				<button
					class="btn btn-primary"
					@click="
						registration();
						closeModal();
					"
				>
					зарегистрироваться
				</button>
			</div>
		</div>
	</dialog>
</template>
