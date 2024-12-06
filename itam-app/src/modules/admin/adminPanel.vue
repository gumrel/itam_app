<script setup lang="ts">
import httpService from '~/services/httpService';
import Dbutton from '~/components/ui/Dbutton.vue';

interface MeetData {
	image_base64: string;
	created_at: string;
}

const fileInput = ref<HTMLInputElement | null>(null);
const imageUrl = ref<string>();

const meetData = ref<MeetData>({
	image_base64: '',
	created_at: '',
});

const onFileChange = (event: Event) => {
	const target = event.target as HTMLInputElement;
	if (target.files && target.files.length > 0) {
		const file = target.files[0];
		const reader = new FileReader();

		reader.onload = e => {
			meetData.value.image_base64 = e.target?.result as string;
		};
		reader.readAsDataURL(file);
	}

	meetData.value.created_at = formatCurrentDate();
};

const sendImg = async () => {
	try {
		if (!meetData.value.image_base64) {
			throw new Error('Изображение не выбрано');
		}

		const response = await httpService.post('https://e7d8a4eab9d32595.mokky.dev/meets', meetData.value);
		if (fileInput.value) fileInput.value.value = '';
	} catch (error) {
		console.error('Ошибка при отправке данных:', error);
		throw error;
	}
};
</script>

<template>
	<h1>admin:</h1>
	<p>only for admin</p>

	<input
		type="file"
		accept="image/*"
		ref="fileInput"
		@change="onFileChange"
	/>
	<pre>{{ imageUrl }}</pre>
	<Dbutton
		@click="sendImg"
		buttonText="send Img"
	/>
</template>
