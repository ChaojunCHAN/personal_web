export default function ProjectDetail({ params }: { params: { slug: string } }) {
  // 这里可以根据 slug 获取具体的项目内容
  const project = {
    title: "个人博客系统",
    description: "使用 Next.js 和 Tailwind CSS 构建的现代化博客系统",
    longDescription: `
      这是一个使用 Next.js 和 Tailwind CSS 构建的现代化博客系统。
      该系统具有以下特点：

      ## 技术栈
      - Next.js 13+ (App Router)
      - TypeScript
      - Tailwind CSS
      - MDX 支持

      ## 主要功能
      1. 响应式设计
      2. 暗色模式支持
      3. 文章搜索
      4. 标签系统
      5. 评论功能

      ## 性能优化
      - 图片优化
      - 代码分割
      - 静态生成
      - 增量静态再生成
    `,
    technologies: ["Next.js", "Tailwind CSS", "TypeScript"],
    image: "/project-blog.jpg",
    githubUrl: "https://github.com/yourusername/blog",
    liveUrl: "https://your-blog.com"
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white pt-24">
      <article className="container mx-auto px-4 max-w-4xl">
        <header className="mb-8">
          <h1 className="text-4xl font-bold mb-4">{project.title}</h1>
          <p className="text-xl text-gray-300 mb-6">{project.description}</p>
          <div className="flex flex-wrap gap-2 mb-8">
            {project.technologies.map((tech) => (
              <span 
                key={tech}
                className="px-3 py-1 bg-blue-600 rounded-full text-sm"
              >
                {tech}
              </span>
            ))}
          </div>
        </header>

        <div className="prose prose-invert max-w-none">
          {project.longDescription.split('\n\n').map((paragraph, index) => (
            <p key={index} className="mb-4 text-gray-300">
              {paragraph}
            </p>
          ))}
        </div>

        <div className="mt-8 flex gap-4">
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-700 hover:bg-gray-600 text-white px-6 py-3 rounded-lg transition-colors"
          >
            查看源码
          </a>
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition-colors"
          >
            访问网站
          </a>
        </div>
      </article>
    </main>
  );
} 