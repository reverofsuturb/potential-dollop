import './globals.css'
import Header from './Header'



export const metadata = {
  title: 'potential-dollop messenger',
  description: 'a messenger application',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
      <Header />{children}</body>
    </html>
  )
}
