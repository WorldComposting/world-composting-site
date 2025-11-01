'use client';

import Link from 'next/link';

const blogPosts = [
  {
    id: 1,
    title: 'How to Start Worm Composting (Beginner)',
    excerpt: 'Step-by-step setup and troubleshooting for your first vermicompost system.',
    slug: 'how-to-start-worm-composting',
  },
  {
    id: 2,
    title: 'Bokashi in a Soil Factory: Faster Composting',
    excerpt: 'Using bokashi to accelerate nutrient cycling and reduce odors.',
    slug: 'bokashi-soil-factory',
  },
  {
    id: 3,
    title: 'Fungus Gnat Fixes That Actually Work',
    excerpt: 'Targeted fixes and prevention for fungus gnats in indoor systems.',
    slug: 'fungus-gnat-fixes',
  },
];

export default function BlogSection() {
  return (
    <section id="blog" className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-3">Latest Articles</h2>
          <p className="text-lg text-gray-600">
            In-depth guides on composting methods and troubleshooting.
          </p>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <div
              key={post.id}
              className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition"
            >
              {/* Blog Image Placeholder */}
              <div className="h-48 bg-gradient-to-br from-blue-400 to-cyan-600 flex items-center justify-center">
                <span className="text-white text-lg font-bold">Article {post.id}</span>
              </div>

              {/* Blog Info */}
              <div className="p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-3">{post.title}</h3>
                <p className="text-gray-600 mb-4">{post.excerpt}</p>
                <Link
                  href={`/blog/${post.slug}`}
                  className="inline-block text-green-600 font-semibold hover:text-green-700 transition"
                >
                  Read More →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
