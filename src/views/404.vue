<script setup>
	import Navbar from "../components/Navbar.vue";
</script>
<template>
	<Navbar />
	<div class="h-screen flex justify-center items-center">
		<div
			class="flex flex-col border border-gray-300 p-10 rounded-lg text-center space-y-5"
		>
			<h1 class="text-red-500 font-bold text-6xl italic">404</h1>
			<p class="text-gray-500 uppercase text-2xl">Not Found</p>
		</div>
	</div>
</template>
