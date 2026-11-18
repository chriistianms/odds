import Link from 'next/link'

export default function Header() {
  return (
    <header className = 'flex items-center justify-center p-4 pb-2 relative text-primary'>
      <Link
        className = 'font-bold font-display italic text-4xl text-center'
        href = '/'
      >
        odds
      </Link>

      <div className = 'absolute bg-border bottom-0 h-[2px] left-4 right-4' />
    </header>
  )
}
