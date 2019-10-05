<script context="module">
  export function preload({ params, query }) {
    return this.fetch(`blog.json`).then(r => r.json()).then(posts => {
      return { posts };
    });
  }
</script>

<script>
  import PageHeading from '../../components/PageHeading.svelte'
  import PostsList from '../../components/PostsList.svelte'
  export let posts;
</script>

<svelte:head>
  <title>Blog Archive | Septian Tama's Blog</title>
</svelte:head>

<div class="container">
  <PageHeading text="Blog" />
  <PostsList {posts} />
</div>
