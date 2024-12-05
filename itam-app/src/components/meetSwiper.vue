<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/swiper-bundle.css';
</script>

<template>
	<div class="mt-16">
		<Swiper
			slidesPerView="1"
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
				<div class="octagon-container">
					<div class="octagon-border">
						<div class="octagon-content">
							<img
								src="https://sun9-38.userapi.com/impg/BSBJP6WLZnBlQNdt1zr70KT47GVQf3IPQJqrqA/1SwqafgLOeA.jpg?size=807x807&quality=96&sign=82e401094752d447228f9f31889b3a27&c_uniq_tag=ig8S5gURpKV3m7L1l5X7E83fXY0WwPRnuCDCcWBDQik&type=album"
								alt="Image 1"
							/>
						</div>
					</div>
				</div>
			</SwiperSlide>

			<SwiperSlide>
				<div class="octagon-container">
					<div class="octagon-border">
						<div class="octagon-content">
							<img
								src="https://sun9-38.userapi.com/impg/BSBJP6WLZnBlQNdt1zr70KT47GVQf3IPQJqrqA/1SwqafgLOeA.jpg?size=807x807&quality=96&sign=82e401094752d447228f9f31889b3a27&c_uniq_tag=ig8S5gURpKV3m7L1l5X7E83fXY0WwPRnuCDCcWBDQik&type=album"
								alt="Image 1"
							/>
						</div>
					</div>
				</div>
			</SwiperSlide>

			<SwiperSlide>
				<div class="octagon-container bg-success border-0 border-white flex flex-col justify-between h-full">
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

			<SwiperSlide>
				<div class="octagon-container">
					<div class="octagon-border">
						<div class="octagon-content">
							<img
								src="https://sun9-38.userapi.com/impg/BSBJP6WLZnBlQNdt1zr70KT47GVQf3IPQJqrqA/1SwqafgLOeA.jpg?size=807x807&quality=96&sign=82e401094752d447228f9f31889b3a27&c_uniq_tag=ig8S5gURpKV3m7L1l5X7E83fXY0WwPRnuCDCcWBDQik&type=album"
								alt="Image 1"
							/>
						</div>
					</div>
				</div>
			</SwiperSlide>

			<SwiperSlide>
				<div class="octagon-container">
					<div class="octagon-border">
						<div class="octagon-content">
							<img
								src="https://sun9-38.userapi.com/impg/BSBJP6WLZnBlQNdt1zr70KT47GVQf3IPQJqrqA/1SwqafgLOeA.jpg?size=807x807&quality=96&sign=82e401094752d447228f9f31889b3a27&c_uniq_tag=ig8S5gURpKV3m7L1l5X7E83fXY0WwPRnuCDCcWBDQik&type=album"
								alt="Image 1"
							/>
						</div>
					</div>
				</div>
			</SwiperSlide>

			<SwiperSlide>
				<div class="octagon-container">
					<div class="octagon-border">
						<div class="octagon-content">
							<img
								src="https://sun9-38.userapi.com/impg/BSBJP6WLZnBlQNdt1zr70KT47GVQf3IPQJqrqA/1SwqafgLOeA.jpg?size=807x807&quality=96&sign=82e401094752d447228f9f31889b3a27&c_uniq_tag=ig8S5gURpKV3m7L1l5X7E83fXY0WwPRnuCDCcWBDQik&type=album"
								alt="Image 1"
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
