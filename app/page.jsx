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
    <div className="min-h-screen bg-gray-50 text-gray-900 antialiased">
      <header className="max-w-7xl mx-auto px-6 py-6 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-full bg-green-700 flex items-center justify-center text-white font-bold">WC</div>
          <div>
            <h1 className="text-lg font-semibold">World Composting</h1>
            <p className="text-sm text-gray-600">Practical composting, worm systems, and bio-based solutions</p>
          </div>
        </div>
        <nav className="flex items-center gap-4">
          <a className="text-sm hover:underline" href="#videos">Videos</a>
          <a className="text-sm hover:underline" href="#blog">Blog</a>
          <a className="text-sm hover:underline" href="#shop">Shop</a>
          <a className="text-sm hover:underline" href="#contact">Contact</a>
        </nav>
      </header>

      <main className="max-w-6xl mx-auto px-6">
        {/* Hero */}
        <section className="grid md:grid-cols-2 gap-8 items-center py-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-extrabold">Turn kitchen scraps into garden gold</h2>
            <p className="mt-4 text-lg text-gray-700">Simple, tested techniques for beginner composters. Worm bins, bokashi, and compost troubleshooting — explained without the fluff.</p>
            <div className="mt-6 flex gap-3">
              <a href="#videos" className="inline-block rounded-xl px-5 py-3 bg-green-700 text-white font-semibold">Watch latest video</a>
              <a href="#shop" className="inline-block rounded-xl px-5 py-3 border border-gray-300 text-sm">Shop recommended gear</a>
            </div>

            <div className="mt-8 bg-white rounded-lg p-4 shadow-sm">
              <h3 className="text-sm font-semibold">Newsletter</h3>
              <p className="text-sm text-gray-600">Monthly digest: top tips, new videos, and deals.</p>
              <form className="mt-3 flex gap-2" onSubmit={(e) => e.preventDefault()}>
                <input aria-label="email" placeholder="you@example.com" className="flex-1 px-3 py-2 border rounded-md" />
                <button className="px-4 py-2 rounded-md bg-gray-800 text-white">Subscribe</button>
              </form>
            </div>
          </div>

          <div>
            <div className="aspect-video rounded-lg overflow-hidden shadow">
              <iframe
                title="Latest World Composting video"
                width="100%"
                height="100%"
                src={`https://www.youtube.com/embed/${VIDEO_ID}`}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
            <p className="text-sm text-gray-500 mt-2">New videos every 1–2 weeks. Focused on troubleshooting and practical fixes.</p>
          </div>
        </section>

        {/* Videos section */}
        <section id="videos" className="py-8">
          <h3 className="text-2xl font-bold">Latest Videos</h3>
          <p className="text-sm text-gray-600">Short picks — troubleshooting first.</p>

          <div className="mt-4 grid md:grid-cols-3 gap-4">
            {VIDEO_LINKS.map((video) => (
              <a key={video.id} className="block bg-white rounded-lg shadow overflow-hidden" href={video.url} target="_blank" rel="noreferrer">
                <div className="aspect-video bg-gray-100 flex items-center justify-center">Thumbnail {video.id}</div>
                <div className="p-3">
                  <h4 className="text-sm font-semibold">{video.title}</h4>
                  <p className="text-xs text-gray-600 mt-1">Quick description or hook for the video.</p>
                </div>
              </a>
            ))}
          </div>
        </section>

        {/* Blog */}
        <section id="blog" className="py-8">
          <h3 className="text-2xl font-bold">From the Blog</h3>
          <div className="mt-4 grid md:grid-cols-3 gap-4">
            {BLOG_POSTS.map((post) => (
              <article key={post.id} className="bg-white rounded-lg p-4 shadow-sm">
                <h4 className="font-semibold text-lg">{post.title}</h4>
                <p className="text-sm text-gray-600 mt-2">{post.excerpt}</p>
                <a className="mt-3 inline-block text-sm text-green-700" href={`/blog/${post.slug}`}>Read →</a>
              </article>
            ))}
          </div>
        </section>

        {/* Shop / Affiliate */}
        <section id="shop" className="py-8">
          <h3 className="text-2xl font-bold">Recommended Gear</h3>
          <p className="text-sm text-gray-600">Tools and products I actually use (affiliate links).</p>
          <div className="mt-4 grid md:grid-cols-3 gap-4">
            <div className="bg-white rounded-lg p-4 shadow-sm">
              <h4 className="font-semibold">Worm Bin Kit</h4>
              <p className="text-sm text-gray-600 mt-1">Compact, low-odor starter kit for apartment composting.</p>
              <a className="mt-3 inline-block text-sm underline" href={AFFILIATE_LINK} target="_blank" rel="noreferrer">Buy on Amazon</a>
            </div>
            <div className="bg-white rounded-lg p-4 shadow-sm">
              <h4 className="font-semibold">Bokashi Starter Kit</h4>
              <p className="text-sm text-gray-600 mt-1">Ferment food scraps quickly so they integrate into garden soil faster.</p>
              <a className="mt-3 inline-block text-sm underline" href={AFFILIATE_LINK} target="_blank" rel="noreferrer">Buy on Amazon</a>
            </div>
            <div className="bg-white rounded-lg p-4 shadow-sm">
              <h4 className="font-semibold">pH & Moisture Meter</h4>
              <p className="text-sm text-gray-600 mt-1">Quick checks to keep systems balanced and healthy.</p>
              <a className="mt-3 inline-block text-sm underline" href={AFFILIATE_LINK} target="_blank" rel="noreferrer">Buy on Amazon</a>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="py-8">
          <h3 className="text-2xl font-bold">Contact & Work With Me</h3>
          <p className="text-sm text-gray-600">Interested in sponsorships, product reviews, or collaborations? Drop a line.</p>
          <form className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4" onSubmit={(e) => e.preventDefault()}>
            <input placeholder="Your name" className="px-3 py-2 border rounded-md" />
            <input placeholder="Your email" className="px-3 py-2 border rounded-md" />
            <textarea placeholder="Message" className="md:col-span-2 px-3 py-2 border rounded-md h-28" />
            <button className="md:col-span-2 px-4 py-2 rounded-md bg-green-700 text-white">Send message</button>
          </form>
        </section>
      </main>

      <footer className="mt-12 bg-white border-t">
        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center">
          <div className="text-sm text-gray-600">© {new Date().getFullYear()} World Composting — Practical composting & soil care</div>
          <div className="flex gap-4 mt-3 md:mt-0">
            <a className="text-sm hover:underline" href="https://youtube.com/@WorldComposting">YouTube</a>
            <a className="text-sm hover:underline" href="https://www.instagram.com/worldcomposting/">Instagram</a>
            <a className="text-sm hover:underline" href="/rss.xml">RSS</a>
          </div>
        </div>
      </footer>
    </div>
  )
}
