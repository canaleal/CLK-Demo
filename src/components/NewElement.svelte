<script>
	// @ts-nocheck

	import { getCurrentDateTime } from '$utils/fetch-time';
	import { Data } from '$constants/index.js';
	import { faker } from '@faker-js/faker';

	let imageUrl = '';
	function preview() {
		imageUrl = URL.createObjectURL(event.target.files[0]);
	}
	function clearImage() {
		imageUrl = '';
	}


	

</script>

<div class="border rounded px-4 py-4 shadow ">
	<form class="row ">
		<h5>New Element</h5>

		<div class="col-md-12 my-1">
			<label for="inputEmail4" class="form-label">Creator</label>
			<input
				type="email"
				value="Alex Canales Bonilla"
				class="form-control"
				disabled
				id="inputEmail4"
			/>
		</div>
		<div class="col-md-6 my-1">
			<label for="inputTitle" class="form-label">Title</label>
			<input type="email" class="form-control" id="inputTitle" />
		</div>
		<div class="col-md-6 my-1">
			<label for="componentState" class="form-label">Component Type</label>
			<select id="componentState" class="form-select">
				<option selected>Choose...</option>
				{#each Data as name}
					 <option>{name}</option>
				{/each}
			</select>
		</div>
		<div class="col-md-6 my-1">
			<label for="inputEmail4" class="form-label">Created At</label>
			<input
				type="email"
				value={getCurrentDateTime()}
				class="form-control"
				disabled
				id="inputEmail4"
			/>
		</div>
	
		<div class="col-12 my-1">
			<label for="comment" class="form-label">Description</label>
			<textarea class="form-control" rows="5" id="comment" name="text" />
		</div>

		<div class="col-12 my-1">
			<label for="comment" class="form-label">Additional Comments</label>
			<textarea class="form-control" rows="5" id="comment" name="text" />
		</div>

		<div class="col-12 my-1">
			<div class="mb-1">
				<label for="Image" class="form-label">Upload Image</label>
				<input class="form-control" type="file" id="formFile" on:change={preview} />

				{#if imageUrl != ''}
					<button on:click={clearImage} class="btn btn-outline-danger my-1">Clear Image</button>
					<!-- svelte-ignore a11y-img-redundant-alt -->
					<img src={imageUrl} alt="Test Image" class="img-fluid" />
				{/if}
			</div>
		</div>

		<div class="col-4 mt-4">
			<button type="submit" class="btn btn-outline-danger w-100">Delete Form Details</button>
		</div>

		<div class="offset-4 col-4 mt-4">
			<button type="submit" class="btn btn-success w-100">Create New Element</button>
		</div>
	</form>
</div>
