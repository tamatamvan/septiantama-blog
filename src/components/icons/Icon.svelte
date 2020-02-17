<script>
import Github from './Github.svelte'
import Fb from './Fb.svelte'
import Ig from './Ig.svelte'


export let component
export let size = 24
export let fillColor = '#000'
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  width={size}
  height={size}
  viewBox="0 0 24 24"
>
  <svelte:component
    this={component}
    size={size}
    fillColor={fillColor}
  >
  </svelte:component>
</svg>