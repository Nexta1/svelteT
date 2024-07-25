<script lang="ts">
  export let input: HTMLInputElement | null = null

  export function focus() {
    input && input.focus()
  }
  function foo(node: HTMLInputElement) {
    // the node has been mounted in the DOM
    console.log(node, 1)
    return {
      destroy() {
        // the node has been removed from the DOM
      }
    }
  }
</script>

<input bind:this={input} use:foo />
