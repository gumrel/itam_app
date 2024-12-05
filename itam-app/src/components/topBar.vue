<script setup>
import { ref } from 'vue';

import { Dialog, DialogPanel, Disclosure, DisclosureButton } from '@headlessui/vue';
import { Bars3Icon, XMarkIcon } from '@heroicons/vue/24/outline';
import { ChevronDownIcon } from '@heroicons/vue/20/solid';
import Dbutton from './ui/Dbutton.vue';

const mobileMenuOpen = ref(false);
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

			<div class="flex lg:hidden">
				<button
					type="button"
					class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
					@click="mobileMenuOpen = true"
				>
					<span class="sr-only">Open main menu</span>
					<Bars3Icon
						class="h-6 w-6"
						aria-hidden="true"
					/>
				</button>
			</div>

			<div class="hidden lg:flex lg:flex-1 lg:justify-end">
				<Dbutton
					@click=""
					buttonText="МОИ МЕРОПРИЯТИЯ"
					buttonColor="purple"
					class="mr-6 mt-1"
				/>

				<img
					class="h-8 mt-2 mr-6 cursor-pointer"
					@click=""
					src="~assets/img/material-symbols_notifications.png"
					alt=""
				/>
				<ModalLogin />
			</div>
		</div>

		<Dialog
			class="lg:hidden"
			@close="mobileMenuOpen = false"
			:open="mobileMenuOpen"
		>
			<div class="fixed inset-0 z-10" />
			<DialogPanel
				class="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10"
			>
				<div class="flex items-center justify-between">
					<div></div>
					<button
						type="button"
						class="-m-2.5 rounded-md p-2.5 text-gray-700"
						@click="mobileMenuOpen = false"
					>
						<span class="sr-only">Close menu</span>
						<XMarkIcon
							class="h-6 w-6"
							aria-hidden="true"
						/>
					</button>
				</div>
				<div class="mt-6 flow-root">
					<div class="-my-6 divide-y divide-gray-500/10">
						<div class="space-y-2 py-6">
							<a
								class="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
								>Курсы</a
							>
							<a
								class="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
								>Магазин</a
							>
							<a
								class="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
								>Лендинг</a
							>
						</div>
						<div class="py-6">
							<a
								class="-mx-3 block rounded-lg px-3 py-2.5 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
								>Регистрация</a
							>
						</div>
					</div>
				</div>
			</DialogPanel>
		</Dialog>
	</header>
</template>
