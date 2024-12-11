<script setup lang="ts">
import MeetChoose from '~/components/meetChoose.vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const authStore = useAuthStore();

const click_fun = async () => {
	router.push('/meets');
};
</script>

<template>
	<div
		v-motion-fade-visible-once
		class="mx-auto flex-col max-w-screen-2xl items-center xl:justify-between justify-between p-5 mt-10"
	>
		<h3 class="">Мы – ИТ-комьюнити нового поколения,</h3>
		<h3 class="">состоящее из мотивированных и талантливых</h3>
		<h3 class="">участников.</h3>

		<div class="flex xl:flex-row flex-col justify-between mt-10">
			<img
				v-motion-slide-left
				class="mt-10"
				src="~/assets/svg/matrix.svg"
				alt="itam"
			/>
			<div class="ml-auto">
				<h1 class="text-4xl lg:text-6xl xl:text-8xl font-light text-white md:pl-52 xl:mt-0 mt-24">
					// ITAM МЕРОПРИЯТИЯ
				</h1>
			</div>
		</div>

		<div class="mt-10 md:mt-24">
			<iconLine />
		</div>

		<h1 class="text-4xl lg:text-6xl xl:text-8xl font-light text-white mt-28">МЕРОПРИЯТИЯ</h1>

		<MeetSwiper />

		<MeetChoose
			main_text="ВЫБРАТЬ МЕРОПРИЯТИЕ"
			buttom_text="// ПОЛНЫЙ СПИСОК ПРЕДСТОЯЩИХ МЕРОПРИЯТИЙ"
			:function="click_fun"
		/>

		<h1 class="text-4xl lg:text-6xl xl:text-8xl font-light text-white mt-16">ФОТООТЧЕТЫ</h1>

		<PhotoResume />
	</div>
</template>
