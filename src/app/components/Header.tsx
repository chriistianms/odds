import Image from 'next/image'
import Link from 'next/link'
import brand from '@/public/brand.webp'

export default function Header() {
  return (
    <header className = 'flex flex-col gap-4 items-center justify-center p-4 pb-0 w-full'>
      <Link
        className = 'active:scale-x-115 active:scale-y-85 duration-100 transition-transform'
        href = '/'
      >
        <Image
          alt = 'odds'
          className = 'h-10 w-auto'
          loading = 'eager'
          src = {brand}
        />
      </Link>

      <div className = 'bg-cheese-powder h-[2px] shadow-[0_2px_3px_0_var(--color-cheese-powder)] w-full' />
    </header>
  )
}
