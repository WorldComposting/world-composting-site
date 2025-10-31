'use client'

import Link from 'next/link'
import { getYouTubeVideos } from '../src/lib/youtube'
import Header from '../src/components/Header'
import Footer from '../src/components/Footer'

export default async function Home() {
  const videos = await getYouTubeVideos()
  return (
    <>
      <Header />
      <main className="max-w-6xl mx-auto px-6 py-12">
        <section className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="text-5xl font-bold">World Composting</h1>
            <p className="mt-4 text-gray-700">Practical composting, worm systems, and bio-based solutions.</p>
            <p className="mt-2 text-gray-600 text-sm">Learn sustainable gardening and waste management techniques.</p>
            <div className="mt-4">
              <Link href="#videos" className="px-4 py-2 bg-green-700 text-white rounded">Latest videos</Link>
            </div>
          </div>
          <div>
            <div className="aspect-video bg-gray-100 rounded overflow-hidden shadow">
              <iframe title="Hero video" width="100%" height="100%" src="https://www.youtube.com/embed/W9JR8uF2fT" allowFullScreen />
            </div>
          </div>
        </section>

        <section id="videos" className="mt-12">
          <h2 className="text-2xl font-semibold">Latest Videos</h2>
          <div className="grid md:grid-cols-3 gap-4 mt-4">
            {videos && videos.map((v)=>(
              <a key={v.id.videoId} className="block bg-white rounded shadow" href={`https://youtube.com/watch?v=${v.id.videoId}`} target="_blank" rel="noopener">
                <div className="p-3">
                  <h3 className="font-semibold">{v.snippet.title}</h3>
                  <p className="text-sm text-gray-600 mt-1">{v.snippet.description.slice(0,120)}</p>
                </div>
              </a>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
