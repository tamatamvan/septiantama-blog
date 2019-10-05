<script>
export let post
export let first
</script>

<style>
  h2,
  .post-item-footer {
    font-family: Rubik, sans-serif;
    font-weight: 700;
  }

  .post-item-date {
    color: #AAA;
    text-align: left;
    text-transform: uppercase;
    margin-right: 16px;
  }

  hr {
    margin: 60px auto;
  }
</style>

{#if !first}
  <hr />
{/if}
<div class="post-item">
  <h2>
    <a rel='prefetch' href='blog/{post.slug}'>{post.title}</a>
  </h2>
  <p>{post.excerpt}</p>
  <div class="post-item-footer">
    <span class="post-item-date">— {post.printDate}</span>
  </div>
</div>