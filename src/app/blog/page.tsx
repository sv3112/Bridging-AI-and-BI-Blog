import React from 'react'
import Link from 'next/link'

// This is a placeholder for your blog posts
// In a real application, you would fetch this data from a CMS or database
const blogPosts = [
  {
    slug: 'integrating-bi-ai',
    title: 'Integrating BI with AI: A Comprehensive Guide',
    excerpt: 'Learn how to combine Business Intelligence and Artificial Intelligence to transform your data analytics.',
    date: '2024-04-03'
  },
  {
    slug: 'bi-ai-best-practices',
    title: 'Best Practices for BI and AI Integration',
    excerpt: 'Discover the key best practices for successfully integrating BI and AI in your organization.',
    date: '2024-04-02'
  },
  {
    slug: 'my-experience-with-bi-ai',
    title: 'My Personal Experience with BI and AI Integration',
    excerpt: 'A firsthand account of implementing BI and AI solutions in a real-world business environment.',
    date: '2024-04-01'
  }
]

export default function BlogPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Blog Posts</h1>
      <div className="grid gap-8">
        {blogPosts.map((post) => (
          <article key={post.slug} className="border-b pb-8">
            <Link href={`/blog/${post.slug}`}>
              <h2 className="text-2xl font-semibold mb-2 hover:text-blue-600">
                {post.title}
              </h2>
            </Link>
            <time className="text-gray-500 text-sm mb-2 block">
              {new Date(post.date).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}
            </time>
            <p className="text-gray-600 mb-4">{post.excerpt}</p>
            <Link
              href={`/blog/${post.slug}`}
              className="text-blue-600 hover:text-blue-800"
            >
              Read more →
            </Link>
          </article>
        ))}
      </div>
    </div>
  )
} 