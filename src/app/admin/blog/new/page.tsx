'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function NewBlogPost() {
  const router = useRouter()
  const [formData, setFormData] = useState({
    title: '',
    content: '',
    excerpt: '',
    publishedAt: '',
    estimatedReadingTime: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log('New Blog Post Data:', formData)
    // Here you would typically send data to an API to save the post
    router.push('/admin/blog') // Redirect back to blog list after submission
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white pt-24">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-4xl font-bold mb-8">新增博客文章</h1>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="title" className="form-label">
              标题
            </label>
            <input
              type="text"
              id="title"
              name="title"
              value={formData.title}
              onChange={handleChange}
              className="input-field"
              required
            />
          </div>

          <div>
            <label htmlFor="content" className="form-label">
              内容
            </label>
            <textarea
              id="content"
              name="content"
              value={formData.content}
              onChange={handleChange}
              className="input-field h-64"
              required
            />
          </div>

          <div>
            <label htmlFor="excerpt" className="form-label">
              摘要
            </label>
            <textarea
              id="excerpt"
              name="excerpt"
              value={formData.excerpt}
              onChange={handleChange}
              className="input-field"
            />
          </div>

          <div>
            <label htmlFor="publishedAt" className="form-label">
              发布日期
            </label>
            <input
              type="date"
              id="publishedAt"
              name="publishedAt"
              value={formData.publishedAt}
              onChange={handleChange}
              className="input-field"
            />
          </div>

          <div>
            <label htmlFor="estimatedReadingTime" className="form-label">
              预计阅读时间 (分钟)
            </label>
            <input
              type="text"
              id="estimatedReadingTime"
              name="estimatedReadingTime"
              value={formData.estimatedReadingTime}
              onChange={handleChange}
              className="input-field"
            />
          </div>

          <div className="flex gap-4">
            <button
              type="submit"
              className="btn-primary"
            >
              保存文章
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