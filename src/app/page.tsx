import Link from 'next/link'

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      {/* 导航栏 */}
      <nav className="fixed top-0 w-full bg-gray-900/80 backdrop-blur-sm z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold">陈超军的个人网站</h1>
            <div className="space-x-6">
              <Link href="/" className="hover:text-blue-400 transition-colors">首页</Link>
              <Link href="/blog" className="hover:text-blue-400 transition-colors">博客</Link>
              <Link href="/projects" className="hover:text-blue-400 transition-colors">项目</Link>
              <Link href="/about" className="hover:text-blue-400 transition-colors">关于</Link>
            </div>
          </div>
        </div>
      </nav>

      {/* 主要内容 */}
      <div className="container mx-auto px-4 pt-32 pb-16">
        <section className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl font-bold mb-6">欢迎来到陈超军的个人空间</h2>
          <p className="text-xl text-gray-300 mb-8">
            这里是我分享技术、经验和想法的地方
          </p>
          <div className="flex justify-center gap-4">
            <Link 
              href="/projects" 
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition-colors"
            >
              查看项目
            </Link>
            <Link 
              href="/blog" 
              className="bg-gray-700 hover:bg-gray-600 text-white px-6 py-3 rounded-lg transition-colors"
            >
              阅读博客
            </Link>
          </div>
        </section>

        {/* 特色内容 */}
        <section className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-gray-800 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">技术博客</h3>
            <p className="text-gray-300">分享我的技术见解和学习心得</p>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">项目展示</h3>
            <p className="text-gray-300">展示我的个人项目和作品集</p>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">关于我</h3>
            <p className="text-gray-300">了解更多关于我的信息</p>
          </div>
        </section>
      </div>

      {/* 页脚 */}
      <footer className="bg-gray-900 py-8">
        <div className="container mx-auto px-4 text-center text-gray-400">
          <p>© 2024 陈超军的的个人网站. All rights reserved.</p>
        </div>
      </footer>
    </main>
  )
}
