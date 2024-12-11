<script setup>
import { ref } from 'vue';

import { Dialog, DialogPanel, Disclosure, DisclosureButton } from '@headlessui/vue';
import { Bars3Icon, XMarkIcon } from '@heroicons/vue/24/outline';
import { ChevronDownIcon } from '@heroicons/vue/20/solid';
import Dbutton from '../ui/Dbutton.vue';

const mobileMenuOpen = ref(false);
</script>

<template>
	<div
		v-motion-fade-visible-once
		class="bg-000000"
	>
		<div class="flex justify-between p-5 mx-auto max-w-screen-2xl">
			<img
				src="~/assets/svg/itampurple.svg"
				alt=""
			/>
			<div class="">
				<nuxt-link
					target="_blank"
					to="https://vk.com/itatmisis"
					><img
						class="cursor-pointer"
						src="~/assets/media/vk.svg"
						alt=""
					/>
				</nuxt-link>
				<nuxt-link
					target="_blank"
					to="https://web.telegram.org/k/#@itatmisis"
					><img
						class="mt-3 cursor-pointer"
						src="~/assets/media/tg.svg"
						alt=""
					/>
				</nuxt-link>
			</div>
		</div>

		<div
			class="mx-auto flex max-w-screen-2xl items-center xl:justify-between justify-between p-5"
			aria-label="Global"
		>
			<img
				:src="`/bigLogo/ITAMlogo.svg`"
				alt=""
			/>
		</div>
	</div>
</template>
