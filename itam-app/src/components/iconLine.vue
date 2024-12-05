<script setup lang="ts">
const icons = ['css', 'django', 'flask', 'java', 'js', 'postgr', 'next', 'py', 'redis', 'sass', 'sql', 'vite', 'wp'];
</script>

<template>
	<div class="overflow-hidden w-full">
		<div class="flex gap-10 animate-scroll whitespace-nowrap">
			<!-- Первый набор иконок -->
			<div
				v-for="icon in icons"
				:key="icon"
				class="flex-shrink-0"
			>
				<img
					:src="`/icons/${icon}.svg`"
					alt=""
					class="h-16 w-16 object-contain"
				/>
			</div>

			<!-- Второй набор иконок для бесконечной прокрутки -->
			<div
				v-for="icon in icons"
				:key="'dup-' + icon"
				class="flex-shrink-0"
			>
				<img
					:src="`/icons/${icon}.svg`"
					alt=""
					class="h-16 w-16 object-contain"
				/>
			</div>
		</div>
	</div>
</template>

<style scoped>
@keyframes scroll {
	0% {
		transform: translateX(0);
	}
	100% {
		transform: translateX(-50%);
	}
}

.animate-scroll {
	animation: scroll 40s linear infinite;
	display: flex;
}
</style>
