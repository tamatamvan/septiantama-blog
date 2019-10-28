<script>
  import Logo from './Logo.svelte'
  import Nav from './Nav.svelte'

  export let segment

  let showNav = true
  let prevScrollPost = 0

  if (typeof window !== 'undefined') {
    const navbarHeight = document.querySelector('header') &&
      document.querySelector('header').offsetHeight

    window.addEventListener('scroll', () => {
      const fixedNavbar = prevScrollPost > window.scrollY
      if (window.scrollY > navbarHeight) {
        prevScrollPost = window.scrollY
        showNav = fixedNavbar
      }
    })
  }
</script>

<style>
  header {
    width: 100vw;
    position: fixed;
    z-index: 2;
    background: #fff;
    transform: translateY(0);
    transition: transform ease .3s;
  }
  header.header-hidden {
    transform: translateY(-100%);
  }
  .header-nav {
    display: flex;
    margin: 0 auto;
    max-width: 1400px;
    padding: 1em;
    width: 100%;
  }
  header hr {
    margin: 0 auto;
  }
</style>

<header class={showNav ? '' : 'header-hidden'}>
  <div class="header-nav">
    <Logo />
    <Nav {segment} />
  </div>
  <hr/>
</header>
