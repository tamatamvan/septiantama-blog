import { fetchPosts } from '../../posts'

export function get(req, res) {
  const { page, limit } = req.query
  const contents = JSON.stringify(fetchPosts(page || 1, limit || 10)
    .map(post => {
      return {
        title: post.title,
        slug: post.slug,
        excerpt: post.excerpt,
        printDate: post.printDate,
      }
    }))

  res.writeHead(200, {
    'Content-Type': 'application/json'
  })

  res.end(contents)
}
