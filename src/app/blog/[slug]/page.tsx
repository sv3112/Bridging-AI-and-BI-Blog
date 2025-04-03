import React from 'react'
import { Metadata } from 'next'
import { getPostBySlug } from '@/lib/posts'

interface BlogPostPageProps {
  params: {
    slug: string;
  };
  searchParams: { [key: string]: string | string[] | undefined };
}

export default async function BlogPostPage({ params, searchParams }: BlogPostPageProps) {
  const post = getPostBySlug(params.slug)

  if (!post) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-center text-gray-800">Post not found</h1>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-16">
      <article className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8 text-gray-800">{post.title}</h1>
          <div className="prose lg:prose-xl" dangerouslySetInnerHTML={{ __html: post.content }} />
        </div>
      </article>
    </div>
  )
} 