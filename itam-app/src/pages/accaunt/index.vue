<script setup>
import Dbutton from '~/components/ui/Dbutton.vue';
import { useAuthStore } from '#imports';
import httpService from '~/services/httpService';
import { useRouter } from 'vue-router';

const authStore = useAuthStore();
const Iuser = ref(authStore.user);
const router = useRouter();

const postData = ref({
	fio: Iuser.value.fio,
	group: Iuser.value.group,
	telegram: Iuser.value.telegram,
});

const isEditMode = ref(false);

const updateInfo = async () => {
	try {
		const response = await httpService.get('https://e7d8a4eab9d32595.mokky.dev/users');
		const users = response || [];

		const user = users.find(u => u.email.trim().toLowerCase() === authStore.user?.email.trim().toLowerCase());

		await httpService.patch(`https://e7d8a4eab9d32595.mokky.dev/users/${user.id}`, postData.value);

		authStore.user.fio = postData.value.fio;
		authStore.user.group = postData.value.group;
		authStore.user.telegram = postData.value.telegram;
		isEditMode.value = false;
	} catch (error) {
		console.error(error);
		throw error;
	}
};

const goTomyMeeys = async () => {
	router.push('/myMeets');
};

const toggleEditMode = () => {
	isEditMode.value = !isEditMode.value;

	if (!isEditMode.value) {
		postData.value = {
			fio: authStore.user.fio,
			group: authStore.user.group,
			telegram: authStore.user.telegram,
		};
	}
};
</script>

<template>
	<div
		v-motion-fade-visible-once
		class="mx-auto max-w-screen-2xl h-full p-5"
	>
		<h1 class="text-4xl lg:text-6xl xl:text-8xl font-light text-white mt-5 mb-14">привет {{ Iuser.name }}</h1>

		<div class="mt-3 rounded-2xl p-1 custom-border_analog">
			<div class="flex justify-between xs:flex-row flex-col">
				<h3 class="ml-6 lg:ml-12 mt-8 lg:mb-0 mb-4">Персональные данные</h3>
				<button
					@click="toggleEditMode"
					class="btn btn-ghost mr-6 lg:mr-12 mt-5 lg:mb-0 w-36"
				>
					редактировать
				</button>
			</div>

			<div class="flex lg:flex-row flex-col justify-between">
				<div class="lg:m-12 m-5">
					<h1>* ФИО</h1>
					<label class="input input-bordered flex items-center gap-2 mt-5">
						<input
							:disabled="!isEditMode"
							v-model="postData.fio"
							type="text"
							class="grow p-5"
							placeholder="Введите ФИО"
						/>
					</label>
				</div>

				<div class="lg:m-12 m-5">
					<h1>* учебная группа</h1>
					<label class="input input-bordered flex items-center gap-2 mt-5">
						<input
							:disabled="!isEditMode"
							v-model="postData.group"
							type="text"
							class="grow p-5"
							placeholder="Введите  группу"
						/>
					</label>
				</div>

				<div class="lg:m-12 m-5">
					<h1>* telegram</h1>
					<label class="input input-bordered flex items-center gap-2 mt-5">
						<input
							:disabled="!isEditMode"
							v-model="postData.telegram"
							type="text"
							class="grow p-5"
							placeholder="Введите tg"
						/>
					</label>
				</div>
			</div>

			<div class="flex justify-center mb-10">
				<Dbutton
					v-if="isEditMode"
					@click="updateInfo"
					class="mt-8"
					buttonText="изменить"
					buttonColor="green"
				/>
			</div>
		</div>
		<MeetChoose
			main_text="мои мероприятия"
			buttom_text="// Полный спиоск предстоящих мероприятий"
			:function="goTomyMeeys"
		/>
	</div>
</template>

<style scoped>
.custom-border {
	border: 1px solid #9c9c9c;
}

.custom-border_analog {
	border: 1px solid #9c9c9c;
}

.box-container {
	/* width: 15rem; */
	/* height: 15rem; */
	position: relative;
	cursor: pointer;
	border-radius: 5px;
}
</style>
