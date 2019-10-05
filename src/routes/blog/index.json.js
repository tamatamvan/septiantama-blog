import { fetchPosts } from '../../posts';

export function get(req, res) {
  const page = req.query.page || 1
  const limit = req.query.limit || 10
  const contents = JSON.stringify(fetchPosts(page, limit)
    .map(post => {
      return {
        title: post.title,
        slug: post.slug,
        excerpt: post.excerpt,
        printDate: post.printDate,
      };
    }));

  res.writeHead(200, {
    'Content-Type': 'application/json'
  });

  res.end(contents);
}
