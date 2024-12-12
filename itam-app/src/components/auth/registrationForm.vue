<script setup lang="ts">
import httpService from '~/services/httpService';
import { useAuthStore } from '#imports';
import { useRouter } from 'vue-router';

import type { IRegistrationForm } from '~/services/commentsTypes';

const authStore = useAuthStore();
const router = useRouter();

const modal = ref();
const login = ref();

const formData = ref<IRegistrationForm>({
	name: '',
	pass: '',
	email: '',
	receiveNotifications: false,
	fio: '',
	group: '',
	telegram: '',
	isAdmin: false,
});

const loginData = ref({
	pass: '',
	email: '',
});

function openModal() {
	if (authStore.user) {
		router.push('/accaunt');
	} else modal.value?.showModal();
}

function closeModal() {
	modal.value?.close();
}

function openLogin() {
	login.value?.showModal();
}

function closeLogin() {
	login.value?.close();
}

const registration = async () => {
	try {
		await httpService.post('https://e7d8a4eab9d32595.mokky.dev/users', formData.value);
		authStore.user = formData.value;
		authStore.isAdmin = formData.value.isAdmin;
		closeModal();
		router.push('/accaunt');
	} catch (error) {
		console.error(error);
		throw error;
	}
};

const auth = async () => {
	try {
		const response: any = await httpService.get('https://e7d8a4eab9d32595.mokky.dev/users');
		const users = response || [];

		const user = users.find(
			(u: any) => u.email.trim().toLowerCase() === loginData.value.email.trim().toLowerCase(),
		);

		if (user) {
			if (user.pass && user.pass === loginData.value.pass) {
				authStore.user = user;
				authStore.isAdmin = user.isAdmin;

				closeLogin();
				router.push('/accaunt');
			} else {
				alert('Неверный пароль');
			}
		} else {
			alert('Неверный email или пользователь не найден');
		}
	} catch (error) {
		console.error('Ошибка авторизации:', error);
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
			<h1 class="text-4xl lg:text-6xl xl:text-8xl font-light text-white mt-5 ml-4">РЕГИСТРАЦИЯ</h1>
			<h1 class="text-4xl lg:text-6xl xl:text-8xl font-light text-white ml-4">В СИСТЕМЕ ITAM</h1>
			<h3 class="font-thin text-xl ml-4 mt-3">Создайте аккаунт, чтобы войти в личный кабинет</h3>
			<button
				@click="closeModal"
				class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 m-2"
			>
				✕
			</button>

			<div class="flex sm:mt-10 mt-5 sm:flex-row flex-col ml-4 gap-10">
				<div class="-mb-8">
					<h1>* Имя</h1>
					<label class="input input-bordered flex items-center gap-2 mb-2 mt-5">
						<input
							v-model="formData.name"
							type="text"
							class="grow"
							placeholder="Введите имя"
						/>
					</label>
				</div>

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
			</div>

			<div class="flex sm:flex-row flex-col sm:mt-5 ml-5 gap-10">
				<div class="mt-2">
					<h1>* пароль</h1>
					<label class="input input-bordered flex items-center gap-2 mb-2 mt-5 mr-3">
						<input
							v-model="formData.pass"
							type="password"
							class="grow"
							placeholder="Введите пароль"
						/>
					</label>
				</div>

				<div class="flex sm:mt-12 items-center">
					<h1 class="mb-2">Получать уведомления</h1>
					<label class="cursor-pointer label mb-3 ml-3">
						<input
							v-model="formData.receiveNotifications"
							type="checkbox"
							class="checkbox checkbox-accent"
						/>
					</label>
				</div>
			</div>

			<div class="flex sm:flex-row flex-col justify-between m-5">
				<button
					class="btn btn-success sm:text-lg text-base font_family"
					@click="registration()"
				>
					зарегистрироваться
				</button>
				<button
					class="btn-primary text-primary font_family mt-3"
					@click="
						closeModal();
						openLogin();
					"
				>
					логин
				</button>
			</div>
		</div>
	</dialog>

	<dialog
		ref="login"
		class="modal"
	>
		<div class="modal-box max-w-screen-lg">
			<h1 class="text-4xl lg:text-6xl xl:text-8xl font-light text-white mt-5 ml-4">ВХОД В СИСТЕМУ</h1>
			<h1 class="text-4xl lg:text-6xl xl:text-8xl font-light text-white ml-4">ITAM</h1>
			<h3 class="font-thin text-xl ml-4 mt-3">Введите данные, чтобы войти в личный кабинет</h3>
			<button
				@click="closeLogin"
				class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 m-2"
			>
				✕
			</button>

			<div class="flex sm:mt-10 mt-5 sm:flex-row flex-col ml-4 gap-10">
				<div class="-mb-8">
					<h1>* Email</h1>
					<label class="input input-bordered flex items-center gap-2 mb-2 mt-5">
						<input
							v-model="loginData.email"
							type="email"
							class="grow"
							placeholder="Введите Email"
						/>
					</label>
				</div>

				<div class="">
					<h1>* пароль</h1>
					<label class="input input-bordered flex items-center gap-2 mb-2 mt-5 mr-3">
						<input
							v-model="loginData.pass"
							type="password"
							class="grow"
							placeholder="Введите пароль"
						/>
					</label>
				</div>
			</div>

			<div class="flex sm:flex-row flex-col justify-between m-5">
				<button
					class="btn btn-success sm:text-lg text-base sm:w-44 font_family"
					@click="auth()"
				>
					войти
				</button>
				<button
					class="btn-primary text-primary mt-3 font_family"
					@click="
						closeLogin();
						openModal();
					"
				>
					регистрация
				</button>
			</div>
		</div>
	</dialog>
</template>

<style scoped>
.font_family {
	font-family: 'Furore', sans-serif;
}
</style>
