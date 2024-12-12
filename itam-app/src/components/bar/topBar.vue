<script setup>
import { ref } from 'vue';
import Dbutton from '../ui/Dbutton.vue';
import { useRouter } from 'vue-router';
import RegistrationForm from '../auth/registrationForm.vue';

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

			<div class="flex lg:justify-end">
				<Dbutton
					@click="router.push('/adminPanel')"
					buttonText="МОИ МЕРОПРИЯТИЯ"
					buttonColor="purple"
					class="mr-6 mt-1 hidden sm:block"
				/>

				<img
					class="h-8 mt-2 mr-6 cursor-pointer"
					@click=""
					src="~assets/img/material-symbols_notifications.png"
					alt=""
				/>
				<RegistrationForm />
			</div>
		</div>
	</header>
</template>
