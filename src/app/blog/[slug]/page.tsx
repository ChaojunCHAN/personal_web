export default function BlogPost({ params }: { params: { slug: string } }) {
  // 这里可以根据 slug 获取具体的博客内容
  const post = {
    title: "我的第一篇博客文章",
    date: "2024年5月18日",
    content: `
      这是我的第一篇博客文章的详细内容。在这里，我将分享我的技术见解和学习心得。

      ## 为什么选择 Next.js？

      Next.js 是一个强大的 React 框架，它提供了许多开箱即用的功能：

      1. 服务器端渲染 (SSR)
      2. 静态站点生成 (SSG)
      3. 文件系统路由
      4. API 路由
      5. 内置 CSS 支持

      ## 开发体验

      使用 Next.js 进行开发是一种享受。它的开发服务器提供了热重载功能，
      让您可以实时看到代码更改的效果。

      ## 性能优化

      Next.js 自动处理了许多性能优化的工作，包括：

      - 图片优化
      - 字体优化
      - 代码分割
      - 预加载
    `,
    readTime: "5分钟阅读"
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white pt-24">
      <article className="container mx-auto px-4 max-w-4xl">
        <header className="mb-8">
          <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
          <div className="flex items-center text-gray-400">
            <span>{post.date}</span>
            <span className="mx-2">•</span>
            <span>{post.readTime}</span>
          </div>
        </header>

        <div className="prose prose-invert max-w-none">
          {post.content.split('\n\n').map((paragraph, index) => (
            <p key={index} className="mb-4 text-gray-300">
              {paragraph}
            </p>
          ))}
        </div>
      </article>
    </main>
  );
} 