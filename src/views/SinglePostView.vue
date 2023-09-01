<script setup>
	import { ref, reactive, defineProps } from "vue";
	import axios from "axios";
	import { useRoute } from "vue-router";
	import Navbar from "../components/Navbar.vue";
	const router = useRoute();
	const props = defineProps(["id"]);
	const singlePost = reactive({});
	const isLoading = ref(true);

	async function getPostDetails() {
		try {
			const url = `https://basic-blog.teamrabbil.com/api/post-details/${props.id}`;
			const res = await axios.get(url);
			if (res.data.postDetails) {
				singlePost.value = res.data;
				isLoading.value = false;
			} else {
				router.push({ name: "home" });
			}
		} catch (error) {}
	}
	getPostDetails();
</script>
<template>
	<Navbar />
	<div v-if="isLoading" class="h-screen flex justify-center items-center">
		<div
			class="spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full mr-2"
		/>
		<p>Loading...</p>
	</div>
	<section class="bg-white">
		<div v-if="singlePost.value" class="py-8 px-4 mx-auto lg:py-16 lg:px-6">
			<img
				class="rounded-t-lg"
				:src="singlePost.value.postDetails['img']"
				alt=""
			/>
			<div class="border border-gray-600 rounded-b-lg p-10">
				<h2 class="my-5 text-xl font-bold">
					{{ singlePost.value.postDetails.title }}
				</h2>
				<p
					class="text-justify"
					v-html="singlePost.value.postDetails.content"
				></p>
			</div>
		</div>
		<div v-else>
			{{ router.push({ name: "NotFound" }) }}
		</div>
	</section>
</template>
