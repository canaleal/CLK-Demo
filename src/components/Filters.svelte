
<script>
    // @ts-nocheck
    import { getCurrentDateTime } from '$utils/fetch-time';
    import { faker } from '@faker-js/faker';
    import { Data } from '$constants/index.js';
</script>

<div class="container-fluid px-4 py-4 ">
	<div class="row">
		<div class="col-2">
			<div class="dropdown">
				<button
					class="btn btn-success w-100 dropdown-toggle"
					type="button"
					id="dropdownMenuButton1"
					data-bs-toggle="dropdown"
					aria-expanded="false"
				>
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
			<buton
				class="float-right btn btn-outline-primary w-100"
				type="button"
				data-bs-toggle="modal"
				data-bs-target="#myModal">Add New Page</buton
			>
		</div>
	
	</div>

    <hr>

    <form class="row ">

        <h5>Filters</h5>
			
        <div class="col-md-2 my-1">
			<label for="componentState" class="form-label">Creator</label>
			<select id="componentState" class="form-select">
				<option selected>Choose...</option>
                {#each { length: 25 } as _, i}
					 <option>{faker.name.firstName()} {faker.name.lastName()}</option>
                {/each}
			</select>
		</div>

        <div class="col-md-2 my-1">
			<label for="componentState" class="form-label">Last Update by</label>
			<select id="componentState" class="form-select">
				<option selected>Choose...</option>
                {#each { length: 25 } as _, i}
					 <option>{faker.name.firstName()} {faker.name.lastName()}</option>
                {/each}
			</select>
		</div>

        <div class="col-md-2 my-1">
			<label for="componentState" class="form-label">Component Type</label>
			<select id="componentState" class="form-select">
				<option selected>Choose...</option>
				{#each Data as name}
					 <option>{name}</option>
				{/each}
			</select>
		</div>

        <div class="col-md-2 my-1">
            <label for="inputEmail4" class="form-label">Created At</label>
            <input
                type="date"
                value={getCurrentDateTime()}
                class="form-control"
                id="inputEmail4"
            />
        </div>

        <div class="col-md-2 my-1">
            <label for="inputEmail4" class="form-label">Last Update At</label>
            <input
                type="date"
                value={getCurrentDateTime()}
                class="form-control"
                id="inputEmail4"
            />
        </div>

        
        
        <div class="col-md-2 my-1">
            <label for="inputEmail4" class="form-label">Title Keyword</label>
            <input
                type="text"
                value=""
                class="form-control"
                id="inputEmail4"
            />
        </div>

        <div class="col-2 mt-4">
			<button type="submit" class="btn btn-success w-100">Search</button>
		</div>
      
    </form>
</div>