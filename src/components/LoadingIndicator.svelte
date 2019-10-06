<script>
  export let size
</script>

<style>
.loading-indicator {
  text-align: center;
  margin: 3em 0 0;
}
</style>

<div class="loading-indicator">
  <svg width={size} height={size} xmlns="http://www.w3.org/2000/svg" viewBox={`0 0 100 100`} preserveAspectRatio="xMidYMid" class="lds-eclipse" style="background: none;"><path stroke="none" d="M10 50A40 40 0 0 0 90 50A40 42 0 0 1 10 50" fill="#5bbee5" transform="rotate(359.842 50.0056 51.0057)"><animateTransform attributeName="transform" type="rotate" calcMode="linear" values="0 50 51;360 50 51" keyTimes="0;1" dur="0.5s" begin="0s" repeatCount="indefinite"></animateTransform></path></svg>
</div>