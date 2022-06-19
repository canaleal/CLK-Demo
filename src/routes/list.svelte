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
<Filters />
<Header />
<AddPage />

<div class="container-fluid px-4 py-4">
    <table class="table  table-hover table-striped">
        <thead>
          <tr>
            <th scope="col">item</th>
            <th scope="col">Title</th>
            <th scope="col">Type</th>
            <th scope="col">Created By</th>
            <th scope="col">Updated By</th>
            <th scope="col">Created At</th>
            <th scope="col">Last Update At</th>
          </tr>
        </thead>
        <tbody>
            {#each { length: 10 } as _, i}
                    <tr>
                        <th scope="row">{i}</th>
                        <td>{faker.company.companyName()}</td>
                        <td>{getRandomStringFromArray(Data)}</td>
                        <td>{faker.name.firstName() + " " + faker.name.lastName()}</td>
                        <td>{faker.name.firstName() + " " + faker.name.lastName()}</td>
                        <td>{faker.date.past()}</td>
                        <td>{faker.date.past()}</td>
                    </tr>
				{/each}
       
         
        </tbody>
      </table>

      <Pagenation />
</div>

<Footer />

<style>
</style>
