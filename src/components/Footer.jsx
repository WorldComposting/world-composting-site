export default function Footer(){
  return (
    <footer className="mt-12 bg-white border-t">
      <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center">
        <div className="text-sm text-gray-600">© {new Date().getFullYear()} World Composting</div>
        <div className="flex gap-4 mt-3 md:mt-0">
          <a className="text-sm" href="https://youtube.com/@WorldComposting" target="_blank">YouTube</a>
          <a className="text-sm" href="https://www.amazon.com/shop/worldcomposting" target="_blank">Shop</a>
        </div>
      </div>
    </footer>
  )
}
