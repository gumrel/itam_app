<script setup>
import BigButton from './ui/BigButton.vue';
import { useRouter } from 'vue-router';

const router = useRouter();
</script>

<template>
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
</template>
