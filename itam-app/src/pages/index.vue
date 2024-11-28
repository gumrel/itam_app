<script setup lang="ts">
import httpService from '~/services/httpService';

let data = ref();

interface Apartment {
	id: number;
	address: string;
	coordinates: [number, number];
	price: number;
	rooms: number;
	description: string;
	detailsUrl: string;
	imageUrl: string;
}

async function fetchUserData(userId: number) {
	try {
		const url = `https://9af78c5f5318e74a.mokky.dev/adress_coord?id=${userId}`;
		const userData = await httpService.get<Apartment>(url);
		console.log('smt - :', userData);
		data.value = userData;
	} catch (error) {
		console.error('Error fetching user data:', error);
		throw error;
	}
}

const authStore = useAuthStore();

const ast = async () => {
	authStore.getMe();
};

//

const getPy = async () => {
	const data = await httpService.get('http://127.0.0.1:5001/api/data', {
		headers: {
			Authorization: `Bearer {getCookie('token')}`, // пример ручного ввода токена
		},
	});
	console.log(data);
};

const sendData = async () => {
	let stringDate = new Date().toISOString();
	try {
		const data = { name: stringDate };
		const res = await httpService.post('http://127.0.0.1:5001/api/data', data);
		console.log(res);
	} catch (error) {
		console.log(error);
	}
};

const deleteData = async () => {
	try {
		const res = await httpService.delete('http://127.0.0.1:5001/api/data', {
			data: { id: 7 },
		});
	} catch (error) {}
};
</script>

<template>
	<p class="mt-5">start</p>
	<button class="btn btn-active btn-secondary btn-sm">smt</button>
	<button
		class="btn btn-error"
		@click="fetchUserData(-1)"
	>
		error
	</button>
	<button
		class="btn btn-success"
		@click="fetchUserData(1)"
	>
		Success
	</button>

	<NuxtLink to="/body">body</NuxtLink>
	<pre>{{ data }}</pre>

	<div class="flex gap-5 m-5">
		<button
			@click="getPy()"
			class="btn btn-outline btn-info"
		>
			Info
		</button>
		<button
			class="btn btn-outline btn-success"
			@click="sendData()"
		>
			Success
		</button>
		<button
			class="btn btn-outline btn-warning"
			@click="deleteData()"
		>
			Warning
		</button>
		<!-- <button class="btn btn-outline btn-error">Error</button> -->
	</div>
</template>
