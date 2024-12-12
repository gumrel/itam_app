<script setup>
import httpService from '~/services/httpService';
import { useAuthStore } from '#imports';

const props = defineProps({
	meet_name: {
		type: String,
	},
});

const authStore = useAuthStore();

const myId = authStore.user.id;

const formData = ref({
	name: authStore.user.name,
	pass: '',
	email: '',
	receiveNotifications: false,
	fio: '',
	group: '',
	telegram: '',
	isAdmin: false,
	meet_subscribe: [],
});

const modal = ref();

function openModal() {
	modal.value?.showModal();
}

function closeModal() {
	modal.value?.close();
}

const registerForEvent = async () => {
	try {
		const newEvent = { name: props.meet_name };
		const updatedMeetSubscribe = [...(authStore.user.meet_subscribe || []), newEvent];

		await httpService.patch(`https://e7d8a4eab9d32595.mokky.dev/users/${authStore.user.id}`, {
			meet_subscribe: updatedMeetSubscribe,
		});

		authStore.user.meet_subscribe = updatedMeetSubscribe;

		alert(`Вы успешно зарегистрировались на мероприятие "${props.meet_name}"`);
		closeModal();
	} catch (error) {
		console.error(error);
	}
};
</script>

<template>
	<button
		class="btn btn-success font-light rounded-2xl mt-5"
		@click="openModal"
	>
		ЗАРЕГИСТРИРОВАТЬСЯ
	</button>

	<dialog
		ref="modal"
		class="modal"
	>
		<div class="modal-box max-w-screen-lg">
			<h1 class="text-4xl lg:text-6xl xl:text-8xl font-light text-white mt-10 ml-4">форма</h1>
			<h1 class="text-4xl lg:text-6xl xl:text-8xl font-light text-white ml-4">регистрации</h1>
			<button
				@click="closeModal"
				class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 m-8"
			>
				✕
			</button>

			<div class="flex sm:mt-10 mt-5 sm:flex-row flex-col ml-4 gap-10">
				<div class="-mb-8">
					<h1>* ФИО</h1>
					<label class="input input-bordered flex items-center gap-2 mb-2 mt-5">
						<input
							v-model="formData.fio"
							type="text"
							class="grow"
							placeholder="Введите имя"
						/>
					</label>
				</div>

				<div>
					<h1>* telegram</h1>
					<label class="input input-bordered flex items-center gap-2 mb-2 mt-5">
						<input
							v-model="formData.telegram"
							type="text"
							class="grow"
							placeholder="Введите Email"
						/>
					</label>
				</div>
			</div>

			<div class="flex sm:mt-10 mt-5 sm:flex-row flex-col ml-4 gap-10">
				<div class="-mb-8">
					<h1>* Учебная группа</h1>
					<label class="input input-bordered flex items-center gap-2 mb-2 mt-5">
						<input
							v-model="formData.group"
							type="text"
							class="grow"
							placeholder="Введите группу"
						/>
					</label>
				</div>

				<div class="-mb-8">
					<h1>* Email</h1>
					<label class="input input-bordered flex items-center gap-2 mb-2 mt-5">
						<input
							v-model="formData.email"
							type="email"
							class="grow"
							placeholder="Введите Email"
						/>
					</label>
				</div>
			</div>

			<div class="flex sm:mt-10 mt-5 sm:flex-row flex-col ml-4 gap-10">
				<div class="flex mt-12 items-center">
					<h1 class="mb-2">Получать уведомления на почту</h1>
					<label class="cursor-pointer label mb-3 ml-3">
						<input
							v-model="formData.receiveNotifications"
							type="checkbox"
							class="checkbox checkbox-accent"
						/>
					</label>
				</div>
			</div>

			<div class="flex sm:justify-end justify-center m-5">
				<button
					class="btn btn-primary"
					@click="registerForEvent()"
				>
					зарегистрироваться
				</button>
			</div>
		</div>
	</dialog>
</template>
