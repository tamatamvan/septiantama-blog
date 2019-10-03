<style>
  .home-container {
    align-items: center;
    display: flex;
    flex: 1;
    justify-content: center;
    margin: 2em 0;
    min-height: 400px;
  }

  @media (max-width: 800px) {
    .home-container {
      flex-direction: column;
    }
  }
</style>

<script>
import HomeQuote from '../components/HomeQuote.svelte'
const quotes = [
  {
    content: 'The shape of shining future is a big egg.',
    source: 'Yakusoku no Tamago - Hiragana Keyakizaka46'
  },
  {
    content: 'I\'m not expecting anything from myself, doesn\'t mean that I\'ve abandoned my dream',
    source: 'Kitai Shitenai Jibun - Hiragana Keyakizaka46'
  },
  {
    content: 'I still make a lot of mistakes, \r\nAnd I still do a lot of silly things.\r\n I\'m sorry',
    source: 'To My Beloved Dad - Septian Tama'
  }
]

let activeQuoteIdx = Math.round(Math.random() * (quotes.length - 1))

const getNextQuoteIdx = () => {
  if (activeQuoteIdx < quotes.length - 1) {
    return activeQuoteIdx + 1
  }
  return 0
}

setInterval(() => {
  activeQuoteIdx = getNextQuoteIdx()
}, 10000)

</script>

<svelte:head>
  <title>Septian Tama's Blog</title>
</svelte:head>

<div class="home-container">
  {#each quotes as quote, idx}
    {#if idx === activeQuoteIdx}
      <HomeQuote {quote} />
    {/if}
  {/each}
</div>
