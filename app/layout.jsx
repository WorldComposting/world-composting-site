import './globals.css'

export const metadata = {
  title: 'World Composting',
  description: 'Practical composting, worm systems, and bio-based solutions'
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  )
}
