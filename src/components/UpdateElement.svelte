<script>
	// @ts-nocheck

	import { getCurrentDateTime } from '$utils/fetch-time';
	import { Data } from '$constants/index.js';
	import { faker } from '@faker-js/faker';

	export let selectedId = "Example";
	let isStaticMode = true;
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
		<div class="col-md-4 mb-4">
			<h5>Update Element - {selectedId}</h5>
		</div>
		<div class="offset-4 col-md-4 mb-4">
			{#if isStaticMode}
				<buton on:click={() => (isStaticMode = false)} class="float-right btn btn-primary w-100"
					>Edit Element</buton
				>
			{:else}
				<buton on:click={() => (isStaticMode = true)} class="float-right btn btn-danger w-100"
					>Exit Edit Mode</buton
				>
			{/if}
		</div>

		<div class="col-md-6 my-1 mt-4">
			<label for="inputEmail4" class="form-label">Creator</label>
			<input
				type="email"
				value={faker.name.firstName() + " " + faker.name.lastName()}
				class="form-control"
				disabled
				id="inputEmail4"
			/>
		</div>
		<div class="col-md-6 my-1 mt-4">
			<label for="inputEmail4" class="form-label">Previous Update By</label>
			<input type="email" value={faker.name.firstName() + " " + faker.name.lastName()} class="form-control" disabled id="inputEmail4" />
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

		<div class="col-md-6 my-1">
			<label for="inputEmail4" class="form-label">Last Update At</label>
			<input
				type="email"
				value={getCurrentDateTime()}
				class="form-control"
				disabled
				id="inputEmail4"
			/>
		</div>

		<div class="col-md-6 my-1">
			<label for="inputTitle" class="form-label">Title</label>
			<input type="email" class="form-control" id="inputTitle" disabled={isStaticMode} />
		</div>
		<div class="col-md-6 my-1">
			<label for="componentState" class="form-label">Type</label>
			<select id="componentState" class="form-select" disabled={isStaticMode}>
				<option selected>Choose...</option>
				{#each Data as name}
					<option>{name}</option>
				{/each}
			</select>
		</div>

		<div class="col-md-12 my-1">
			<label for="inputTitle" class="form-label">Web Link (Optional)</label>
			<input type="email" class="form-control" id="inputTitle" disabled={isStaticMode} />
		</div>
		<div class="col-md-12 my-1">
			<label for="inputTitle" class="form-label">File Path (Optional)</label>
			<input type="email" class="form-control" id="inputTitle" disabled={isStaticMode} />
		</div>

		<div class="col-12 my-1">
			<label for="comment" class="form-label">Description</label>
			<textarea class="form-control" rows="5" id="comment" name="text" disabled={isStaticMode} />
		</div>

		<div class="col-12 my-1">
			<label for="comment" class="form-label">Additional Comments</label>
			<textarea class="form-control" rows="5" id="comment" name="text" disabled={isStaticMode} />
		</div>

		<div class="col-12 my-1">
			<div class="mb-1">
				<label for="Image" class="form-label">Upload Image or Diagram</label>
				<input
					class="form-control"
					type="file"
					id="formFile"
					on:change={preview}
					disabled={isStaticMode}
				/>

				{#if imageUrl != ''}
					<button on:click={clearImage} class="btn btn-outline-danger my-1"
						>Clear Image / Diagram</button
					>
					<!-- svelte-ignore a11y-img-redundant-alt -->
					<img src={imageUrl} alt="Test Image" class="img-fluid" />
				{/if}
			</div>
		</div>

		<div class="col-4 mt-4 ">
			<button type="submit" class="btn btn-outline-danger w-100">Delete Form Details</button>
		</div>

		<div class="offset-4 col-4 mt-4">
			<button type="submit" class="btn btn-success w-100">Update Element</button>
		</div>
	</form>
</div>
