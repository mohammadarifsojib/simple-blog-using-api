<script setup>
	import { ref, defineProps } from "vue";
	import { RouterLink } from "vue-router";
	import axios from "axios";
	import Navbar from "../components/Navbar.vue";

	const props = defineProps({
		id: {
			type: String,
			required: true,
		},
	});

	const postByCategory = ref([]);

	async function getPostByCategory() {
		try {
			const url =
				"https://basic-blog.teamrabbil.com/api/post-list/" + parseInt(props.id);

			const res = await axios.get(url);
			if (res.data) {
				postByCategory.value = res.data;
			}
		} catch (error) {}
	}
	getPostByCategory();
</script>
<template>
	<Navbar />
	<section class="bg-white">
		<div class="py-8 px-4 mx-auto lg:py-16 lg:px-6">
			<div class="grid gap-8 lg:grid-cols-2">
				<article
					v-for="post in postByCategory"
					:key="post.id"
					class="p-6 bg-white rounded-lg border border-gray-200 shadow-md"
				>
					<div class="flex justify-between items-center mb-5 text-gray-500">
						<img :src="post.img" :alt="post.title" />
					</div>
					<h2 class="mb-2 text-2xl font-bold tracking-tight text-gray-900">
						<RouterLink :to="`/post/${post.id}`">{{ post.title }}</RouterLink>
					</h2>
					<p class="mb-5 font-light text-gray-500 dark:text-gray-400">
						{{ post.short }}
					</p>
					<div class="flex justify-between items-center">
						<RouterLink
							:to="`/post/${post.id}`"
							class="inline-flex items-center font-medium text-primary-600 dark:text-primary-500 hover:underline"
						>
							Read more
							<svg
								class="ml-2 w-4 h-4"
								fill="currentColor"
								viewBox="0 0 20 20"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									fill-rule="evenodd"
									d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
									clip-rule="evenodd"
								></path>
							</svg>
						</RouterLink>
					</div>
				</article>
			</div>
		</div>
	</section>
</template>
