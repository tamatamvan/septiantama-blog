<style>
.home-quote {
  flex: 0;
  padding-bottom: 2em;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-top: auto;
}
h1, p {
  width: 100%;
}
h1 {
  font-size: 2.5em;
  font-style: italic;
  font-weight: 700;
  margin-bottom: 0.5em;
}
p {
  text-align: center;
  font-size: 1.2em;
  line-height: 1.5;
  margin-top: 1em;
}

@media screen and (min-width: 768px) {
  .home-quote {
    flex: 1;
  }
  h1 {
    font-size: 3em;
    text-align: left;
  }
  p {
    text-align: right;
  }
}

@media (min-width: 992px) {
  p {
    font-size: 1.4em;
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