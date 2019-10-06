<script context="module">
  export function preload({ params, query }) {
    return this.fetch(`blog.json?page=1&limit=1`)
      .then(r => r.json())
      .then(posts => {
        return { posts };
      });
  }
</script>

<script>
  import Button from '../../components/Button.svelte'
  import PageHeading from '../../components/PageHeading.svelte'
  import PostsList from '../../components/PostsList.svelte'
  import LoadingIndicator from '../../components/LoadingIndicator.svelte'

  let isLoading = false
  let isLastPage = false
  let currentPage = 1

  const loadMore = async () => {
    isLoading = true
    currentPage++
    const fetchedPosts = await fetch(`/blog.json?page=${currentPage}&limit=10`)
    const fetchedPostsJson = await fetchedPosts.json()
    if (fetchedPostsJson.length) {
      posts = [...posts, ...fetchedPostsJson]
      isLoading = false
    } else {
      isLastPage = true
      isLoading = false
      currentPage--
    }
  }

  export let posts;
</script>

<style>
.load-more {
  margin: 3em 0 0;
  text-align: center;
}
</style>

<svelte:head>
  <title>Blog Archive | Septian Tama's Blog</title>
</svelte:head>

<div class="container">
  <PageHeading text="Blog" />
  <PostsList {posts} />
  {#if (!isLastPage && !isLoading)}
    <div class="load-more">
      <Button
        text="See More Stories"
        onClick={loadMore}
      />
    </div>
  {/if}
  {#if (isLoading)}
  <LoadingIndicator size={48}/>
  {/if}
</div>
