'use client'

import Link from 'next/link'
import { getYouTubeVideos } from '../src/lib/youtube'
import Header from '../src/components/Header'
import Footer from '../src/components/Footer'

export default async function Home() {
  const videos = await getYouTubeVideos()
  const VIDEO_ID = 'VWJMROuf2TI' // Hero video
  const AFFILIATE_LINK = 'https://www.amazon.com/shop/worldcomposting'

  const BLOG_POSTS = [
    { id: 1, title: 'How to Start Worm Composting (Beginner)', excerpt: 'Step-by-step setup and troubleshooting for your first vermicompost system.', slug: 'how-to-start-worm-composting' },
    { id: 2, title: 'Bokashi in a Soil Factory: Faster Composting', excerpt: 'Using bokashi to accelerate nutrient cycling and reduce odors.', slug: 'bokashi-soil-factory' },
    { id: 3, title: 'Fungus Gnat Fixes That Actually Work', excerpt: 'Targeted fixes and prevention for fungus gnats in indoor systems.', slug: 'fungus-gnat-fixes' },
  ]

  const VIDEO_LINKS = [
    { id: 1, url: 'https://youtu.be/ozmTdLq7xxQ', title: 'Video 1: Worm Bin Update' },
    { id: 2, url: 'https://youtu.be/ytkoy789B3w', title: 'Video 2: Bokashi in Action' },
    { id: 3, url: 'https://youtu.be/JpsE-eLhB74', title: 'Video 3: Compost Troubleshooting' },
  ]

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      <header className="border-b">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-green-700 flex items-center justify-center text-white text-sm font-bold">WC</div>
            <div>
              <h1 className="font-bold text-lg">World Composting</h1>
              <p className="text-xs text-gray-600">Practical composting, worm systems, and bio-based solutions</p>
            </div>
          </div>
          <nav className="flex gap-6 text-sm">
            <a href="#videos" className="hover:underline">Videos</a>
            <a href="#blog" className="hover:underline">Blog</a>
            <a href="#shop" className="hover:underline">Shop</a>
            <a href="#contact" className="hover:underline">Contact</a>
          </nav>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-6 py-12">
        {/* Hero section */}
        <section className="grid grid-cols-2 gap-8 items-center mb-16">
          <div>
            <h2 className="text-4xl font-bold mb-4">Turn kitchen scraps into garden gold</h2>
            <p className="text-gray-700 mb-6">Simple, tested techniques for beginner composters. Worm bins, bokashi, and compost troubleshooting — explained without the fluff.</p>
            <div className="flex gap-3 mb-8">
              <a href="#videos" className="inline-block bg-green-700 text-white px-6 py-3 rounded-lg font-semibold text-sm">Watch latest video</a>
              <a href="#shop" className="inline-block border border-gray-300 px-6 py-3 rounded-lg text-sm hover:bg-gray-50">Shop recommended gear</a>
            </div>
            <div className="bg-white rounded-lg p-4 border">
              <h3 className="font-semibold text-sm mb-2">Newsletter</h3>
              <p className="text-xs text-gray-600 mb-3">Monthly digest: top tips, new videos, and deals.</p>
              <form className="flex gap-2" onSubmit={(e) => e.preventDefault()}>
                <input placeholder="you@example.com" className="flex-1 px-3 py-2 border rounded text-sm" />
                <button className="bg-gray-800 text-white px-4 py-2 rounded text-sm font-semibold">Subscribe</button>
              </form>
            </div>
          </div>
          <div>
            <div className="bg-gray-200 rounded-lg aspect-video flex items-center justify-center">
              <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <p className="text-xs text-gray-600 mt-2">New videos every 1–2 weeks. Focused on troubleshooting and practical fixes.</p>
          </div>
        </section>

        {/* Videos section */}
        <section id="videos" className="mb-16">
          <h3 className="text-2xl font-bold mb-2">Latest Videos</h3>
          <p className="text-sm text-gray-600 mb-6">Short picks — troubleshooting first.</p>
          <div className="grid grid-cols-3 gap-4">
            {VIDEO_LINKS.map((video) => (
              <a key={video.id} href={video.url} target="_blank" rel="noreferrer" className="bg-white rounded-lg overflow-hidden border hover:shadow-md transition">
                <div className="bg-gray-100 aspect-video flex items-center justify-center text-gray-400 text-sm">Thumbnail {video.id}</div>
                <div className="p-4">
                  <h4 className="font-semibold text-sm">{video.title}</h4>
                  <p className="text-xs text-gray-600 mt-2">Quick description or hook for the video.</p>
                </div>
              </a>
            ))}
          </div>
        </section>

        {/* Blog section */}
        <section id="blog" className="mb-16">
          <h3 className="text-2xl font-bold mb-6">From the Blog</h3>
          <div className="grid grid-cols-3 gap-4">
            {BLOG_POSTS.map((post) => (
              <article key={post.id} className="bg-white rounded-lg p-4 border">
                <h4 className="font-semibold">{post.title}</h4>
                <p className="text-sm text-gray-600 mt-2">{post.excerpt}</p>
                <a href={`/blog/${post.slug}`} className="text-green-700 text-sm font-semibold mt-4 inline-block">Read →</a>
              </article>
            ))}
          </div>
        </section>

        {/* Shop section */}
        <section id="shop" className="mb-16">
          <h3 className="text-2xl font-bold mb-2">Recommended Gear</h3>
          <p className="text-sm text-gray-600 mb-6">Tools and products I actually use (affiliate links).</p>
          <div className="grid grid-cols-3 gap-4">
            <div className="bg-white rounded-lg p-4 border">
              <h4 className="font-semibold">Worm Bin Kit</h4>
              <p className="text-sm text-gray-600 mt-2">Compact, low-odor starter kit for apartment composting.</p>
              <a href={AFFILIATE_LINK} target="_blank" rel="noreferrer" className="text-green-700 text-sm font-semibold mt-4 inline-block">Buy on Amazon</a>
            </div>
            <div className="bg-white rounded-lg p-4 border">
              <h4 className="font-semibold">Bokashi Starter Kit</h4>
              <p className="text-sm text-gray-600 mt-2">Ferment food scraps quickly so they integrate into garden soil faster.</p>
              <a href={AFFILIATE_LINK} target="_blank" rel="noreferrer" className="text-green-700 text-sm font-semibold mt-4 inline-block">Buy on Amazon</a>
            </div>
            <div className="bg-white rounded-lg p-4 border">
              <h4 className="font-semibold">pH & Moisture Meter</h4>
              <p className="text-sm text-gray-600 mt-2">Quick checks to keep systems balanced and healthy.</p>
              <a href={AFFILIATE_LINK} target="_blank" rel="noreferrer" className="text-green-700 text-sm font-semibold mt-4 inline-block">Buy on Amazon</a>
            </div>
          </div>
        </section>

        {/* Contact section */}
        <section id="contact" className="mb-16">
          <h3 className="text-2xl font-bold mb-2">Contact & Work With Me</h3>
          <p className="text-sm text-gray-600 mb-6">Interested in sponsorships, product reviews, or collaborations? Drop a line.</p>
          <form className="max-w-2xl" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-2 gap-4 mb-4">
              <input placeholder="Your name" className="px-4 py-2 border rounded text-sm" />
              <input placeholder="Your email" className="px-4 py-2 border rounded text-sm" />
            </div>
            <textarea placeholder="Message" className="w-full px-4 py-2 border rounded text-sm mb-4 h-32" />
            <button className="w-full bg-green-700 text-white px-4 py-3 rounded font-semibold text-sm">Send message</button>
          </form>
        </section>
      </main>

      <footer className="bg-white border-t mt-16">
        <div className="max-w-7xl mx-auto px-6 py-8 flex items-center justify-between">
          <p className="text-xs text-gray-600">© {new Date().getFullYear()} World Composting — Practical composting & soil care</p>
          <div className="flex gap-6 text-xs">
            <a href="https://youtube.com/@WorldComposting" className="hover:underline">YouTube</a>
            <a href="https://www.instagram.com/worldcomposting/" className="hover:underline">Instagram</a>
            <a href="/rss.xml" className="hover:underline">RSS</a>
          </div>
        </div>
      </footer>
    </div>
  )
}
