<script lang="ts">
  import '@/core'
  import { onMount } from 'svelte'
  import { assets, base, resolveRoute } from '$app/paths'
  import {
    afterNavigate,
    beforeNavigate,
    disableScrollHandling,
    goto,
    invalidate,
    invalidateAll,
    onNavigate,
    preloadCode,
    preloadData,
    pushState,
    replaceState
  } from '$app/navigation'
  import { getStores, navigating, page, updated } from '$app/stores'
  onMount(() => {
    const a = fetch('/api/x')
    console.log(Object.fromEntries($page.url.searchParams))
  })
</script>

<svelte:head>
  <title>About</title>
  <meta name="description" content="About this app" />
</svelte:head>

<div class="text-column">123</div>
