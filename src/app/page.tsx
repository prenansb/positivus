import { ContactUs } from '@/app/_sections/contact-us'
import { Team } from '@/app/_sections/team'
import { Testimonials } from '@/app/_sections/testimonials'
import { CaseStudies } from './_sections/case-studies'
import { Hero } from './_sections/hero'
import { OurWorkingProcess } from './_sections/our-working-process'
import { Services } from './_sections/services'

export default function Home() {
  return (
    <main className="mx-auto max-w-1240">
      <Hero />
      <Services />
      <CaseStudies />
      <OurWorkingProcess />
      <Team />
      <Testimonials />
      <ContactUs />
    </main>
  )
}
