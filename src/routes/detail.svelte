<script context="module">
	export const prerender = true;
</script>

<script>
	// @ts-nocheck

	import Navbar from '$components/Navbar.svelte';
	import NewElement from '$components/NewElement.svelte';
	import UpdateElement from '$components/UpdateElement.svelte';
	import Footer from '$components/Footer.svelte';
	import Header from '$components/Header.svelte';
	import AddPage from '$components/AddPage.svelte'; 
	import Filters from "$components/Filters.svelte";
	import Pagenation from '$components/Pagenation.svelte';

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
<Filters />
<Header />
<AddPage />


<div class="container-fluid px-4 py-4 ">
	<div class="row">
		<div class="col-4">
			<button on:click={() => onFormTypeChange(1)} class="btn btn-success w-100"
				>Create New Element</button
			>

			<ul class="list-group my-1">
				{#each { length: 25 } as _, i}
					<button
						on:click={() => onListItemClick(0, i)}
						type="button"
						class="list-group-item list-group-item-action "
						>Item # {i} : {getRandomStringFromArray(Data)}</button
					>
				{/each}
			</ul>
			<Pagenation/>

		
		</div>
		<div class="col-8">
			{#if formType == 0}
				<UpdateElement {selectedId} />
			{:else if formType == 1}
				<NewElement />
			{:else}
				<!-- else content here -->
			{/if}
		</div>
	</div>
</div>

<Footer />

<style>
</style>
