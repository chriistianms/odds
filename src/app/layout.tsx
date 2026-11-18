import './globals.css'
import Header from './components/Header'
import type { Metadata } from 'next'
import { Manrope, Newsreader, Outfit } from 'next/font/google'

const manrope = Manrope({ variable: '--manrope' })
const newsreader = Newsreader({ variable: '--newsreader' })
const outfit = Outfit({ variable: '--outfit' })

const fonts = [manrope, newsreader, outfit]

export const metadata: Metadata = {
  description: 'odds is a random movie and tv show picker that helps you decide what to watch, powered by the tmdb database.',
  title: 'odds'
}

export default function RootLayout({ children }: LayoutProps<'/'>) {
  return (
    <html
      className = {fonts.map((font) => font.variable).join(' ')}
      lang = 'en'
    >
      <body className = 'bg-canvas flex flex-col font-body gap-2 min-h-screen text-ink'>
        <Header />
        <main className = 'flex flex-col gap-2 px-4'>
          {children}
        </main>
      </body>
    </html>
  )
}
