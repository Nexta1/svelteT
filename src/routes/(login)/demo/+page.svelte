<script lang="ts">
  import Button2 from "./Button.svelte"
  let element: HTMLButtonElement
  let field: Button2
  let input: any

  $: {
    console.log(input)
    console.log(field?.focus) // interact with DOM nodes programmatically.
  }
</script>

<Button2 bind:this={field} />
