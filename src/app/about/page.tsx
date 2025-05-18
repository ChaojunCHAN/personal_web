export default function About() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white pt-24">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold mb-8">关于我</h1>
          
          <section className="bg-gray-800 rounded-lg p-8 mb-8">
            <h2 className="text-2xl font-semibold mb-4">个人简介</h2>
            <p className="text-gray-300 mb-4">
              我是一名充满热情的全栈开发者，专注于创建优秀的用户体验和高质量的代码。
              我热爱学习新技术，并且喜欢将我的知识分享给他人。
            </p>
          </section>

          <section className="bg-gray-800 rounded-lg p-8 mb-8">
            <h2 className="text-2xl font-semibold mb-4">技能</h2>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <h3 className="text-xl font-medium mb-2">前端开发</h3>
                <ul className="list-disc list-inside text-gray-300">
                  <li>React / Next.js</li>
                  <li>TypeScript</li>
                  <li>Tailwind CSS</li>
                  <li>HTML5 / CSS3</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-medium mb-2">后端开发</h3>
                <ul className="list-disc list-inside text-gray-300">
                  <li>Node.js</li>
                  <li>Python</li>
                  <li>MongoDB</li>
                  <li>RESTful API</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="bg-gray-800 rounded-lg p-8">
            <h2 className="text-2xl font-semibold mb-4">联系方式</h2>
            <div className="space-y-4">
              <p className="text-gray-300">
                <span className="font-medium">邮箱：</span>
                your.email@example.com
              </p>
              <p className="text-gray-300">
                <span className="font-medium">GitHub：</span>
                <a href="https://github.com/yourusername" className="text-blue-400 hover:underline">
                  github.com/yourusername
                </a>
              </p>
              <p className="text-gray-300">
                <span className="font-medium">LinkedIn：</span>
                <a href="https://linkedin.com/in/yourusername" className="text-blue-400 hover:underline">
                  linkedin.com/in/yourusername
                </a>
              </p>
            </div>
          </section>
        </div>
      </div>
    </main>
  )
} 