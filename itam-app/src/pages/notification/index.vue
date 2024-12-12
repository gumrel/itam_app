<script setup lang="ts">
import httpService from '~/services/httpService';
import Dbutton from '~/components/ui/Dbutton.vue';
import type { MeetData } from '~/services/meets/meets.types';

// definePageMeta({
// 	middleware: ['auth'],
// });

const fileInput = ref<HTMLInputElement | null>(null);
const imageUrl = ref<string>();
const startDate = ref<string | null>(null);
const endDate = ref<string | null>(null);
</script>

<template>
	<div
		v-motion-fade-visible-once
		class="mx-auto max-w-screen-2xl h-full p-5"
	>
		<p class="text-4xl font-semibold">НАСТРОЙКА УВЕДОМЛЕНИЙ</p>
		<p class="mt-2 opacity-30">Выберите какие уведомления вы хотите получать</p>
	</div>
</template>
