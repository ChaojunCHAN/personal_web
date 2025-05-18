import Link from 'next/link'

export default function Blog() {
  const posts = [
    {
      slug: 'my-first-blog-post',
      title: '我的第一篇博客文章',
      excerpt: '这是我的第一篇博客文章，在这里我将分享我的技术见解和学习心得...',
      date: '2024年5月18日',
      readTime: '5分钟阅读'
    },
    {
      slug: 'learning-nextjs',
      title: '学习 Next.js 的心得',
      excerpt: '分享我在学习 Next.js 过程中的经验和教训...',
      date: '2024年5月17日',
      readTime: '8分钟阅读'
    }
  ];

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white pt-24">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8">博客文章</h1>
        
        <div className="grid gap-8">
          {posts.map((post) => (
            <Link 
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="block bg-gray-800 rounded-lg p-6 hover:bg-gray-700 transition-colors"
            >
              <article>
                <h2 className="text-2xl font-semibold mb-4">{post.title}</h2>
                <p className="text-gray-300 mb-4">
                  {post.excerpt}
                </p>
                <div className="flex items-center text-sm text-gray-400">
                  <span>{post.date}</span>
                  <span className="mx-2">•</span>
                  <span>{post.readTime}</span>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </div>
    </main>
  )
} 