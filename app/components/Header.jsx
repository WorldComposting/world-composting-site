'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-lg">🌱</span>
            </div>
            <Link href="/" className="text-xl font-bold text-gray-900">
              World Composting
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link href="#videos" className="text-gray-700 hover:text-green-600 font-medium transition">
              Videos
            </Link>
            <Link href="#blog" className="text-gray-700 hover:text-green-600 font-medium transition">
              Blog
            </Link>
            <Link href="/shop" className="text-gray-700 hover:text-green-600 font-medium transition">
              Shop
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-green-600 font-medium transition">
              Contact
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden flex flex-col space-y-1"
            onClick={() => setIsOpen(!isOpen)}
          >
            <span className="w-6 h-0.5 bg-gray-900"></span>
            <span className="w-6 h-0.5 bg-gray-900"></span>
            <span className="w-6 h-0.5 bg-gray-900"></span>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <nav className="md:hidden pb-4 space-y-3">
            <Link href="#videos" className="block text-gray-700 hover:text-green-600 font-medium">
              Videos
            </Link>
            <Link href="#blog" className="block text-gray-700 hover:text-green-600 font-medium">
              Blog
            </Link>
            <Link href="/shop" className="block text-gray-700 hover:text-green-600 font-medium">
              Shop
            </Link>
            <Link href="/contact" className="block text-gray-700 hover:text-green-600 font-medium">
              Contact
            </Link>
          </nav>
        )}
      </div>
    </header>
  );
}
