<script setup>
const icons = [
	'css',
	'django',
	'flask',
	'go',
	'java',
	'js',
	'postgr',
	'next',
	'py',
	'redis',
	'sass',
	'sql',
	'vite',
	'wp',
];
</script>

<template>
	<div class="overflow-hidden w-full">
		<div class="flex gap-10 animate-scroll whitespace-nowrap">
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

<style scoped></style>
