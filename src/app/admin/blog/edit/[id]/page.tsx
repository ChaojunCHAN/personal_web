'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'

// Mock data - replace with actual data fetching based on id
const mockPost = {
  id: '1',
  title: '示例博客文章',
  content: '<p>这是示例博客文章的内容。</p>',
  excerpt: '这是示例博客文章的摘要。',
  publishedAt: '2023-10-26',
  estimatedReadingTime: '5',
}

export default function EditBlogPost({ params }: { params: { id: string } }) {
  const router = useRouter()
  const postId = params.id

  const [formData, setFormData] = useState({
    title: '',
    content: '',
    excerpt: '',
    publishedAt: '',
    estimatedReadingTime: '',
  })

  useEffect(() => {
    // In a real application, fetch post data based on postId
    console.log(`Fetching post with id: ${postId}`)
    setFormData(mockPost) // Use mock data for now
  }, [postId])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log('Updated Blog Post Data:', formData)
    // Here you would typically send updated data to an API to save the post
    router.push('/admin/blog') // Redirect back to blog list after submission
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6">编辑博客文章 (ID: {postId})</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="title" className="form-label">标题:</label>
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
          <label htmlFor="content" className="form-label">内容:</label>
          {/* Replace TinyMCE with a textarea */}
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
          <label htmlFor="excerpt" className="form-label">摘要:</label>
          <textarea
            id="excerpt"
            name="excerpt"
            value={formData.excerpt}
            onChange={handleChange}
            className="input-field"
          />
        </div>
        <div>
          <label htmlFor="publishedAt" className="form-label">发布日期:</label>
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
          <label htmlFor="estimatedReadingTime" className="form-label">预计阅读时间 (分钟):</label>
          <input
            type="text"
            id="estimatedReadingTime"
            name="estimatedReadingTime"
            value={formData.estimatedReadingTime}
            onChange={handleChange}
            className="input-field"
          />
        </div>
        <button type="submit" className="primary-button">保存更改</button>
      </form>
    </div>
  )
} 