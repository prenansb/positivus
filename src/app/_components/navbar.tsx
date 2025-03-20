import Link from 'next/link'
import * as Svg from '@/app/_components/svgs'

const links = [
  { href: '/', label: 'About us' },
  { href: '/services', label: 'Services' },
  { href: '/use-cases', label: 'Use cases' },
  { href: '/pricing', label: 'Pricing' },
  { href: '/blog', label: 'Blog' },
]

export function Navbar() {
  return (
    <header className="mx-auto flex max-w-1240 items-center justify-between pt-60">
      <Link href="/">
        <Svg.Logo className="text-black" />
      </Link>
      <nav className="flex items-center gap-40">
        <ul className="flex items-center gap-40">
          {links.map(link => (
            <li className="text-xl/28" key={link.href}>
              <Link href={link.href}>{link.label}</Link>
            </li>
          ))}
        </ul>

        <Link
          href="#"
          className="border-dark rounded-[14px] border px-35 py-20 text-xl/28"
        >
          Request a quote
        </Link>
      </nav>
    </header>
  )
}
