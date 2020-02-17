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
    margin-top: auto;
  }
  .home-latest-articles {
    padding-top: 70px;
  }
  .home-latest-articles-heading {
    margin-top: 1em;
    font-size: 2em;
  }

  @media (min-width: 768px) {
    .home-intro {
      margin-top: -77px;
      padding-top: 77px;
    }
  }
</style>

<script context="module">
  export function preload({ params, query }) {
    return this.fetch(`blog.json?page=1&limit=5`).then(r => r.json()).then(posts => {
      return { posts };
    });
  }
</script>

<script>
import HomeQuote from '../components/HomeQuote.svelte'
import DownArrow from '../components/DownArrow.svelte'
import PostsList from '../components/PostsList.svelte'

const quotes = [
//   {
//     content: 'The shape of shining future is a big egg.',
//     source: 'Yakusoku no Tamago - Hiragana Keyakizaka46'
//   },
  {
    content: 'I\'m not expecting anything from myself, doesn\'t mean that I\'ve abandoned my dream',
    source: 'Kitai Shitenai Jibun - Hiragana Keyakizaka46'
  },
  {
    content: 'It doesn\'t exists, cage of your imagination',
    source: 'Cage - Hinatazaka46'
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

export let posts

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
</div>
<div class="container home-latest-articles">
  <h1 class="home-latest-articles-heading">Latest Stories</h1>
  <PostsList {posts} />
</div>
