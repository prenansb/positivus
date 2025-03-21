'use client'

import Link from 'next/link'
import { FormEvent, useState } from 'react'
import * as Svg from '@/app/_components/svgs'

const links = [
  { href: '/', label: 'About us' },
  { href: '/', label: 'Services' },
  { href: '/', label: 'Use cases' },
  { href: '/', label: 'Pricing' },
  { href: '/', label: 'Blog' },
]

const socialLinks = [
  { href: 'https://www.linkedin.com/', icon: Svg.LinkedIn },
  { href: 'https://www.facebook.com/', icon: Svg.Facebook },
  { href: 'https://www.twitter.com/', icon: Svg.Twitter },
]

export function Footer() {
  const [email, setEmail] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubscribe = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    await new Promise(resolve => setTimeout(resolve, 1000))

    setEmail('')
    setIsSubmitting(false)
  }

  return (
    <footer>
      <div className="bg-dark mx-auto flex max-w-1240 flex-col rounded-tl-[45px] rounded-tr-[45px] px-60 py-55">
        <div className="flex items-center justify-between">
          <Link href="/">
            <Svg.Logo className="h-29 w-180 text-white" />
          </Link>

          <nav>
            <ul className="flex items-center gap-40">
              {links.map(link => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="hover:text-green text-lg text-white underline transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <ul className="flex items-center gap-20">
            {socialLinks.map(link => (
              <li key={link.href}>
                <a
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-green text-white transition-colors"
                >
                  <link.icon />
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-66 flex items-center justify-between">
          <div>
            <h4 className="bg-green mb-27 w-fit rounded-[7px] px-7 text-xl font-medium">
              Contact us:
            </h4>

            <div className="space-y-20 text-lg text-white">
              <p>Email: info@positivus.com</p>
              <p>Phone: 555-567-8901</p>
              <p>
                Address: 1234 Main St <br /> Moonstone City, Stardust State 12345
              </p>
            </div>
          </div>

          <form
            onSubmit={handleSubscribe}
            className="flex items-center gap-20 rounded-[14px] bg-[#292A32] px-40 py-58"
          >
            <input
              className="rounded-[14px] border border-white py-22 pl-35 text-xl text-white placeholder:text-xl placeholder:text-white"
              type="email"
              placeholder="Email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              required
            />
            <button
              className="bg-green cursor-pointer rounded-[14px] px-35 py-20 text-xl/28 disabled:opacity-30"
              type="submit"
              disabled={isSubmitting}
            >
              Subscribe to news
            </button>
          </form>
        </div>

        <div className="my-50 h-px w-full bg-white" />

        <div className="flex items-center gap-40 text-lg/28 text-white">
          <p>© 2023 Positivus. All Rights Reserved.</p>
          <Link href="#" className="underline">
            Privacy Policy
          </Link>
        </div>
      </div>
    </footer>
  )
}
