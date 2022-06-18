

<script>
// @ts-nocheck
    import { returnLinkGivenIfStringContains } from '$utils/strip-tool-link';
    export let tools = [];
    export let iconSize = 'w-8';
</script>

<div class="flex flex-wrap justify-between  ">
    {#each tools as tool}
        <img height="100" width="auto" title={tool}  class={`img-icon ${iconSize} mx-2 py-2`} alt="" src={returnLinkGivenIfStringContains(tool)} loading="lazy" />
    {/each}


  </div>