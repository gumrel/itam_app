<script setup lang="ts">
import httpService from '~/services/httpService';
import Dbutton from '~/components/ui/Dbutton.vue';

interface MeetData {
	image_base64: string;
	created_at: string;
	start_date: string;
	end_date: string;
	name: string;
	location: string;
	description: string;
	tag: string;
	type: string;
	max_participants: string;
	online_link: string;
}

const fileInput = ref<HTMLInputElement | null>(null);
const imageUrl = ref<string>();
const startDate = ref<string | null>(null);
const endDate = ref<string | null>(null);

const meetData = ref<MeetData>({
	image_base64: '',
	created_at: '',
	start_date: '',
	end_date: '',
	name: '',
	location: '',
	description: '',
	tag: '',
	type: '',
	max_participants: '',
	online_link: '',
});

const formatDate = (date: string): string => {
	const options: Intl.DateTimeFormatOptions = {
		day: 'numeric',
		month: 'long',
		year: 'numeric',
	};
	return new Date(date).toLocaleDateString('ru-RU', options).replace(' г.', '');
};

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

const sendImg = async () => {
	try {
		meetData.value.start_date = startDate.value ? formatDate(startDate.value) : '';
		meetData.value.end_date = endDate.value ? formatDate(endDate.value) : '';

		await httpService.post('https://e7d8a4eab9d32595.mokky.dev/meets', meetData.value);
		if (fileInput.value) fileInput.value.value = '';
	} catch (error) {
		console.error('Ошибка при отправке данных:', error);
		throw error;
	}
};
</script>

<template>
	<div class="p-5 mx-auto max-w-screen-lg shadow-lg rounded-lg">
		<h1 class="text-4xl font-semibold text-center">панель администратора</h1>
		<p class="text-lg text-center mt-2">создание мероприятия</p>

		<div class="mt-10 space-y-8">
			<div>
				<h3 class="text-lg font-semibold">Общая информация</h3>
				<div class="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-3">
					<input
						type="text"
						v-model="meetData.name"
						placeholder="Название мероприятия"
						class="input input-bordered input-success w-full"
					/>
					<input
						type="text"
						v-model="meetData.location"
						placeholder="Место проведения"
						class="input input-bordered input-success w-full"
					/>
				</div>
			</div>

			<div>
				<h3 class="text-lg font-semibold">Описание мероприятия</h3>
				<textarea
					v-model="meetData.description"
					placeholder="Описание мероприятия"
					class="textarea textarea-success w-full mt-3"
				></textarea>
			</div>

			<div>
				<h3 class="text-lg font-semibold">Детали мероприятия</h3>
				<div class="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-3">
					<select
						v-model="meetData.tag"
						class="select select-success w-full"
					>
						<option
							disabled
							selected
						>
							Тэг мероприятия
						</option>
						<option>Хакатон</option>
						<option>Мастер-класс</option>
						<option>Лекция</option>
						<option>Сходка</option>
					</select>
					<select
						v-model="meetData.type"
						class="select select-success w-full"
					>
						<option
							disabled
							selected
						>
							Тип мероприятия
						</option>
						<option>Онлайн</option>
						<option>Оффлайн</option>
					</select>
				</div>
			</div>

			<div>
				<h3 class="text-lg font-semibold">Даты проведения</h3>
				<div class="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-3">
					<div>
						<label class="block text-sm font-medium text-gray-600">Дата начала</label>
						<input
							type="date"
							v-model="startDate"
							class="input input-bordered input-success w-full"
						/>
					</div>
					<div>
						<label class="block text-sm font-medium text-gray-600">Дата окончания</label>
						<input
							type="date"
							v-model="endDate"
							class="input input-bordered input-success w-full"
						/>
					</div>
				</div>
			</div>

			<div>
				<h3 class="text-lg font-semibold">Изображение мероприятия</h3>
				<input
					type="file"
					accept="image/*"
					@change="onFileChange"
					class="file-input file-input-bordered file-input-success w-full mt-3"
				/>
			</div>

			<div>
				<h3 class="text-lg font-semibold">Дополнительно</h3>
				<div class="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-3">
					<input
						type="text"
						v-model="meetData.max_participants"
						placeholder="Максимальное количество участников"
						class="input input-bordered input-success w-full"
					/>
					<input
						type="text"
						v-model="meetData.online_link"
						placeholder="Ссылка на онлайн мероприятие"
						class="input input-bordered input-success w-full"
					/>
				</div>
			</div>

			<div class="text-center mt-8">
				<Dbutton
					v-if="meetData.online_link"
					v-motion-pop-visible
					@click="sendImg"
					buttonText="Добавить мероприятие"
					buttonColor="green"
					class="w-full lg:w-1/3"
				/>
			</div>
		</div>
	</div>
</template>
