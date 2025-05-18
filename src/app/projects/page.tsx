import Link from 'next/link'

export default function Projects() {
  const projects = [
    {
      slug: 'personal-blog',
      title: "个人博客系统",
      description: "使用 Next.js 和 Tailwind CSS 构建的现代化博客系统",
      technologies: ["Next.js", "Tailwind CSS", "TypeScript"],
      image: "/project-blog.jpg"
    },
    {
      slug: 'task-manager',
      title: "任务管理应用",
      description: "一个简单而强大的任务管理工具，帮助提高工作效率",
      technologies: ["React", "Node.js", "MongoDB"],
      image: "/project-task.jpg"
    },
    {
      slug: 'weather-app',
      title: "天气应用",
      description: "实时天气查询应用，支持全球天气数据",
      technologies: ["Vue.js", "OpenWeather API", "PWA"],
      image: "/project-weather.jpg"
    }
  ];

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white pt-24">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8">我的项目</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <Link 
              key={project.slug}
              href={`/projects/${project.slug}`}
              className="bg-gray-800 rounded-lg overflow-hidden hover:bg-gray-700 transition-colors"
            >
              <div className="h-48 bg-gray-700"></div>
              <div className="p-6">
                <h2 className="text-2xl font-semibold mb-2">{project.title}</h2>
                <p className="text-gray-300 mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span 
                      key={tech}
                      className="px-3 py-1 bg-blue-600 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  )
} 