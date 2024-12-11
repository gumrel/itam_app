<script setup>
import BigButton from './ui/BigButton.vue';

const props = defineProps({
	main_text: {
		type: String,
	},
	buttom_text: {
		type: String,
	},
	function: {
		type: Function,
	},
});
</script>

<template>
	<div class="flex flex-col sm:flex-row pb-16 border-b-2 border-neutral">
		<div>
			<h1
				v-motion-fade-visible-once
				class="text-2xl lg:text-6xl xl:text-8xl font-light text-white mt-36"
			>
				{{ props.main_text }}
			</h1>
			<p
				v-motion-fade-visible-once
				class="mt-5"
			>
				{{ props.buttom_text }}
			</p>
		</div>
		<BigButton
			@click="props.function()"
			v-motion-fade-visible-once
			class="ml-auto sm:mt-32 mt-5"
			buttonSize="large"
			button-color="white"
		/>
	</div>
</template>
