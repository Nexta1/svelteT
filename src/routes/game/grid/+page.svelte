<!-- src/App.svelte -->
<script lang="ts">
  import { onMount } from "svelte"

  let score = 36
  /**
   * @type {number | null}
   */
  let correctCell: number | null = null
  let clickedCells: number[] = []

  // 生成随机正确格子
  onMount(() => {
    correctCell = Math.floor(Math.random() * 36)
  })

  function handleClick(cellIndex: number) {
    // if (clickedCells.includes(cellIndex)) return // 防止重复点击

    // clickedCells.push(cellIndex)
    correctCell = Math.floor(Math.random() * 36)
    if (cellIndex === correctCell) {
      score += 36
    } else {
      score -= 1
    }
  }
</script>

<div class="grid">
  {#each Array(36).keys() as i}
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <div class="cell" role="button" tabindex="0" on:click={() => handleClick(i)}>
      {correctCell === i ? "🎉" : ""}
    </div>
  {/each}
</div>

<p>Score: {score}</p>

<style>
  .grid {
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    gap: 10px;
  }

  .cell {
    width: 100%;
    height: 100px;
    background-color: lightblue;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
  }
</style>
