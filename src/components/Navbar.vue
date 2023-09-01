<script setup>
	import { ref } from "vue";
	import { RouterLink } from "vue-router";
	import axios from "axios";
	const categories = ref([]);
	const menuClass = () => {
		return `block py-2 pr-4 pl-3 text-gray-700 hover:text-white hover:transition-all lg:p-0`;
	};

	async function getCategories() {
		try {
			const url = "https://basic-blog.teamrabbil.com/api/post-categories";
			const res = await axios.get(url);
			if (res.data) {
				categories.value = res.data;
			}
		} catch (error) {
			console.log("Failed to fetch data!");
		}
	}
	getCategories();

	let mobileIcon = ref(true);

	function mobileMenu() {
		document.getElementById("mobile-menu-2").classList.toggle("hidden");
		mobileIcon.value = !mobileIcon.value;
	}
</script>

<template>
	<header>
		<nav class="bg-sky-500 border-gray-200 px-4 lg:px-6 py-2.5">
			<div
				class="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl"
			>
				<RouterLink to="/" class="hover:text-white hover:transition-all">
					<span class="text-xl font-semibold uppercase">Blog</span>
				</RouterLink>

				<div
					class="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
					id="mobile-menu-2"
				>
					<ul
						class="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0"
					>
						<li v-for="category in categories" :key="category.id">
							<RouterLink to="#" :class="menuClass()">
								{{ category.name }}
							</RouterLink>
						</li>
					</ul>
				</div>
				<button
					@click="mobileMenu()"
					data-collapse-toggle="mobile-menu-2"
					type="button"
					class="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
					aria-controls="mobile-menu-2"
					aria-expanded="true"
				>
					<span class="sr-only">Open main menu</span>
					<svg
						:class="mobileIcon ? '' : 'hidden'"
						class="w-6 h-6"
						fill="currentColor"
						viewBox="0 0 20 20"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							fill-rule="evenodd"
							d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
							clip-rule="evenodd"
						></path>
					</svg>
					<svg
						class="w-6 h-6"
						:class="mobileIcon ? 'hidden' : ''"
						fill="currentColor"
						viewBox="0 0 20 20"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							fill-rule="evenodd"
							d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
							clip-rule="evenodd"
						></path>
					</svg>
				</button>
			</div>
		</nav>
	</header>
</template>
