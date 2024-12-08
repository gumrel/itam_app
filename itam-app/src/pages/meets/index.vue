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

const gg = async () => {
	const response = await httpService.get('http://localhost:5001/api');

	console.log(response.message);
};
</script>

<template>
	<div class="flex justify-between p-5 mx-auto max-w-screen-2xl">
		<div class="flex">
			<div>
				<h1
					v-motion-fade-visible-once
					class="text-4xl lg:text-6xl xl:text-8xl font-light text-white mt-16"
				>
					КАЛЕНДАРЬ
				</h1>
				<h1
					v-motion-fade-visible-once
					class="text-4xl lg:text-6xl xl:text-8xl font-light text-white"
				>
					МЕРОПРИЯТИЙ
				</h1>
			</div>
			<button @click="gg">smt</button>
			<!-- <input
				type="text"
				placeholder="поиск по названию"
				class="input input-bordered w-full max-w-xl input-success"
			/> -->
		</div>
		<!-- <div>
			<img
				class="h-5 w-5"
				src="~assets/img/search.png"
				alt=""
			/>
		</div> -->
	</div>
</template>

<style scoped>
.search-input {
	background-image: url('~assets/img/search.png');
	background-repeat: no-repeat;
	background-position: left center;
	padding-left: 30px; /* Чтобы текст не перекрывался с изображением */
}
</style>

<!-- <div class="card-body items-center text-center">
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
<pre>{{ jsony }}</pre> -->
