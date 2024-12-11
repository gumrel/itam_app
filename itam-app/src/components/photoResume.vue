<script setup lang="ts">
import 'swiper/swiper-bundle.css';
import httpService from '~/services/httpService';

const getMeets = ref();

const getImg = async () => {
	try {
		const data = await httpService.get('https://e7d8a4eab9d32595.mokky.dev/meets');
		getMeets.value = data;
	} catch (error) {
		console.error(error);
		throw error;
	}
};
getImg();
</script>

<template>
	<div class="flex flex-wrap gap-5 h-full mt-12 justify-center items-center px-4">
		<div class="bg-white w-full sm:w-1/2 md:w-1/3 lg:w-1/4 h-80 shadow-lg">
			<img
				src="~assets/photos/photo1.png"
				alt="Image 1"
				class="w-full h-full object-cover"
			/>
		</div>

		<div class="flex flex-col w-full sm:w-1/2 md:w-1/3 lg:w-1/4">
			<div class="bg-white m-5 h-96 shadow-lg">
				<img
					src="~assets/photos/photo4.png"
					alt="Image 2"
					class="w-full h-full object-cover"
				/>
			</div>
			<div class="bg-white m-5 h-80 shadow-lg">
				<img
					src="~assets/photos/photo3.png"
					alt="Image 3"
					class="w-full h-full object-cover"
				/>
			</div>
		</div>

		<div class="bg-white w-full sm:w-1/2 md:w-1/3 lg:w-1/4 h-80 shadow-lg">
			<img
				src="~assets/photos/photo2.png"
				alt="Image 4"
				class="w-full h-full object-cover"
			/>
		</div>
	</div>
</template>

<style scoped></style>
