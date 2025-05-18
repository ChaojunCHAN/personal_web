'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

// 模拟文章数据
const mockPosts = [
  {
    id: 1,
    title: '使用 Next.js 构建现代化网站',
    date: '2024-03-20',
    readTime: '5',
    excerpt: '探索 Next.js 框架的强大功能和最佳实践...'
  },
  {
    id: 2,
    title: 'React 性能优化技巧',
    date: '2024-03-18',
    readTime: '8',
    excerpt: '学习如何提升 React 应用的性能和用户体验...'
  }
]

export default function BlogList() {
  const router = useRouter()
  const [posts, setPosts] = useState(mockPosts)

  const handleDelete = (id: number) => {
    if (window.confirm('确定要删除这篇文章吗？')) {
      // 这里添加删除文章的逻辑
      setPosts(posts.filter(post => post.id !== id))
    }
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white pt-24">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-bold">文章列表</h1>
          <Link
            href="/admin/blog/new"
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition-colors"
          >
            新建文章
          </Link>
        </div>

        <div className="space-y-4">
          {posts.map((post) => (
            <div
              key={post.id}
              className="bg-gray-800 rounded-lg p-6 hover:bg-gray-700 transition-colors"
            >
              <div className="flex justify-between items-start">
                <div>
                  <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
                  <p className="text-gray-400 mb-4">{post.excerpt}</p>
                  <div className="flex gap-4 text-sm text-gray-400">
                    <span>{post.date}</span>
                    <span>{post.readTime} 分钟阅读</span>
                  </div>
                </div>
                <div className="flex gap-2">
                  <button
                    onClick={() => router.push(`/admin/blog/edit/${post.id}`)}
                    className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors"
                  >
                    编辑
                  </button>
                  <button
                    onClick={() => handleDelete(post.id)}
                    className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg transition-colors"
                  >
                    删除
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  )
} 