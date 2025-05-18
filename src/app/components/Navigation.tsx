import Link from 'next/link'

export default function Navigation() {
  return (
    <nav className="fixed top-0 w-full bg-gray-900/80 backdrop-blur-sm z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold hover:text-blue-400 transition-colors">
            我的个人网站
          </Link>
          <div className="space-x-6">
            <Link href="/" className="hover:text-blue-400 transition-colors">首页</Link>
            <Link href="/blog" className="hover:text-blue-400 transition-colors">博客</Link>
            <Link href="/projects" className="hover:text-blue-400 transition-colors">项目</Link>
            <Link href="/about" className="hover:text-blue-400 transition-colors">关于</Link>
          </div>
        </div>
      </div>
    </nav>
  )
} 