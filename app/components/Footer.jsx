'use client';

import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-lg">🌱</span>
              </div>
              <h3 className="text-xl font-bold text-white">World Composting</h3>
            </div>
            <p className="text-sm text-gray-400">
              Practical composting, worm systems, and bio-based solutions for a sustainable future.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-lg font-bold text-white mb-4">Navigation</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#videos" className="hover:text-green-400 transition">
                  Videos
                </Link>
              </li>
              <li>
                <Link href="#blog" className="hover:text-green-400 transition">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/shop" className="hover:text-green-400 transition">
                  Shop
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-green-400 transition">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-lg font-bold text-white mb-4">Resources</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#" className="hover:text-green-400 transition">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-green-400 transition">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-green-400 transition">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-lg font-bold text-white mb-4">Follow</h4>
            <div className="flex space-x-4">
              <Link href="#" className="hover:text-green-400 transition">Twitter</Link>
              <Link href="#" className="hover:text-green-400 transition">YouTube</Link>
              <Link href="#" className="hover:text-green-400 transition">RSS</Link>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 pt-8">
          <div className="text-center text-sm text-gray-400">
            <p>© 2025 World Composting. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
