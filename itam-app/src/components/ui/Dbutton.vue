<script setup>
import { ref } from 'vue';

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

const onPress = event => {
	event.target.style.transform = 'scale(0.95)';
};

const onRelease = event => {
	event.target.style.transform = 'scale(1)';
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
	padding: 0.25rem 1rem;
	border-radius: 4px;
	font-weight: 500;
	height: 40px;
	transition: background-color 0.3s ease-in-out, transform 0.1s ease;
	color: black;

	&:hover {
		background-color: #440099;
	}
}
</style>
