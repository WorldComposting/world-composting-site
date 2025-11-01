'use client';

import Link from 'next/link';

const videos = [
  {
    id: 1,
    title: 'Composting Essentials',
    description: 'Discover practical techniques for building healthy compost systems.',
    link: '#',
  },
  {
    id: 2,
    title: 'Worm Bin Setup & Maintenance',
    description: 'Step-by-step guide to setting up and maintaining your first vermicompost system.',
    link: '#',
  },
  {
    id: 3,
    title: 'Bokashi Fermentation Basics',
    description: 'Learn how to ferment kitchen scraps faster with bokashi buckets.',
    link: '#',
  },
];

export default function VideosSection() {
  return (
    <section id="videos" className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-3">Latest Videos</h2>
          <p className="text-lg text-gray-600">Watch practical guides and system updates.</p>
        </div>

        {/* Videos Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {videos.map((video) => (
            <div
              key={video.id}
              className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition transform hover:scale-105"
            >
              {/* Video Thumbnail Placeholder */}
              <div className="relative h-48 bg-gradient-to-br from-green-400 to-emerald-600 overflow-hidden flex items-center justify-center">
                <div className="w-16 h-16 bg-white bg-opacity-30 rounded-full flex items-center justify-center hover:bg-opacity-50 transition">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                  </svg>
                </div>
                <span className="absolute top-3 right-3 bg-red-600 text-white px-3 py-1 rounded text-sm font-bold">
                  Video {video.id}
                </span>
              </div>

              {/* Video Info */}
              <div className="p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-2">{video.title}</h3>
                <p className="text-gray-600 mb-4">{video.description}</p>
                <Link
                  href={video.link}
                  className="inline-block px-6 py-2 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition"
                >
                  Watch Video →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
