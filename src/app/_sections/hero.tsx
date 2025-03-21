import Image from 'next/image'
import Link from 'next/link'
import * as Img from './images'

const logos = [Img.Amazon, Img.Dribble, Img.Hubspot, Img.Notion, Img.Netflix, Img.Zoom]

export function Hero() {
  return (
    <section className="pt-70">
      <div className="flex justify-between">
        <div className="space-y-35">
          <h1 className="max-w-[531px] text-[60px] leading-[128%] font-medium">
            Navigating the digital landscape for success
          </h1>
          <p className="max-w-[498px] text-xl/28">
            Our digital marketing agency helps businesses grow and succeed online through
            a range of services including SEO, PPC, social media marketing, and content
            creation.
          </p>

          <Link
            className="bg-dark inline-block rounded-[14px] px-35 py-20 text-center text-xl/28 text-white transition-all hover:bg-white hover:text-black hover:shadow-[0_0_0_1px_rgb(0,0,0)]"
            href="#"
          >
            Book a consultation
          </Link>
        </div>

        <div>
          <Image src={Img.Hero} alt="Hero" width={600} height={515} />
        </div>
      </div>

      <ul className="mt-70 flex items-center justify-between">
        {logos.map(logo => (
          <li className="grayscale" key={logo.src}>
            <Image src={logo} alt="company logo" height={48} />
          </li>
        ))}
      </ul>
    </section>
  )
}
