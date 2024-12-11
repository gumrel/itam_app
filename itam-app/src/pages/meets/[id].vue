<script setup>
import { ref, computed } from 'vue';
import { useRoute } from 'vue-router';
import Advertisements from '~/components/kalendar/advertisements.vue';
import Dbutton from '~/components/ui/Dbutton.vue';
import httpService from '~/services/httpService';

const getMeets = ref(null);
const route = useRoute();

const getImg = async () => {
	try {
		const data = await httpService.get('https://e7d8a4eab9d32595.mokky.dev/meets');
		getMeets.value = data;
	} catch (error) {
		console.error(error);
	}
};

getImg();

const currentMeet = computed(() =>
	Array.isArray(getMeets.value) ? getMeets.value.find(meet => meet.name.trim() === route.params.id.trim()) : null,
);

const formattedDescription = computed(() => {
	if (currentMeet.value && currentMeet.value.description) {
		return currentMeet.value.description
			.split('//')
			.map(part => part.trim())
			.filter(part => part);
	}
	return [];
});
</script>

<template>
	<div
		v-if="currentMeet"
		v-motion-fade-visible-once
		class="mx-auto max-w-screen-2xl h-full p-5 mt-10"
	>
		<h3>ФИНАЛ & GOLD-ФИНАЛ МЕРОПРИЯТИЯ</h3>
		<h3>пройдет {{ currentMeet.type }} {{ currentMeet.end_date }}</h3>

		<div class="flex xl:flex-row flex-col justify-between mt-10">
			<img
				v-motion-slide-left
				class="mt-10"
				src="~/assets/svg/matrix.svg"
				alt="itam"
			/>
			<div class="ml-auto">
				<h1 class="text-4xl lg:text-6xl xl:text-8xl font-light text-white md:pl-52 xl:mt-0 mt-24">
					{{ currentMeet.name }}
				</h1>
			</div>
		</div>

		<button
			class="btn btn-success font-light rounded-2xl mt-5"
			@click=""
		>
			ЗАРЕГИСТРИРОВАТЬСЯ
		</button>

		<h1 class="text-4xl lg:text-6xl xl:text-8xl font-light text-white mt-36 mb-8">что ждет?</h1>

		<div class="flex flex-col sm:flex-row justify-between">
			<div
				v-if="formattedDescription.length"
				class="sm:w-1/2 w-full mt-8"
			>
				<h3
					v-for="(paragraph, index) in formattedDescription"
					:key="index"
				>
					<span class="text-success">// </span>{{ paragraph }}
				</h3>
			</div>

			<p v-else>Описание отсутствует.</p>
			<img
				class="self-start items-start"
				src="~/assets/svg/pixelArt.svg"
				alt=""
			/>
		</div>

		<h1 class="text-4xl lg:text-6xl xl:text-8xl font-light text-white mt-5 mb-10">программа</h1>

		<Advertisements
			v-for="(meet_pg, index) in currentMeet.meet_programm"
			:key="index"
			:time="meet_pg.start_case + meet_pg.end_case"
			:tag="meet_pg.case_info"
			color="purple"
		/>

		<MeetChoose
			main_text="ЗАРЕГИСТРИРОВАТЬСЯ"
			buttom_text="// РЕГИСТРАЦИЯ ВОЗМОЖНА ПРИ НАЛИЧИ СВОБОДНЫХ МЕСТ"
		/>
	</div>
</template>

<style scoped>
.search-input {
	background-image: url('~assets/img/search.png');
	background-repeat: no-repeat;
	background-position: left center;
	padding-left: 30px;
}
</style>
