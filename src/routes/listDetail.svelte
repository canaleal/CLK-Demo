<script context="module">
	export const prerender = true;
</script>

<script>
	// @ts-nocheck
    import { faker } from '@faker-js/faker';
	import Navbar from '$components/Navbar.svelte';
	import NewElement from '$components/NewElement.svelte';
	import UpdateElement from '$components/UpdateElement.svelte';
    import Filters from "$components/Filters.svelte";
	import Footer from '$components/Footer.svelte';
	import Tools from '$components/Tools.svelte';
	import AddPage from '$components/AddPage.svelte'; 
    import Header from '$components/Header.svelte';
	import { Data } from '$constants/index.js';
    import Pagenation from '$components/Pagenation.svelte';

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
<Header />
<AddPage />

<div class="container-fluid px-4 py-4">
    <UpdateElement />
</div>

<Footer />

<style>
</style>
