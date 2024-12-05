<script setup>
const props = defineProps({
	buttonText: {
		type: String,
		required: true,
	},
	buttonColor: {
		type: String,
		default: 'purple',
		validator: value => ['green', 'purple'].includes(value),
	},
});

const buttonColor = computed(() => {
	return props.buttonColor === 'green' ? '#C6FC2B' : '#6300DB';
});

const onPress = () => {
	document.querySelector('.custom-btn').style.transform = 'scale(0.95)';
};

const onRelease = () => {
	document.querySelector('.custom-btn').style.transform = 'scale(1)';
};
</script>

<template>
	<button
		class="custom-btn"
		:style="{ backgroundColor: buttonColor }"
		@mousedown="onPress"
		@mouseup="onRelease"
		@mouseleave="onRelease"
	>
		{{ buttonText }}
	</button>
</template>

<style scoped>
.custom-btn {
	padding: 0.25rem 1rem; /* Отступы */
	border-radius: 4px; /* Прямые углы */
	font-weight: 500; /* Полужирный текст */
	height: 40px; /* Высота кнопки */
	transition: background-color 0.3s ease-in-out, transform 0.1s ease; /* Плавный переход для фона и масштаба */
	color: black;

	/* Ховер-эффект */
	&:hover {
		background-color: darken(var(--button-color), 10%); /* Более тёмный цвет */
	}
}
</style>
