<script context="module">
	export const prerender = true;
</script>

<script>
	// @ts-nocheck

	import Navbar from '$components/Navbar.svelte';
	import NewElement from '$components/NewElement.svelte';
	import UpdateElement from '$components/UpdateElement.svelte';
	import Footer from '$components/Footer.svelte';
	import Tools from '$components/Tools.svelte';
	import AddPage from '$components/AddPage.svelte'; 
	import Filters from "$components/Filters.svelte";

	import { Data } from '$constants/index.js';

	let formType = 0;

	const onFormTypeChange = (value) => {
		formType = value;
	};

	let selectedId = 0;
	const onListItemClick = (value, id) => {
		formType = value;
		selectedId = id;
	};

	const getRandomStringFromArray = (array) => {
		const randomIndex = Math.floor(Math.random() * array.length);
		return array[randomIndex];
	};
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<Navbar />

<div class="container-fluid px-4 py-4">
	<div class="row">
		<div class="col-6 my-1">
			<button on:click={() => {location.pathname = '/detail'}} class="btn btn-primary w-100">Detail Page Version</button>
		</div>
		<div class="col-6 my-1">
			<button on:click={() => {location.pathname = '/list'}} class="btn btn-danger w-100">List Version</button>
		</div>
	</div>
</div>


<Footer />

<style>
</style>
