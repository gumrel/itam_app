<script setup>
import axios from 'axios';
import httpService from '~/services/httpService';

// definePageMeta({
// 	middleware: ['auth'],
// });

const post = async () => {
	try {
		const data = await httpService.post('https://e7d8a4eab9d32595.mokky.dev/meets', 1);

		console.log(data);
	} catch (error) {
		console.error(error);
		throw error;
	}
};
const jsony = ref();
const a = async () => {
	const data = await httpService.get('https://e7d8a4eab9d32595.mokky.dev/users', {
		headers: {
			Authorization: `Bearer {getCookie('token')}`, // пример ручного ввода токена
		},
	});

	jsony.value = data;
};
// f();
// const store = useAuthStore();
// store.getMe();
</script>

<template>
	<div class="card sm:w-96 w-48 shadow-xl m-10">
		<div class="card-body items-center text-center">
			<h2 class="card-title">Shoes!</h2>
			<p class="sm:text-3xl text-sm">If a dog chews shoes whose shoes does he choose?</p>
			<div class="card-actions">
				<NuxtLink
					class="btn btn-primary"
					to="/"
					>to /</NuxtLink
				>
			</div>
		</div>

		<button
			class="btn btn-secondary m-5"
			@click="post"
		>
			post
		</button>
		<button
			class="btn btn-info"
			@click="a"
		>
			Log in
		</button>
		<pre>{{ jsony }}</pre>
	</div>
</template>
