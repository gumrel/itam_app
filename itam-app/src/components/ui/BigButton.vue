<script setup>
import { computed } from 'vue';

const props = defineProps({
	buttonColor: {
		type: String,
		default: 'purple',
		validator: value => ['green', 'purple', 'white'].includes(value),
	},
	buttonSize: {
		type: String,
		default: 'medium',
		validator: value => ['small', 'medium', 'large'].includes(value),
	},
});

const buttonColor = computed(() => {
	switch (props.buttonColor) {
		case 'green':
			return '#C6FC2B';
		case 'white':
			return '#FFFFFF';
		default:
			return '#6300DB';
	}
});

const buttonSize = computed(() => {
	switch (props.buttonSize) {
		case 'small':
			return { width: '100px', height: '40px' };
		case 'large':
			return { width: '100px', height: '160px' };
		default:
			return { width: '150px', height: '60px' };
	}
});

const onPress = () => {
	document.querySelector('.custom-big').style.transform = 'scale(0.95)';
};

const onRelease = () => {
	document.querySelector('.custom-big').style.transform = 'scale(1)';
};
</script>

<template>
	<button
		class="custom-big"
		:style="{ backgroundColor: buttonColor, ...buttonSize }"
		@mousedown="onPress"
		@mouseup="onRelease"
		@mouseleave="onRelease"
	>
		<img
			class="icon"
			src="~assets/svg/arrowRight.svg"
			alt="Arrow"
		/>
	</button>
</template>

<style scoped>
.custom-big {
	display: flex; /* Flexbox для центрирования содержимого */
	align-items: center; /* Центрируем по вертикали */
	justify-content: center; /* Центрируем по горизонтали */
	border-radius: 4px; /* Прямые углы */
	font-weight: 500; /* Полужирный текст */
	transition: background-color 0.3s ease-in-out, transform 0.1s ease; /* Плавный переход для фона и масштаба */
	color: black;
	border: none; /* Убираем рамку */

	/* Ховер-эффект */
	&:hover {
		opacity: 0.9; /* Лёгкое затемнение */
	}
}

.icon {
	width: 35%; /* Устанавливаем ширину иконки, чтобы она не выходила за пределы кнопки */
	height: auto; /* Сохраняем пропорции */
}
</style>
