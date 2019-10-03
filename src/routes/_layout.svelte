<script>
  import Header from '../components/Header.svelte'

  export let segment
</script>

<style>
  .layout {
    display: flex;
    flex-direction: column;
    min-height: 100%;
    min-height: 100vh;
  }

  main {
    display: flex;
    flex-direction: column;
    flex: 1;
    position: relative;
    background-color: white;
    box-sizing: border-box;
    margin: 0 auto;
    padding: 1em 2em;
    width: 100%;
    max-width: 1400px;
    min-height: 100vh;
    padding-top: 70px;
  }

  footer {
    color: #AAA;
    font-size: 1em;
    font-family: Rubik, sans-serif;
    margin: 1em auto;
    max-width: 1400px;
    padding: 1em 2em;
    text-align: center;
    width: 100%;
  }

  @media screen and (min-width: 768px) {
    main {
      padding-top: 77px;
    }
  }
</style>

<div class="layout">
  <Header {segment}/>

  <main>
    <slot></slot>
  </main>

  <footer>
    <hr/>
    <span>
      &copy; {new Date().getFullYear()} Septian Tama's Blog.
    </span>
  </footer>
</div>
