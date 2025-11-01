'use client';

import Link from 'next/link';

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-r from-green-50 to-emerald-50 py-20 overflow-hidden">
      {/* Background overlay */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-10 left-10 w-72 h-72 bg-green-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>
        <div className="absolute bottom-10 right-10 w-72 h-72 bg-emerald-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Main Heading */}
        <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
          Turn Kitchen Scraps into <br />
          <span className="text-green-600">Garden Gold</span>
        </h1>

        {/* Subheading */}
        <p className="text-xl md:text-2xl text-gray-700 mb-8 max-w-2xl mx-auto leading-relaxed">
          Simple, tested techniques for beginner composters. Learn worm bins, bokashi, and compost
          troubleshooting—explained without the fluff.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Link
            href="#videos"
            className="px-8 py-4 bg-green-600 text-white font-bold rounded-lg hover:bg-green-700 transition transform hover:scale-105 shadow-lg"
          >
            Watch Latest Video
          </Link>
          <Link
            href="/shop"
            className="px-8 py-4 bg-white text-green-600 font-bold rounded-lg border-2 border-green-600 hover:bg-green-50 transition transform hover:scale-105 shadow-lg"
          >
            Shop Gear
          </Link>
        </div>

        {/* Feature Cards under Hero */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          <div className="bg-white rounded-lg p-6 shadow-md border-t-4 border-green-600">
            <div className="text-4xl mb-3">🪱</div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">Worm Bins</h3>
            <p className="text-gray-600">Compact systems for apartments and small spaces</p>
          </div>
          <div className="bg-white rounded-lg p-6 shadow-md border-t-4 border-emerald-600">
            <div className="text-4xl mb-3">🌿</div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">Bokashi</h3>
            <p className="text-gray-600">Ferment scraps faster with proven methods</p>
          </div>
          <div className="bg-white rounded-lg p-6 shadow-md border-t-4 border-lime-600">
            <div className="text-4xl mb-3">🔧</div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">Troubleshooting</h3>
            <p className="text-gray-600">Fix fungus gnats, odors, and other issues</p>
          </div>
        </div>
      </div>
    </section>
  );
}
