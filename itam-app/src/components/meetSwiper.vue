<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/swiper-bundle.css';
import { useRouter } from 'vue-router';
import httpService from '~/services/httpService';
import Dbutton from './ui/Dbutton.vue';

const router = useRouter();
const navigateToMeets = () => {
	router.push('/meets');
};

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
	<div class="mt-16">
		<Swiper
			:slidesPerView="1"
			pagination
			:breakpoints="{
				1440: {
					slidesPerView: 4,
				},
				1024: {
					slidesPerView: 3,
				},
				768: {
					slidesPerView: 2,
				},
				480: {
					slidesPerView: 1,
				},
			}"
		>
			<SwiperSlide>
				<div
					@click="navigateToMeets()"
					class="octagon-container bg-success border-0 border-white flex flex-col justify-between h-full"
				>
					<div class="text-black text-center pt-5 text-lg font-medium">СМОТРЕТЬ ВСЕ</div>
					<div class="flex justify-center items-end">
						<img
							class="w-2/6 mb-12"
							src="~assets/svg/arrow.svg"
							alt=""
						/>
					</div>
				</div>
			</SwiperSlide>

			<SwiperSlide
				v-for="(meet, index) in getMeets"
				:key="`limited-${index}`"
			>
				<div class="octagon-container">
					<div class="octagon-border">
						<div class="octagon-content">
							<img
								:src="meet.image_base64"
								:alt="meet.name || `Image ${index + 1}`"
							/>
						</div>
					</div>
				</div>
			</SwiperSlide>
		</Swiper>
	</div>
</template>

<style scoped>
.swiper-slide {
	/* border: 1px solid red; */
	flex-shrink: 0; /* Чтобы слайды не сжимались */
	display: flex;
	justify-content: center; /* Выравнивание по горизонтали */
	align-items: center; /* Выравнивание по вертикали */
}

.octagon-container {
	width: 300px; /* Ширина всего элемента */
	height: 350px; /* Высота всего элемента */
	position: relative;
	cursor: pointer;
}

/* Внешний слой для рамки */
.octagon-border {
	width: 100%;
	height: 100%;
	clip-path: polygon(
		10% 0%,
		90% 0%,
		/* Верхние углы */ 100% 10%,
		100% 90%,
		/* Правые углы */ 90% 100%,
		10% 100%,
		/* Нижние углы */ 0% 90%,
		0% 10% /* Левые углы */
	);
	background-color: white; /* Белая рамка */
	display: flex;
	align-items: center;
	justify-content: center;
}

/* Внутренний слой для содержимого */
.octagon-content {
	width: 99%; /* Уменьшено для создания эффекта рамки */
	height: 99%;
	clip-path: polygon(
		10% 0%,
		90% 0%,
		/* Верхние углы */ 100% 10%,
		100% 90%,
		/* Правые углы */ 90% 100%,
		10% 100%,
		/* Нижние углы */ 0% 90%,
		0% 10% /* Левые углы */
	);
	overflow: hidden;
}

.octagon-content img {
	width: 100%;
	height: 100%;
	object-fit: cover;
}
</style>
