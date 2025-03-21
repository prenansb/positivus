import Link from 'next/link'
import * as Svg from './svgs'

export function CaseStudies() {
  return (
    <section className="py-140">
      <div className="mb-80 flex items-center gap-40">
        <h2 className="bg-green w-fit rounded-[7px] px-7 text-[40px] font-medium">
          Case Studies
        </h2>
        <p className="text-lg">
          Explore Real-Life Examples of Our Proven Digital Marketing <br /> Success
          through Our Case Studies
        </p>
      </div>

      <div className="bg-dark flex w-full items-center gap-64 rounded-[45px] px-60 py-70">
        <div>
          <p className="mb-20 max-w-[286px] text-lg leading-[125%] text-white">
            For a local restaurant, we implemented a targeted PPC campaign that resulted
            in a 50% increase in website traffic and a 25% increase in sales.
          </p>

          <Link href="#" className="text-green flex items-center gap-15 text-xl/28">
            Learn more
            <Svg.Arrow className="text-green" />
          </Link>
        </div>

        <div className="h-186 w-px bg-white" />

        <div>
          <p className="mb-20 max-w-[286px] text-lg leading-[125%] text-white">
            For a B2B software company, we developed an SEO strategy that resulted in a
            first page ranking for key keywords and a 200% increase in organic traffic.
          </p>

          <Link href="#" className="text-green flex items-center gap-15 text-xl/28">
            Learn more
            <Svg.Arrow className="text-green" />
          </Link>
        </div>

        <div className="h-186 w-px bg-white" />

        <div>
          <p className="mb-20 max-w-[286px] text-lg leading-[125%] text-white">
            For a national retail chain, we created a social media marketing campaign that
            increased followers by 25% and generated a 20% increase in online sales.
          </p>

          <Link href="#" className="text-green flex items-center gap-15 text-xl/28">
            Learn more
            <Svg.Arrow className="text-green" />
          </Link>
        </div>
      </div>
    </section>
  )
}
