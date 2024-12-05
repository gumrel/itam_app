<script setup lang="ts">
import httpService from '~/services/httpService';

const authStore = useAuthStore();

const ast = async () => {
	authStore.getMe();
};
</script>

<template>
	<div class="mx-auto flex-col max-w-screen-2xl items-center xl:justify-between justify-between p-5 mt-10">
		<p class="w-96">Мы – ИТ-комьюнити нового поколения,</p>
		<p class="w-96">состоящее из мотивированных и талантливых</p>
		<p class="w-96">участников.</p>

		<div class="flex xl:flex-row flex-col justify-between mt-10">
			<img
				class="mt-10"
				src="~/assets/svg/matrix.svg"
				alt="itam"
			/>
			<div class="ml-auto">
				<h1 class="text-lg lg:text-6xl xl:text-8xl font-light text-white md:pl-52 xl:mt-0 mt-20">
					// ITAM МЕРОПРИЯТИЯ
				</h1>
			</div>
		</div>

		<div class="mt-10 md:mt-24">
			<iconLine />
		</div>
	</div>
</template>
