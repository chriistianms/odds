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
      <body className = 'bg-sugar-milk flex flex-col font-manrope gap-4 items-center justify-start min-h-screen text-industrial-black'>
        <Header />
        <main className = 'flex flex-col gap-4 items-center justify-start px-4 w-full'>
          {children}
        </main>
      </body>
    </html>
  )
}
