<script>
  import Logo from './Logo.svelte'
  import Nav from './Nav.svelte'

  export let segment
</script>

<style>
  header {
    width: 100vw;
    position: fixed;
    z-index: 2;
  }
  .header-nav {
    display: flex;
    margin: 0 auto;
    max-width: 1400px;
    padding: 1em;
    width: 100%;
  }
</style>

<header>
  <div class="header-nav">
    <Logo />
    <Nav {segment} />
  </div>
</header>
