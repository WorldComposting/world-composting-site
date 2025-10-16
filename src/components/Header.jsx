import Link from 'next/link'

export default function Header(){
  return (
    <header className="bg-white border-b">
      <div className="max-w-7xl mx-auto px-6 py-6 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-full bg-green-700 flex items-center justify-center text-white font-bold">WC</div>
          <div>
            <h1 className="text-lg font-semibold">World Composting</h1>
            <p className="text-sm text-gray-600">Practical composting & soil care</p>
          </div>
        </div>
        <nav className="flex items-center gap-4">
          <Link href="#videos">Videos</Link>
          <Link href="/blog">Blog</Link>
          <Link href="/shop">Shop</Link>
          <Link href="/contact">Contact</Link>
        </nav>
      </div>
    </header>
  )
}
