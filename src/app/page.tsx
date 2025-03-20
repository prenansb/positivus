import { CaseStudies } from './_sections/case-studies'
import { Hero } from './_sections/hero'
import { Services } from './_sections/services'

export default function Home() {
  return (
    <main className="mx-auto max-w-1240">
      <Hero />
      <Services />
      <CaseStudies />
    </main>
  )
}
