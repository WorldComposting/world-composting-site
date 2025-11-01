'use client';

import Header from './components/Header';
import Hero from './components/Hero';
import NewsletterSignup from './components/NewsletterSignup';
import VideosSection from './components/VideosSection';
import BlogSection from './components/BlogSection';
import Footer from './components/Footer';

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <NewsletterSignup />
      <VideosSection />
      <BlogSection />
      <Footer />
    </>
  );
}
