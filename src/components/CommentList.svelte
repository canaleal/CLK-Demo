<script>
	// @ts-nocheck
    import { faker } from '@faker-js/faker';
	import { Data } from '$constants/index.js';
    import Pagenation from '$components/Pagenation.svelte';

	const getRandomStringFromArray = (array) => {
		const randomIndex = Math.floor(Math.random() * array.length);
		return array[randomIndex];
	};

    
</script>


<div class="border rounded px-4 py-4 shadow my-4">

    <div class="row">
        <div class="col-md-4 mb-4">
			<h5>Comments</h5>
		</div>
		<div class="offset-4 col-md-4 mb-4">
			
				<buton class="float-right btn btn-primary w-100"
					>Create Comment</buton
				>
		
		</div>
    </div>

    <table class="table  table-hover table-striped">
        <thead>
          <tr>
     
            <th scope="col">Created By</th>
            <th scope="col">Comment</th>
            <th scope="col">Date</th>
          </tr>
        </thead>
        <tbody>
            {#each { length: 5 } as _, i}
                    <tr >
                      

                        <td>{faker.name.firstName() + " " + faker.name.lastName()}</td>
                        <td>{faker.random.words(10)}</td>
                        <td>{faker.date.recent()}</td>
                    </tr>
				{/each}
       
         
        </tbody>
      </table>

      <Pagenation />
</div>