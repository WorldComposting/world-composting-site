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

  return (
    <>
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-green-600 flex items-center justify-center text-white font-bold text-lg">🌱</div>
            <div>
              <h1 className="font-bold text-xl">World Composting</h1>
              <p className="text-xs text-gray-500">Sustainable solutions for your soil</p>
            </div>
          </div>
          <nav className="hidden md:flex gap-8 text-sm font-medium">
            <Link href="/#videos" className="text-gray-700 hover:text-green-600">Videos</Link>
            <Link href="/#blog" className="text-gray-700 hover:text-green-600">Blog</Link>
            <Link href="/shop" className="text-gray-700 hover:text-green-600">Shop</Link>
            <Link href="/contact" className="text-gray-700 hover:text-green-600">Contact</Link>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-50 to-emerald-50 py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Turn Kitchen Scraps into <span className="text-green-600">Garden Gold</span></h2>
              <p className="text-lg text-gray-700 mb-8">Simple, tested techniques for beginner composters.</p>
              <div className="flex gap-4">
                <button className="px-8 py-3 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700">Watch Video</button>
                <Link href="/shop" className="px-8 py-3 border-2 border-green-600 text-green-600 font-semibold rounded-lg hover:bg-green-50">Shop Gear</Link>
              </div>
            </div>
            <div className="flex justify-center">
              <img src="https://via.placeholder.com/400x300?text=Compost+Bins" alt="Compost" className="rounded-xl shadow-lg w-full max-w-md" />
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="bg-white py-12 border-b border-gray-200">
        <div className="max-w-2xl mx-auto px-6">
          <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-8">
            <h3 className="text-2xl font-bold mb-2">Get Composting Tips</h3>
            <p className="text-gray-600 mb-6">Monthly insider techniques and guides.</p>
            <form onSubmit={handleNewsletterSubmit} className="flex gap-3">
              <input type="email" placeholder="your@email.com" value={email} onChange={(e) => setEmail(e.target.value)} className="flex-1 px-4 py-3 rounded-lg border border-gray-300" required />
              <button type="submit" className="px-6 py-3 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700">Subscribe</button>
            </form>
            {emailSubmitted && <p className="text-green-600 text-sm mt-4">✓ Confirmed!</p>}
          </div>
        </div>
      </section>

      {/* Videos */}
      <section id="videos" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-10">Latest Videos</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => (
              <div key={i} className="rounded-lg border border-gray-200 overflow-hidden">
                <img src={`https://via.placeholder.com/400x225?text=Video+${i}`} alt="Video" className="w-full h-48 bg-gray-300" />
                <div className="p-4">
                  <h3 className="font-semibold mb-2">Video {i}: Composting</h3>
                  <p className="text-sm text-gray-600 mb-4">Practical techniques for healthy systems.</p>
                  <button className="w-full py-2 bg-green-50 text-green-600 font-semibold rounded hover:bg-green-100">Watch</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Blog */}
      <section id="blog" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-10">Latest Articles</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {['Worm Composting', 'Bokashi Systems', 'Gnat Prevention'].map((title, i) => (
              <article key={i} className="bg-white rounded-lg border border-gray-200 overflow-hidden">
                <img src={`https://via.placeholder.com/400x200?text=${title}`} alt="Article" className="w-full h-40 bg-gray-300" />
                <div className="p-6">
                  <h3 className="text-lg font-semibold mb-2">{title}</h3>
                  <p className="text-gray-600 text-sm mb-4">Expert guide on {title.toLowerCase()}.</p>
                  <Link href="#" className="text-green-600 font-semibold text-sm">Read More →</Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Products */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-10">Recommended Gear</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {['Worm Bin Kit', 'Bokashi Bucket', 'Thermometer'].map((name, i) => (
              <div key={i} className="bg-white rounded-lg border border-gray-200 overflow-hidden">
                <img src={`https://via.placeholder.com/300x200?text=${name}`} alt={name} className="w-full h-48 bg-gray-300" />
                <div className="p-6">
                  <h3 className="font-semibold mb-4">{name}</h3>
                  <a href="#" target="_blank" className="w-full block py-2 bg-green-600 text-white text-center font-semibold rounded hover:bg-green-700">View</a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-16 bg-gray-50 border-t border-gray-200">
        <div className="max-w-2xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-4">Collaborate With Us</h2>
          <p className="text-gray-600 mb-8">Interested in sponsorships or partnerships?</p>
          <Link href="/contact" className="inline-block px-6 py-3 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700">Send Message</Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-100 py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="font-bold text-lg mb-4">World Composting</h3>
              <p className="text-gray-400 text-sm">Practical composting solutions for sustainable living.</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Navigation</h4>
              <ul className="space-y-2 text-sm"><li><Link href="/#videos" className="text-gray-400 hover:text-white">Videos</Link></li><li><Link href="/#blog" className="text-gray-400 hover:text-white">Blog</Link></li><li><Link href="/shop" className="text-gray-400 hover:text-white">Shop</Link></li></ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Resources</h4>
              <ul className="space-y-2 text-sm"><li><Link href="/contact" className="text-gray-400 hover:text-white">Contact</Link></li><li><a href="#" className="text-gray-400 hover:text-white">Privacy</a></li><li><a href="#" className="text-gray-400 hover:text-white">Terms</a></li></ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Follow</h4>
              <ul className="space-y-2 text-sm"><li><a href="#" className="text-gray-400 hover:text-white">Twitter</a></li><li><a href="#" className="text-gray-400 hover:text-white">YouTube</a></li><li><a href="#" className="text-gray-400 hover:text-white">RSS</a></li></ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-gray-400 text-sm">© 2025 World Composting. All rights reserved.</div>
        </div>
      </footer>
    </>
  )
}
