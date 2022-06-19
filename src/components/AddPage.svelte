
<script>
    // @ts-nocheck
    import { getCurrentDateTime } from '$utils/fetch-time';
</script>


<!-- The Modal -->
<div class="modal " id="myModal">
	<div class="modal-dialog modal-lg">
	  <div class="modal-content">
  
		<!-- Modal Header -->
		<div class="modal-header">
		  <h4 class="modal-title">Add New Page Element</h4>
		  <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
		</div>
  
		<!-- Modal body -->
		<div class="modal-body">
			<form class="row ">
			
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
					<label for="inputTitle" class="form-label">Page Name</label>
					<input type="email" class="form-control" id="inputTitle" />
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
		
		
			
				<div class="col-4 mt-4">
					<button type="submit" class="btn btn-outline-danger w-100">Delete Form Details</button>
				</div>
		
				<div class="offset-4 col-4 mt-4">
					<button type="submit" class="btn btn-success w-100">Create New Page</button>
				</div>
			</form>
		</div>
  
	
	  </div>
	</div>
  </div>
