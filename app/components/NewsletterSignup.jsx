'use client';

import { useState } from 'react';

export default function NewsletterSignup() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Email submitted:', email);
    setSubmitted(true);
    setEmail('');
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <section className="bg-white py-16">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-green-600 to-emerald-600 rounded-lg p-10 shadow-lg">
          <h2 className="text-3xl font-bold text-white mb-3">Get Monthly Composting Tips</h2>
          <p className="text-green-100 mb-8 text-lg">
            Insider techniques, new troubleshooting guides, and community updates delivered monthly.
          </p>

          {submitted ? (
            <div className="bg-green-100 text-green-800 p-4 rounded-lg font-semibold">
              ✓ Thanks for subscribing! Check your email to confirm.
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="your@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="flex-1 px-6 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
              />
              <button
                type="submit"
                className="px-8 py-3 bg-white text-green-600 font-bold rounded-lg hover:bg-green-50 transition"
              >
                Subscribe
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
