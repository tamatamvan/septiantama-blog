<style>
  #about-page {
    height: 100vh;
    display: flex;
    align-items: center;
    margin: 3em 0 0;
  }
  .container {
    max-width: 1400px;
  }
  @media screen and (min-width: 768px) {
    #about-page {
      margin-top: -70px;
    }
  }
  @media screen and (min-height: 700px) {
    #about-page {
      margin-top: -70px;
    }
  }

</style>
<!-- 
<script>
import Icon from '../components/icons/Icon.svelte'
</script> -->

<svelte:head>
  <title>About Me | septiantama.id</title>
</svelte:head>

<div id="about-page">
  <div class="container">
    <h1>About Me</h1>
    <p>
      Hi! I'm Tama, a fullstack developer with main
      expertise in front-end web development. I really love to learn and
      experimenting with new things, and sharing knowledge with others.
    </p>
    <p>
      I enjoy coding 💻, observing people 👀, writing poems ✍🏼, taking pictures of
      beatiful scenery 🌄, and cats 😺.
    </p>
    <!-- <p>
      Feel free to reach me trough my social media accounts, and email bellow.
      😁
    </p> -->
    <!-- <div class="socmeds">
      <div class="socmed-item">
        <Icon component="Github"/>
      </div>
    </div> -->
  </div>
</div>
