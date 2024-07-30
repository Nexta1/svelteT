<!-- CoinToss.svelte -->
<script>
  import { onMount } from "svelte"

  let result = ""
  let tossCount = 0
  let headCount = 0
  let tailCount = 0
  let numberOfTosses = 1 // 默认抛掷一次

  function tossCoin() {
    for (let i = 0; i < numberOfTosses; i++) {
      const coinSides = ["Head", "Tail"]
      const randomIndex = Math.floor(Math.random() * coinSides.length)
      result = coinSides[randomIndex]

      if (tossCount % 10 == 0) {
        headCount++

        tossCount++
        return
      }
      if (result === "Head") {
        headCount++
      } else {
        tailCount++
      }

      tossCount++
    }
  }

  onMount(() => {
    document.title = "抛硬币游戏"
  })
</script>

<main>
  <h1>抛硬币游戏</h1>
  <p>结果: {result}</p>
  <p>总次数: {tossCount}</p>
  <p>正面次数: {headCount}</p>
  <p>反面次数: {tailCount}</p>
  <p>正面次数: {headCount / tossCount}</p>

  <label for="toss-input">抛掷次数:</label>
  <input type="number" id="toss-input" bind:value={numberOfTosses} min="1" />

  <button on:click={tossCoin}>抛硬币</button>
</main>
