<style>
.home-quote {
  flex: 1;
}

h1 {
  font-weight: 700;
  margin-bottom: 0.5em;
}

p {
  font-size: 1.4em;
  line-height: 1.5;
}

@media (max-width: 1020px) {
  p {
    font-size: 1.2em;
  }
}

@media (max-width: 800px) {
  .home-quote {
    flex: 0;
    padding-bottom: 2em;
    text-align: center;
  }
}
.fade-in-bottom {
  animation: fade-in-bottom 0.6s cubic-bezier(0.390, 0.575, 0.565, 1.000) both;
}
@keyframes fade-in-bottom {
  0% {
    transform: translateY(50px);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
}
</style>

<script>
  export let quote
</script>

<div class="home-quote fade-in-bottom">
  <h1>
    { quote.content }
  </h1>
  <p>{ quote.source }</p>
</div>