<script setup lang="ts">
import BigButton from '~/components/ui/BigButton.vue';

const authStore = useAuthStore();
import { useRouter } from 'vue-router';

const router = useRouter();

const ast = async () => {
	authStore.getMe();
};
</script>

<template>
	<div class="mx-auto flex-col max-w-screen-2xl items-center xl:justify-between justify-between p-5 mt-10">
		<p class="">Мы – ИТ-комьюнити нового поколения,</p>
		<p class="">состоящее из мотивированных и талантливых</p>
		<p class="">участников.</p>

		<div class="flex xl:flex-row flex-col justify-between mt-10">
			<img
				v-motion-slide-left
				class="mt-10"
				src="~/assets/svg/matrix.svg"
				alt="itam"
			/>
			<div class="ml-auto">
				<h1
					v-motion-fade-visible-once
					class="text-4xl lg:text-6xl xl:text-8xl font-light text-white md:pl-52 xl:mt-0 mt-24"
				>
					// ITAM МЕРОПРИЯТИЯ
				</h1>
			</div>
		</div>

		<div class="mt-10 md:mt-24">
			<iconLine />
		</div>

		<h1
			v-motion-fade-visible-once
			class="text-4xl lg:text-6xl xl:text-8xl font-light text-white mt-28"
		>
			МЕРОПРИЯТИЯ
		</h1>

		<MeetSwiper />
		<!-- доделать чобы брать изображения из запросов -->

		<div class="flex flex-col sm:flex-row pb-16 border-b-2 border-neutral">
			<div>
				<h1
					v-motion-fade-visible-once
					class="text-4xl lg:text-6xl xl:text-8xl font-light text-white mt-36"
				>
					ВЫБРАТЬ МЕРОПРИЯТИЕ
				</h1>
				<p
					v-motion-fade-visible-once
					class="mt-5"
				>
					// ПОЛНЫЙ СПИСОК ПРЕДСТОЯЩИХ МЕРОПРИЯТИЙ
				</p>
			</div>
			<BigButton
				@click="router.push('/meets')"
				v-motion-fade-visible-once
				class="ml-auto sm:mt-32 mt-5"
				buttonSize="large"
				button-color="white"
			/>
		</div>

		<div>
			<h1
				v-motion-fade-visible-once
				class="text-4xl lg:text-6xl xl:text-8xl font-light text-white mt-16"
			>
				ФОТООТЧЕТЫ
			</h1>
		</div>
	</div>
</template>
