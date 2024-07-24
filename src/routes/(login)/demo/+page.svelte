<script lang="ts">
  import { page } from '$app/stores'
  export let data
  console.log($page.data)
</script>

<svelte:head>
  <title>About</title>
  <meta name="description" content="About this app" />
</svelte:head>

<div class="text-column">
  {data.x}
</div>
