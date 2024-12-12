<script setup></script>

<template>
	<div
		v-motion-fade-visible-once
		class="mx-auto max-w-screen-2xl h-full p-5"
	>
		<div class="mt-3 rounded-2xl p-1 custom-border_analog">
			<h3 class="ml-6 lg:ml-12 mt-8 lg:mb-0 mb-4">Персональные данные</h3>

			<div class="flex lg:flex-row flex-col justify-between">
				<div class="lg:m-12 m-5">
					<h1>* Имя</h1>
					<label class="input input-bordered flex items-center gap-2 mt-5">
						<input
							type="text"
							class="grow p-5"
							placeholder="Введите имя"
						/>
					</label>
				</div>

				<div class="lg:m-12 m-5">
					<h1>* Email</h1>
					<label class="input input-bordered flex items-center gap-2 mt-5">
						<input
							type="email"
							class="grow p-5"
							placeholder="Введите Email"
						/>
					</label>
				</div>

				<div class="lg:m-12 m-5">
					<h1>* Имя</h1>
					<label class="input input-bordered flex items-center gap-2 mt-5">
						<input
							type="text"
							class="grow p-5"
							placeholder="Введите имя"
						/>
					</label>
				</div>
			</div>
		</div>
		<MeetChoose
			main_text="мои мероприятия"
			buttom_text="// Полный спиоск предстоящих мероприятий"
			color="info"
			:function="click_fun"
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
