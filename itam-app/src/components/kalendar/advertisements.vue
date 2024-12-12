<script setup lang="ts">
import { useRouter } from 'vue-router';

const props = defineProps({
	time: {
		type: String,
	},
	tag: {
		type: String,
	},
	image: {
		type: String,
	},
	name: {
		type: String,
		required: false,
	},
	color: {
		type: String,
		default: 'green',
	},
});

const router = useRouter();

const navigateToMeet = () => {
	router.push(`/meets/${props.name?.trim()}`);
};

const borderClass = computed(() => {
	return props.color === 'purple' ? 'custom-border_analog' : 'custom-border';
});
</script>

<template>
	<div
		class="mt-3 rounded-2xl p-1 flex justify-between"
		:class="borderClass"
	>
		<h1 class="flex items-center pl-3 w-32 text-xs sm:text-base">{{ props.time }}</h1>

		<h1 class="flex items-center p-3 text-xs sm:text-base">{{ props.tag }}</h1>

		<div
			@click="navigateToMeet()"
			class="box-container w-32 h-32 sm:w-60 sm:h-60"
		>
			<img
				v-if="props.image"
				class="box-container w-32 h-32 sm:w-60 sm:h-60"
				:src="props.image"
				alt=""
			/>
		</div>
	</div>
</template>

<style scoped>
.custom-border {
	border: 1px solid #c6fc2b;
}

.custom-border_analog {
	border: 1px solid #6300db;
}

.box-container {
	/* width: 15rem; */
	/* height: 15rem; */
	position: relative;
	cursor: pointer;
	border-radius: 5px;
}
</style>
