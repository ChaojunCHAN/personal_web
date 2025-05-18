'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import dynamic from 'next/dynamic'

// 动态导入 TinyMCE 编辑器组件
const Editor = dynamic(() => import('@tinymce/tinymce-react').then(mod => mod.Editor), {
  ssr: false,
  loading: () => <p>加载编辑器中...</p>
})

// 模拟文章数据
const mockPost = {
  id: 1,
  title: '使用 Next.js 构建现代化网站',
  content: '这是一篇关于 Next.js 的详细教程...',
  excerpt: '探索 Next.js 框架的强大功能和最佳实践...',
  date: '2024-03-20',
  readTime: '5'
}

export default function EditBlogPost({ params }: { params: { id: string } }) {
  const router = useRouter()
  const [formData, setFormData] = useState({
    title: '',
    content: '',
    excerpt: '',
    date: '',
    readTime: ''
  })

  useEffect(() => {
    // 这里添加获取文章数据的逻辑
    // 目前使用模拟数据
    setFormData({
      title: mockPost.title,
      content: mockPost.content,
      excerpt: mockPost.excerpt,
      date: mockPost.date,
      readTime: mockPost.readTime
    })
  }, [params.id])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    // 这里添加更新文章的逻辑
    console.log('更新文章:', formData)
    // 更新成功后返回文章列表
    router.push('/admin/blog/list')
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white pt-24">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-4xl font-bold mb-8">编辑文章</h1>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="title" className="form-label">
              标题
            </label>
            <input
              type="text"
              id="title"
              value={formData.title}
              onChange={(e) => setFormData({ ...formData, title: e.target.value })}
              className="input-field"
              required
            />
          </div>

          <div>
            <label htmlFor="excerpt" className="form-label">
              摘要
            </label>
            <textarea
              id="excerpt"
              value={formData.excerpt}
              onChange={(e) => setFormData({ ...formData, excerpt: e.target.value })}
              className="input-field"
              rows={3}
              required
            />
          </div>

          <div>
            <label htmlFor="content" className="form-label">
              内容
            </label>
            <div className="prose prose-invert max-w-none">
              <Editor
                apiKey={process.env.NEXT_PUBLIC_TINYMCE_API_KEY}
                value={formData.content}
                onEditorChange={(content) => setFormData({ ...formData, content })}
                init={{
                  height: 500,
                  menubar: true,
                  plugins: [
                    'advlist', 'autolink', 'lists', 'link', 'image', 'charmap', 'preview',
                    'anchor', 'searchreplace', 'visualblocks', 'code', 'fullscreen',
                    'insertdatetime', 'media', 'table', 'code', 'help', 'wordcount'
                  ],
                  toolbar: 'undo redo | blocks | ' +
                    'bold italic forecolor | alignleft aligncenter ' +
                    'alignright alignjustify | bullist numlist outdent indent | ' +
                    'removeformat | help',
                  content_style: 'body { font-family: -apple-system, BlinkMacSystemFont, San Francisco, Segoe UI, Roboto, Helvetica Neue, sans-serif; font-size: 14px; }',
                  skin: 'oxide-dark',
                  content_css: 'dark'
                }}
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label htmlFor="date" className="form-label">
                发布日期
              </label>
              <input
                type="date"
                id="date"
                value={formData.date}
                onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                className="input-field"
                required
              />
            </div>

            <div>
              <label htmlFor="readTime" className="form-label">
                阅读时间（分钟）
              </label>
              <input
                type="number"
                id="readTime"
                value={formData.readTime}
                onChange={(e) => setFormData({ ...formData, readTime: e.target.value })}
                className="input-field"
                required
              />
            </div>
          </div>

          <div className="flex gap-4">
            <button
              type="submit"
              className="btn-primary"
            >
              保存修改
            </button>
            <button
              type="button"
              onClick={() => router.back()}
              className="btn-secondary"
            >
              取消
            </button>
          </div>
        </form>
      </div>
    </main>
  )
} 