import './globals.css'

export const metadata = {
  title: 'VyomGarud - Advanced UAV Systems',
  description: 'Precision in Every Flight. Military-grade UAV systems for defense and surveillance.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
