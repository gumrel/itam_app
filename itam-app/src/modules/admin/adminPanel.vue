<!-- <script setup lang="ts">
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
		imageUrl.value = file.name;
	}

	meetData.value.created_at = formatCurrentDate();
};

const triggerFileInput = () => {
	fileInput.value?.click();
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
	<div class="p-5 mx-auto max-w-screen-2xl">
		<h1 class="text-4xl lg:text-6xl xl:text-8xl font-light text-white mt-5">admin page</h1>
		<h1 class="text-2xl lg:text-6xl xl:text-6xl font-light text-white">only for admin</h1>

		<div class="mt-5">
			<h3>создание мероприятия</h3>
			<input
				type="file"
				accept="image/*"
				ref="fileInput"
				@change="onFileChange"
				class="hidden"
			/>

			<div>
				<input
					type="text"
					placeholder="название мероприятия"
					class="input input-bordered w-28 input-success mt-3"
				/>

				<textarea
					class="textarea textarea-success w-28 pt-20 ml-5"
					placeholder="описание мероприятия"
				></textarea>
			</div>

			<div class="mt-5">
				<Dbutton
					@click="triggerFileInput"
					buttonText="загрузить файл"
				/>
			</div>
			<h3
				v-if="imageUrl"
				class="mt-2"
			>
				загруженный файл: {{ imageUrl }}
			</h3>

			<h3 class="mt-5">максимальное количество участников</h3>
			<input
				type="text"
				placeholder="введите количество"
				class="input input-bordered w-28 input-success mt-3"
			/>

			<div class="mt-5">
				<Dbutton
					@click="sendImg"
					buttonText="добавить мероприятие"
					buttonColor="green"
				/>
			</div>
		</div>
	</div>
</template> -->
