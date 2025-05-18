import Link from 'next/link'

export default function AdminPanel() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white pt-24">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8">管理面板</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* 博客管理 */}
          <section className="bg-gray-800 rounded-lg p-6">
            <h2 className="text-2xl font-semibold mb-4">博客管理</h2>
            <div className="space-y-4">
              <Link 
                href="/admin/blog/new" 
                className="block bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-center"
              >
                新建文章
              </Link>
              <Link 
                href="/admin/blog/list" 
                className="block bg-gray-700 hover:bg-gray-600 text-white px-4 py-2 rounded-lg text-center"
              >
                文章列表
              </Link>
            </div>
          </section>

          {/* 项目管理 */}
          <section className="bg-gray-800 rounded-lg p-6">
            <h2 className="text-2xl font-semibold mb-4">项目管理</h2>
            <div className="space-y-4">
              <Link 
                href="/admin/projects/new" 
                className="block bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-center"
              >
                新建项目
              </Link>
              <Link 
                href="/admin/projects/list" 
                className="block bg-gray-700 hover:bg-gray-600 text-white px-4 py-2 rounded-lg text-center"
              >
                项目列表
              </Link>
            </div>
          </section>
        </div>
      </div>
    </main>
  )
} 