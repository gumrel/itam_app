<script setup>
import Advertisements from '~/components/kalendar/advertisements.vue';
import httpService from '~/services/httpService';
import { useAuthStore } from '#imports';

definePageMeta({
	middleware: ['auth'],
});

const authStore = useAuthStore();
const Iuser = ref(authStore.user);

const getMeets = ref();
const myMeets = ref([]);

const getImg = async () => {
	try {
		const data = await httpService.get('https://e7d8a4eab9d32595.mokky.dev/meets');
		getMeets.value = data;

		myMeets.value = getMeets.value.filter(meet =>
			Iuser.value.meet_subscribe.some(subscribe => subscribe.name === meet.name),
		);
	} catch (error) {
		console.error(error);
		throw error;
	}
};

getImg();

// https://e7d8a4eab9d32595.mokky.dev/meets?name=*IT
</script>

<template>
	<div
		v-motion-fade-visible-once
		class="mx-auto max-w-screen-2xl h-full p-5"
	>
		<div class="flex justify-between sm:flex-row flex-col mb-16">
			<div>
				<h1
					v-motion-fade-visible-once
					class="text-4xl lg:text-6xl xl:text-8xl font-light text-white mt-8"
				>
					МОИ
				</h1>
				<h1
					v-motion-fade-visible-once
					class="text-4xl lg:text-6xl xl:text-8xl font-light text-white"
				>
					МЕРОПРИЯТИЯ
				</h1>
			</div>

			<!-- <div class="sm:mt-auto mt-5 flex">
				<label class="input input-bordered flex items-center gap-2 mb-2 bottom-0 w-56">
					<img
						class="h-4"
						src="~assets/img/search.png"
						alt=""
					/>
					<input
						v-model="searchQuery"
						type="text"
						class="grow"
						placeholder="поиск по названию"
					/>
				</label>
				<img
					@click="searchQuery = ''"
					class="h-8 mt-2 ml-5 cursor-pointer"
					src="~assets/img/Vector.png"
					alt=""
				/>
			</div> -->
		</div>
		<Advertisements
			v-for="(meet, index) in myMeets"
			:key="index"
			:image="meet.image_base64"
			:tag="meet.start_date"
			:time="meet.tag"
			:name="meet.name"
		/>
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
