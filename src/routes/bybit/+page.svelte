<script lang="ts">
  import { NativeSelect } from "@svelteuidev/core"
  import Calendar from "@toast-ui/calendar"
  import { onMount } from "svelte"
  onMount(() => {
    const calendar = new Calendar("#calendar", {
      defaultView: "month"
    })
  })
</script>

<NativeSelect
  data={["Svelte", "React", "Vue", "Angular", "Solid"]}
  placeholder="Pick one"
  label="Select your favorite framework/library"
  description="This is anonymous"
/>
<div id="calendar" style="height: 800px"></div>
