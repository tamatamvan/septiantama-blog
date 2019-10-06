<script>
export let onClick
export let text
</script>

<style>
.btn {
  border: none;
  background: #5bbee5;
  color: #fff;
  font-size: 1.2em;
  padding: .6em 1.2em;
  cursor: pointer;
}
.btn:hover, .btn:active {
  background: #0096d1;
}
</style>

<button type="button" class="btn" on:click={onClick}>
  {text}
</button>