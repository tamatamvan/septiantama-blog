<style>
  .home-intro {
    display: flex;
    flex: 1;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    height: 100vh;

    margin-top: -70px;
    padding-top: 70px;
  }

  .home-down-arrow {
    padding: 1em;
    cursor: pointer;
  }

  @media (min-width: 768px) {
    .home-intro {
      margin-top: -77px;
      padding-top: 77px;
    }
  }
</style>

<script>
import HomeQuote from '../components/HomeQuote.svelte'
import DownArrow from '../components/DownArrow.svelte'

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

const scrollToLatest = () => {
  document.querySelector('.home-latest-articles').scrollIntoView({
    behavior: 'smooth',
  })
}

setInterval(() => {
  activeQuoteIdx = getNextQuoteIdx()
}, 10000)

</script>

<svelte:head>
  <title>Septian Tama's Blog</title>
</svelte:head>

<div class="home-intro">
  {#each quotes as quote, idx}
    {#if idx === activeQuoteIdx}
      <HomeQuote {quote} />
    {/if}
  {/each}
  <div class="home-down-arrow" on:click={scrollToLatest}>
    <DownArrow />
  </div>
  <div class="home-latest-articles"></div>
</div>
