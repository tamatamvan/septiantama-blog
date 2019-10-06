<script context="module">
  export async function preload({ params, query }) {
    const res = await this.fetch(`blog.json?page=1&limit=10`)
    const posts = await res.json()
    return ({
      posts,
      isLastPage: posts.length < 10
    })
  }
</script>

<script>
  import Button from '../../components/Button.svelte'
  import PageHeading from '../../components/PageHeading.svelte'
  import PostsList from '../../components/PostsList.svelte'
  import LoadingIndicator from '../../components/LoadingIndicator.svelte'

  export let posts
  export let isLastPage

  let isLoading = false
  let currentPage = 1

  // const checkIfLastPage = async () => {
  //   const resNextPage = await fetch(`/blog.json?page=${currentPage + 1}&limit=10`)
  //   const nextPageCount = await resNextPage.json()
  //   isLastPage = nextPageCount.length === 0
  // }

  const loadMore = async () => {
    isLoading = true
    currentPage++
    const res = await fetch(`/blog.json?page=${currentPage}&limit=10`)
    const fetchedPosts = await res.json()
    const fetchedPostsCount = fetchedPosts.length
    if (fetchedPostsCount) {
      posts = [...posts, ...fetchedPosts]
      isLoading = false

      if(fetchedPostsCount < 10) {
        isLastPage = true
      } 
      // else {
      //   checkIfLastPage()
      // }
    } else {
      isLastPage = true
      isLoading = false
      currentPage--
    }
  }
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
