import Image from 'next/image'
import Link from 'next/link'
import * as Img from '@/app/_sections/images'
import * as Svg from '@/app/_sections/svgs'

export function Services() {
  return (
    <section className="pt-140">
      <div className="mb-80 flex items-center gap-40">
        <h2 className="bg-green w-fit rounded-[7px] px-7 text-[40px] font-medium">
          Services
        </h2>
        <p>
          At our digital marketing agency, we offer a range of services to <br /> help
          businesses grow and succeed online. These services include:
        </p>
      </div>

      <ul className="grid grid-cols-2 grid-rows-3 gap-40">
        <li className="flex items-center justify-between rounded-[45px] border border-black bg-[#F3F3F3] p-50 shadow-[0px_5px_0px_0px_#191A23]">
          <div className="flex h-full flex-col items-start justify-between">
            <h3>
              <span className="bg-green block w-fit rounded-[7px] px-7 text-3xl font-medium">
                Search engine
              </span>
              <span className="bg-green rounded-[7px] px-7 text-3xl font-medium">
                optimization
              </span>
            </h3>

            <Link href="#" className="flex items-center gap-15 text-xl/28">
              <div className="bg-dark flex h-41 w-41 items-center justify-center rounded-full">
                <Svg.Arrow className="text-green" />
              </div>
              Learn more
            </Link>
          </div>

          <Image src={Img.Seo} alt="SEO" width={210} height={166} />
        </li>

        <li className="bg-green flex items-center justify-between rounded-[45px] border border-black p-50 shadow-[0px_5px_0px_0px_#191A23]">
          <div className="flex flex-col items-start justify-between">
            <h3>
              <span className="block w-fit rounded-[7px] bg-white px-7 text-3xl font-medium">
                Pay-per-click
              </span>
              <span className="rounded-[7px] bg-white px-7 text-3xl font-medium">
                advertising
              </span>
            </h3>

            <Link href="#" className="flex items-center gap-15 text-xl/28">
              <div className="bg-dark flex h-41 w-41 items-center justify-center rounded-full">
                <Svg.Arrow className="text-green" />
              </div>
              Learn more
            </Link>
          </div>

          <Image src={Img.PayPerClick} alt="Pay-per-click" width={210} height={166} />
        </li>

        <li className="bg-dark flex items-center justify-between rounded-[45px] border border-black p-50 shadow-[0px_5px_0px_0px_#191A23]">
          <div className="flex flex-col items-start justify-between">
            <h3>
              <span className="block w-fit rounded-[7px] bg-white px-7 text-3xl font-medium">
                Social Media
              </span>
              <span className="rounded-[7px] bg-white px-7 text-3xl font-medium">
                Marketing
              </span>
            </h3>

            <Link href="#" className="flex items-center gap-15 text-xl/28 text-white">
              <div className="flex h-41 w-41 items-center justify-center rounded-full bg-white">
                <Svg.Arrow className="text-dark" />
              </div>
              Learn more
            </Link>
          </div>

          <Image src={Img.SocialMedia} alt="Social Media" width={210} height={166} />
        </li>

        <li className="flex items-center justify-between rounded-[45px] border border-black bg-[#F3F3F3] p-50 shadow-[0px_5px_0px_0px_#191A23]">
          <div className="flex flex-col items-start justify-between">
            <h3>
              <span className="bg-green block w-fit rounded-[7px] px-7 text-3xl font-medium">
                Email
              </span>
              <span className="bg-green rounded-[7px] px-7 text-3xl font-medium">
                Marketing
              </span>
            </h3>

            <Link href="#" className="flex items-center gap-15 text-xl/28 text-white">
              <div className="bg-dark flex h-41 w-41 items-center justify-center rounded-full">
                <Svg.Arrow className="text-green" />
              </div>
              Learn more
            </Link>
          </div>

          <Image src={Img.EmailMarketing} alt="SEO" width={210} height={166} />
        </li>
        <li className="bg-green flex items-center justify-between rounded-[45px] border border-black p-50 shadow-[0px_5px_0px_0px_#191A23]">
          <div className="flex flex-col items-start justify-between">
            <h3>
              <span className="block w-fit rounded-[7px] bg-white px-7 text-3xl font-medium">
                Content
              </span>
              <span className="rounded-[7px] bg-white px-7 text-3xl font-medium">
                Creation
              </span>
            </h3>

            <Link href="#" className="flex items-center gap-15 text-xl/28">
              <div className="bg-dark flex h-41 w-41 items-center justify-center rounded-full">
                <Svg.Arrow className="text-green" />
              </div>
              Learn more
            </Link>
          </div>

          <Image
            src={Img.ContentCreation}
            alt="Content Creation"
            width={210}
            height={166}
          />
        </li>
        <li className="bg-dark flex items-center justify-between rounded-[45px] border border-black p-50 shadow-[0px_5px_0px_0px_#191A23]">
          <div className="flex flex-col items-start justify-between">
            <h3>
              <span className="bg-green block w-fit rounded-[7px] px-7 text-3xl font-medium">
                Analytics
              </span>
              <span className="bg-green rounded-[7px] px-7 text-3xl font-medium">
                tracking
              </span>
            </h3>

            <Link href="#" className="flex items-center gap-15 text-xl/28">
              <div className="flex h-41 w-41 items-center justify-center rounded-full bg-white">
                <Svg.Arrow className="text-dark" />
              </div>
              Learn more
            </Link>
          </div>

          <Image src={Img.Analytics} alt="SEO" width={210} height={166} />
        </li>
      </ul>

      <div className="relative mt-100 flex items-center justify-between rounded-[45px] bg-[#F3F3F3] px-60 py-60">
        <div className="space-y-26">
          <h3 className="text-3xl font-medium">Let’s make things happen</h3>
          <p className="max-w-[500px] text-lg">
            Contact us today to learn more about how our digital marketing services can
            help your business grow and succeed online.
          </p>
          <Link
            className="bg-dark block w-fit rounded-[14px] px-35 py-20 text-center text-lg/28 text-white"
            href="#"
          >
            Get your free proposal
          </Link>
        </div>

        <Image
          className="absolute right-135"
          src={Img.LetsMakeThingsHappen}
          alt="Let Make Things Happen"
          width={359}
          height={394}
        />
      </div>
    </section>
  )
}
