<script>
import PostItem from './PostItem.svelte'
export let posts
</script>

<div class="posts-list">
{#each posts as post, index}
  <PostItem first={index === 0} {post} />
{/each}
</div>