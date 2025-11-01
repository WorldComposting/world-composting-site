'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function Home() {
  const [email, setEmail] = useState('')
  const [emailSubmitted, setEmailSubmitted] = useState(false)

  const handleNewsletterSubmit = (e) => {
    e.preventDefault()
    if (email) {
      setEmailSubmitted(true)
      setEmail('')
      setTimeout(() => setEmailSubmitted(false), 3000)
    }
  }

  const AFFILIATE_LINK = 'https://www.amazon.com/shop/worldcomposting'

  const BLOG_POSTS = [
    {
      id: 1,
      title: 'How to Start Worm Composting (Beginner)',
      excerpt: 'Step-by-step setup and troubleshooting for your first vermicompost system.',
      slug: 'how-to-start-worm-composting'
    },
    {
      id: 2,
      title: 'Bokashi in a Soil Factory: Faster Composting',
      excerpt: 'Using bokashi to accelerate nutrient cycling and reduce odors.',
      slug: 'bokashi-soil-factory'
    },
    {
      id: 3,
      title: 'Fungus Gnat Fixes That Actually Work',
      excerpt: 'Targeted fixes and prevention for fungus gnats in indoor systems.',
      slug: 'fungus-gnat-fixes'
    }
  ]

  const FEATURED_PRODUCTS = [
    {
      id: 1,
      name: 'Worm Bin Starter Kit',
      description: 'Low-odor system perfect for beginners',
      image: 'https://via.placeholder.com/300x200?text=Worm+Bin+Kit'
    },
    {
      id: 2,
      name: 'Bokashi Bucket',
      description: 'Ferment food scraps in 2 weeks',
      image: 'https://via.placeholder.com/300x200?text=Bokashi+Bucket'
    },
    {
      id: 3,
      name: 'Compost Thermometer',
      description: 'Monitor your pile temperature accurately',
      image: 'https://via.placeholder.com/300x200?text=Thermometer'
    }
  ]

  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-green-600 to-emerald-700 flex items-center justify-center text-white font-bold text-lg shadow-md">
              🌱
            </div>
            <div>
              <h1 className="font-bold text-xl text-gray-900">World Composting</h1>
              <p className="text-xs text-gray-500">Sustainable solutions for your soil</p>
            </div>
          </div>

          <nav className="hidden md:flex gap-8 text-sm font-medium">
            <Link href="/#videos" className="text-gray-700 hover:text-green-600 transition">Videos</Link>
            <Link href="/#blog" className="text-gray-700 hover:text-green-600 transition">Blog</Link>
            <Link href="/shop" className="text-gray-700 hover:text-green-600 transition">Shop</Link>
            <Link href="/contact" className="text-gray-700 hover:text-green-600 transition">Contact</Link>
          </nav>

          <button className="md:hidden text-gray-700">☰</button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-green-50 to-emerald-50 py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                Turn Kitchen Scraps into <span className="text-green-600">Garden Gold</span>
              </h2>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                Simple, tested techniques for beginner composters. Learn worm bins, bokashi, and compost troubleshooting—explained without the fluff.
              </p>
              <div className="flex gap-4">
                <button className="px-8 py-3 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition shadow-md">
                  Watch Latest Video
                </button>
                <Link href="/shop" className="px-8 py-3 border-2 border-green-600 text-green-600 font-semibold rounded-lg hover:bg-green-50 transition">
                  Shop Gear
                </Link>
              </div>
            </div>

            <div className="flex justify-center">
              <img 
                src="https://via.placeholder.com/400x300?text=Compost+Bins" 
                alt="Compost bins and worm systems"
                className="rounded-xl shadow-lg object-cover w-full max-w-md h-80"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="bg-white py-12 border-b border-gray-200">
        <div className="max-w-2xl mx-auto px-6">
          <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-8 shadow-sm border border-green-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Get Monthly Composting Tips</h3>
            <p className="text-gray-600 mb-6">Insider techniques, new troubleshooting guides, and community updates delivered monthly.</p>
            <form onSubmit={handleNewsletterSubmit} className="flex gap-3">
              <input
                type="email"
                placeholder="your@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
                required
              />
              <button 
                type="submit"
                className="px-6 py-3 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition whitespace-nowrap"
              >
                Subscribe
              </button>
            </form>
            {emailSubmitted && (
              <p className="text-green-600 text-sm mt-4">✓ Thanks! Check your inbox for confirmation.</p>
            )}
          </div>
        </div>
      </section>

      {/* Latest Videos Section */}
      <section id="videos" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Latest Videos</h2>
          <p className="text-gray-600 mb-10">Watch practical guides and system updates.</p>
          
          <div className="grid md:grid-cols-3 gap-6">
            {[1, 2, 3].map((item) => (
              <div key={item} className="rounded-lg overflow-hidden border border-gray-200 hover:shadow-lg transition">
                <img 
                  src={`https://via.placeholder.com/400x225?text=Video+${item}`}
                  alt={`Video ${item}`}
                  className="w-full h-48 object-cover bg-gray-300"
                />
                <div className="p-4">
                  <h3 className="font-semibold text-gray-900 mb-2">Video {item}: Composting Essentials</h3>
                  <p className="text-sm text-gray-600 mb-4">Discover practical techniques for building healthy compost systems.</p>
                  <button className="w-full py-2 bg-green-50 text-green-600 font-semibold rounded hover:bg-green-100 transition">
                    Watch Video
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Highlights Section */}
      <section id="blog" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Latest Articles</h2>
          <p className="text-gray-600 mb-10">In-depth guides on composting methods and troubleshooting.</p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {BLOG_POSTS.map((post) => (
              <article key={post.id} className="bg-white rounded-lg overflow-hidden border border-gray-200 hover:shadow-lg transition">
                <img 
                  src={`https://via.placeholder.com/400x200?text=${post.title.slice(0, 10)}`}
                  alt={post.title}
                  className="w-full h-40 object-cover bg-gray-300"
                />
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{post.title}</h3>
                  <p className="text-gray-600 text-sm mb-4">{post.excerpt}</p>
                  <Link href={`/blog/${post.slug}`} className="text-green-600 font-semibold text-sm hover:text-green-700">
                    Read More →
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Recommended Gear Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Recommended Gear</h2>
          <p className="text-gray-600 mb-10">Carefully selected products to start your composting journey.</p>
          
          <div className="grid md:grid-cols-3 gap-6 mb-6">
            {FEATURED_PRODUCTS.map((product) => (
              <div key={product.id} className="bg-white rounded-lg border border-gray-200 overflow-hidden hover:shadow-lg transition">
                <img 
                  src={product.image}
                  alt={product.name}
                  className="w-full h-48 object-cover bg-gray-300"
                />
                <div className="p-6">
                  <h3 className="font-semibold text-gray-900 mb-1">{product.name}</h3>
                  <p className="text-sm text-gray-600 mb-4">{product.description}</p>
                  <a 
                    href={AFFILIATE_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full block py-2 bg-green-600 text-white text-center font-semibold rounded hover:bg-green-700 transition"
                  >
                    View on Amazon
                  </a>
                </div>
              </div>
            ))}
          </div>
          
          <p className="text-xs text-gray-500 text-center">
            💡 <em>As an Amazon Associate, we earn from qualifying purchases. Your support helps us create free composting guides!</em>
          </p>
        </div>
      </section>

      {/* Contact/Collaboration Section */}
      <section className="py-16 bg-gray-50 border-t border-gray-200">
        <div className="max-w-2xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Collaborate With Us</h2>
          <p className="text-gray-600 mb-8">Interested in sponsorships, product reviews, or partnerships? We'd love to hear from you.</p>
          
          <div className="bg-white rounded-lg border border-gray-200 p-8">
            <Link href="/contact" className="inline-block px-6 py-3 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition">
              Send us a Message
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-100 py-12 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            {/* Brand */}
            <div>
              <h3 className="font-bold text-lg mb-4">World Composting</h3>
              <p className="text-gray-400 text-sm">Practical composting, worm systems, and bio-based solutions for a sustainable future.</p>
            </div>

            {/* Navigation Links */}
            <div>
              <h4 className="font-semibold mb-4 text-white">Navigation</h4>
              <ul className="space-y-2 text-sm">
                <li><Link href="/#videos" className="text-gray-400 hover:text-white transition">Videos</Link></li>
                <li><Link href="/#blog" className="text-gray-400 hover:text-white transition">Blog</Link></li>
                <li><Link href="/shop" className="text-gray-400 hover:text-white transition">Shop</Link></li>
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h4 className="font-semibold mb-4 text-white">Resources</h4>
              <ul className="space-y-2 text-sm">
                <li><Link href="/contact" className="text-gray-400 hover:text-white transition">Contact</Link></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition">Privacy Policy</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition">Terms</a></li>
              </ul>
            </div>

            {/* Social/RSS */}
            <div>
              <h4 className="font-semibold mb-4 text-white">Follow</h4>
              <ul className="space-y-
