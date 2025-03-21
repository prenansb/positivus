import { ContactUs } from '@/app/_sections/contact-us'
import { Team } from '@/app/_sections/team'
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
      <ContactUs />
    </main>
  )
}
