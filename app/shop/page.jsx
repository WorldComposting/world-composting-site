export default function ShopPage(){
  return (
    <main className="max-w-4xl mx-auto p-6">
      <h1 className="text-2xl font-bold">Shop — Recommended Gear</h1>
      <p className="mt-2 text-gray-600">Affiliate links and recommended items.</p>
      <div className="mt-4 grid md:grid-cols-3 gap-4">
        <div className="bg-white rounded shadow p-4">
          <h3 className="font-semibold">Worm Bin Kit</h3>
          <p className="text-sm mt-1">Compact starter kit.</p>
          <a className="mt-3 inline-block underline" href="https://www.amazon.com/shop/worldcomposting" target="_blank">Buy</a>
        </div>
        <div className="bg-white rounded shadow p-4">
          <h3 className="font-semibold">Bokashi Kit</h3>
          <p className="text-sm mt-1">Fermentation starter kit.</p>
          <a className="mt-3 inline-block underline" href="https://www.amazon.com/shop/worldcomposting" target="_blank">Buy</a>
        </div>
        <div className="bg-white rounded shadow p-4">
          <h3 className="font-semibold">pH Meter</h3>
          <p className="text-sm mt-1">Quick soil & compost checks.</p>
          <a className="mt-3 inline-block underline" href="https://www.amazon.com/shop/worldcomposting" target="_blank">Buy</a>
        </div>
      </div>
    </main>
  )
}
