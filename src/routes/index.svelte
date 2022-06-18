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
}
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<Navbar />


<div class="container-fluid px-4 py-4 ">
	<div class="row">
		<div class="col-2">
			<div class="dropdown">
				<button class="btn btn-success w-100 dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
				  Select Page
				</button>
				<ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
				  <li><a class="dropdown-item" href="#">CLK - Insurance Reporting Page</a></li>
				  <li><a class="dropdown-item" href="#">CLK - Mortgage Reporting Page</a></li>
				  <li><a class="dropdown-item" href="#">CLK - Data Management Reporting Page</a></li>
				</ul>
			  </div>
		</div>
		<div class="col-2">
			<buton  class="float-right btn btn-outline-primary w-100">Add New Page</buton>
		</div>
		<div class="col-2">
			
		</div>
	</div>
</div>

<div class="bg-dark px-4 py-4 text-white">
	<div class="row ">
		<div class="col-12 my-1">
			<h1 class="navbar-brand" >CLK - Insurance Reporting Page</h1>
		</div>

		<div class="col-4 my-1">
			<p >Aliquip adipisicing velit elit pariatur. Sint pariatur eu quis consequat proident fugiat non dolor ea ea adipisicing duis eu. Cillum voluptate sint cupidatat aute cupidatat nisi ea non consequat cillum. Nisi do adipisicing irure duis veniam sit laboris. Tempor ut sint cillum deserunt deserunt laborum sint nisi non cupidatat. Commodo ad qui sint aliquip. Ad excepteur elit commodo qui nisi et sint tempor dolor do commodo proident. Tempor ea cillum dolore mollit consequat. Amet dolor reprehenderit ex consequat elit in laboris. Elit quis dolore dolore pariatur nostrud laborum.</p>
		</div>
		
		<div class="offset-4 col-4 my-1">
			<Tools tools={['java', 'angularjs', "apache", "mysql"]}/>
		</div>
	</div>
	

</div>

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
						class="list-group-item list-group-item-action ">Item # {i} : {getRandomStringFromArray(Data)}</button
					>
				{/each}
			</ul>

			<nav aria-label="Page navigation example">
				<ul class="pagination">
					<li class="page-item">
						<a class="page-link" href="#" aria-label="Previous">
							<span aria-hidden="true">&laquo;</span>
						</a>
					</li>
					{#each { length: 12 } as _, i}
						<li class="page-item "><a class="page-link" href="#">{i + 1}</a></li>
					{/each}

					<li class="page-item">
						<a class="page-link" href="#" aria-label="Next">
							<span aria-hidden="true">&raquo;</span>
						</a>
					</li>
				</ul>
			</nav>
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
