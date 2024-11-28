<script setup>
import { useThemeStore } from '~/stores/themeStore.ts';
import { ref } from 'vue';

import {
	Dialog,
	DialogPanel,
	Disclosure,
	DisclosureButton,
	DisclosurePanel,
	Popover,
	PopoverButton,
	PopoverGroup,
	PopoverPanel,
} from '@headlessui/vue';
import {
	ArrowPathIcon,
	Bars3Icon,
	ChartPieIcon,
	CursorArrowRaysIcon,
	FingerPrintIcon,
	SquaresPlusIcon,
	XMarkIcon,
} from '@heroicons/vue/24/outline';
import { ChevronDownIcon, PhoneIcon, PlayCircleIcon } from '@heroicons/vue/20/solid';

const products = [
	{
		name: 'Analytics',
		description: 'Get a better understanding of your traffic',
		href: '#',
		icon: ChartPieIcon,
	},

	{
		name: 'Security',
		description: 'Your customers’ data will be safe and secure',
		href: '#',
		icon: FingerPrintIcon,
	},

	{
		name: 'Automations',
		description: 'Build strategic funnels that will convert',
		href: '#',
		icon: ArrowPathIcon,
	},
];
const callsToAction = [
	{ name: 'Watch demo', href: '#', icon: PlayCircleIcon },
	{ name: 'Contact sales', href: '#', icon: PhoneIcon },
];

const mobileMenuOpen = ref(false);

const themeStore = useThemeStore();

const toggleTheme = () => {
	themeStore.toggleTheme();
};
</script>

<template>
	<header class="bg-white">
		<nav
			class="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
			aria-label="Global"
		>
			<div class="flex lg:flex-1">
				<NuxtLink
					to="/"
					class="-m-1.5 p-1.5"
					><img
						class="h-8 w-auto"
						src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=600"
						alt=""
				/></NuxtLink>
			</div>
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
			<PopoverGroup class="hidden lg:flex lg:gap-x-12">
				<Popover class="relative">
					<PopoverButton class="flex items-center gap-x-1 text-sm/6 font-semibold text-gray-900">
						Карьера
						<ChevronDownIcon
							class="h-5 w-5 flex-none text-gray-400"
							aria-hidden="true"
						/>
					</PopoverButton>

					<transition
						enter-active-class="transition ease-out duration-200"
						enter-from-class="opacity-0 translate-y-1"
						enter-to-class="opacity-100 translate-y-0"
						leave-active-class="transition ease-in duration-150"
						leave-from-class="opacity-100 translate-y-0"
						leave-to-class="opacity-0 translate-y-1"
					>
						<PopoverPanel
							class="absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5"
						>
							<div class="p-4">
								<div
									v-for="item in products"
									:key="item.name"
									class="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm/6 hover:bg-gray-50"
								>
									<div
										class="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white"
									>
										<component
											:is="item.icon"
											class="h-6 w-6 text-gray-600 group-hover:text-indigo-600"
											aria-hidden="true"
										/>
									</div>
									<div class="flex-auto">
										<a
											:href="item.href"
											class="block font-semibold text-gray-900"
										>
											{{ item.name }}
											<span class="absolute inset-0" />
										</a>
										<p class="mt-1 text-gray-600">{{ item.description }}</p>
									</div>
								</div>
							</div>
							<div class="grid grid-cols-2 divide-x divide-gray-900/5 bg-gray-50">
								<a
									v-for="item in callsToAction"
									:key="item.name"
									:href="item.href"
									class="flex items-center justify-center gap-x-2.5 p-3 text-sm/6 font-semibold text-gray-900 hover:bg-gray-100"
								>
									<component
										:is="item.icon"
										class="h-5 w-5 flex-none text-gray-400"
										aria-hidden="true"
									/>
									{{ item.name }}
								</a>
							</div>
						</PopoverPanel>
					</transition>
				</Popover>

				<a class="text-sm/6 font-semibold text-gray-900">Курсы</a>
				<a class="text-sm/6 font-semibold text-gray-900">Магазин</a>
				<a class="text-sm/6 font-semibold text-gray-900">Лендинг</a>
			</PopoverGroup>
			<div class="hidden lg:flex lg:flex-1 lg:justify-end">
				<div class="mr-7 mt-2 text-black">
					<label class="swap swap-rotate">
						<input
							type="checkbox"
							class="theme-controller"
							:checked="themeStore.themeName === 'dark'"
							@change="toggleTheme"
						/>

						<svg
							class="swap-off h-8 w-8 fill-current"
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 24 24"
						>
							<path
								d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z"
							/>
						</svg>

						<svg
							class="swap-on h-8 w-8 fill-current"
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 24 24"
						>
							<path
								d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z"
							/>
						</svg>
					</label>
				</div>
				<ModalLogin />
			</div>
		</nav>
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
					<NuxtLink
						to="/"
						class="-m-1.5 p-1.5"
						><img
							class="h-8 w-auto"
							src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=600"
							alt=""
					/></NuxtLink>
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
							<Disclosure
								as="div"
								class="-mx-3"
								v-slot="{ open }"
							>
								<DisclosureButton
									class="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
								>
									Карьера
									<ChevronDownIcon
										:class="[open ? 'rotate-180' : '', 'h-5 w-5 flex-none']"
										aria-hidden="true"
									/>
								</DisclosureButton>
								<DisclosurePanel class="mt-2 space-y-2">
									<DisclosureButton
										v-for="item in [...products, ...callsToAction]"
										:key="item.name"
										as="a"
										:href="item.href"
										class="block rounded-lg py-2 pl-6 pr-3 text-sm/7 font-semibold text-gray-900 hover:bg-gray-50"
										>{{ item.name }}</DisclosureButton
									>
								</DisclosurePanel>
							</Disclosure>
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
								>Log in</a
							>
						</div>
					</div>
				</div>
			</DialogPanel>
		</Dialog>
	</header>
</template>
