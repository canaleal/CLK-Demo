<script>
// @ts-nocheck

	const projectList = [
		{
			id: 0,
			name: "Detail",
			link: "detail",
		},
		{
			id: 1,
			name: "List",
			link: "list",
		}
	];

	const applicationToolsList = [
		{
			id: 0,
			name: "Animista",
			link: "https://animista.net/play/basic",
		},

		{
			id: 1,
			name: "Developer Icons",
			link: "https://devicon.dev/",
		},
		{
			id: 2,
			name: "Color Designer",
			link: "https://colordesigner.io/tools",
		},
		{
			id: 3,
			name: "Font Awesome",
			link: "https://fontawesome.com/",
		},
		{
			id: 4,
			name: "Cool Backgrounds",
			link: "https://coolbackgrounds.io/",
		},
		{
			id: 5,
			name: "Gradient Generator",
			link: "https://cssgradient.io/",
		},
	];

	const aboutList = [
		{
			id: 0,
			name: "Linkedin",
			link: "https://www.linkedin.com/in/alex-canales",
		},
		{
			id: 1,
			name: "Github",
			link: "https://github.com/canaleal",
		},
		{
			id: 2,
			name: "Bitbucket",
			link: "https://bitbucket.org/Canaleal/",
		},
	];
</script>

<hr />
<footer class="bg-smoke  py-8 px-5">
	<div class="row py-2">
		<div class="col-4 ">
			<p class="font-bold">Project Details</p>

			{#each projectList as item}
				<div key={item.id} class="my-2">
					<a href={`${item.link}`} class="text-sm  hover:underline">{item.name}</a>
				</div>
			{/each}
		</div>

		<div class="col-4">
			<p class="font-bold">Application Tools</p>
			{#each applicationToolsList as item}
				<div key={item.id} class="my-2">
					<a href={`${item.link}`} target="_blank" rel="noreferrer" class="text-sm  hover:underline">{item.name}</a>
				</div>
			{/each}
		</div>

		<div class="col-4 ">
			<p class="font-bold">About</p>

			{#each aboutList as item}
				<div key={item.id} class="my-2">
					<a href={`${item.link}`} target="_blank" class="text-sm  hover:underline" rel="noreferrer">{item.name}</a>
				</div>
			{/each}
		</div>
	</div>

	<div class="row mt-8">
		<div class="col-4">
			<p class="font-bold">Disclaimer</p>
			<p class="font-bold text-xs my-2">© CAPSTONE API. All rights reserved.</p>
			<p class="font-bold text-xs my-2">Website Terms and Policies</p>

			<p class="text-xs my-2">
				If you require any more information or have any questions about our sites disclaimer, please feel free to contact me by email at alexcanales766@gmail.com. The Disclaimer was generated with the
				help of the Disclaimer Generator. All the information on this website - Showcase - is published in good faith and for general information purpose only.
			</p>
		</div>

		<div class="col-4 py-2 " />

		<div class="col-4">
			<p class="font-bold">License Terms</p>

			<p class="text-xs my-2">Welcome to the CAPSTONE API portal. The objective of this site is to make CAPSTONE data, including imagery, eminently accessible to application developers.</p>
		</div>
	</div>
</footer>
