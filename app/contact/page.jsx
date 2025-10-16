'use client'
import { useState } from 'react'

export default function ContactPage(){
  const [status, setStatus] = useState('')
  async function onSubmit(e){
    e.preventDefault()
    const f = new FormData(e.target)
    const body = { name: f.get('name'), email: f.get('email'), message: f.get('message') }
    setStatus('sending')
    const res = await fetch('/api/contact', { method:'POST', body: JSON.stringify(body), headers:{'content-type':'application/json'} })
    if(res.ok){ setStatus('sent') } else { setStatus('error') }
  }
  return (
    <main className="max-w-3xl mx-auto p-6">
      <h1 className="text-2xl font-bold">Contact</h1>
      <form onSubmit={onSubmit} className="mt-4 grid gap-3">
        <input name="name" placeholder="Your name" className="px-3 py-2 border rounded" required />
        <input name="email" type="email" placeholder="you@example.com" className="px-3 py-2 border rounded" required />
        <textarea name="message" placeholder="Message" className="px-3 py-2 border rounded h-32" required />
        <button className="px-4 py-2 bg-green-700 text-white rounded">Send</button>
        {status === 'sending' && <p>Sending…</p>}
        {status === 'sent' && <p>Message sent — check your email.</p>}
        {status === 'error' && <p className="text-red-600">Error sending message.</p>}
      </form>
    </main>
  )
}
