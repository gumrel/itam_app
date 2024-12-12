<script setup>
import { ref } from 'vue';
import Dbutton from '../ui/Dbutton.vue';
import { useRouter } from 'vue-router';
import RegistrationForm from '../auth/registrationForm.vue';
import { useAuthStore } from '#imports';

const authStore = useAuthStore();

const router = useRouter();
</script>

<template>
	<header class="bg-000000 border-b-2 border-black">
		<div
			class="mx-auto flex max-w-screen-2xl items-center xl:justify-between justify-between p-5"
			aria-label="Global"
		>
			<NuxtLink
				to="/"
				class="p-1.5 ml-0"
			>
				<img
					class="h-7 cursor-pointer"
					src="~/assets/svg/itam.svg"
					alt="itam"
				/>
			</NuxtLink>

			<div
				v-if="authStore.user && !authStore.isAdmin"
				class="justify-center"
			>
				<Dbutton
					@click="router.push('/myMeets')"
					class="sm:text-base small_font p-4 sm:p-2"
					buttonText="МОИ МЕРОПРИЯТИЯ"
					buttonColor="green"
				></Dbutton>
			</div>

			<div class="flex lg:justify-end">
				<Dbutton
					v-if="authStore.isAdmin"
					@click="router.push('/adminPanel')"
					buttonText="CОЗДАТЬ МЕРОПРИЯТИЕ"
					buttonColor="purple"
					class="mr-6 mt-1 hidden sm:block"
				/>

				<button
					v-if="authStore.isAdmin"
					@click="router.push('/adminPanel')"
					class="btn btn-info mr-2 sm:hidden"
				>
					<img
						src="~assets/svg/plus.svg"
						alt=""
					/>
				</button>

				<img
					class="h-8 mt-2 mr-6 cursor-pointer"
					@click="router.push('/notification')"
					src="~assets/img/material-symbols_notifications.png"
					alt=""
				/>
				<RegistrationForm />
			</div>
		</div>
	</header>
</template>

<style>
.small_font {
	font-size: 10px;
}
@media (min-width: 640px) {
	.small_font {
		font-size: 1rem /* 16px */;
		line-height: 1.5rem /* 24px */;
	}
}
</style>
