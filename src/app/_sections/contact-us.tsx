import Image from 'next/image'
import * as Img from '@/app/_sections/images'
import { RadioGroup, RadioGroupItem } from '@/components/primitives/radio'

export function ContactUs() {
  return (
    <section className="pb-140">
      <div className="mb-80 flex items-center gap-40">
        <h2 className="bg-green w-fit rounded-[7px] px-7 text-[40px] font-medium">
          Contact Us
        </h2>
        <p>
          Connect with Us: Let's Discuss Your <br /> Digital Marketing Needs
        </p>
      </div>

      <div className="flex items-center justify-between rounded-[45px] bg-[#F3F3F3] px-100 pt-60 pb-80">
        <form className="w-full max-w-556 space-y-40">
          <div>
            <div className="flex gap-35">
              <RadioGroup
                defaultValue="sayHi"
                name="contactReason"
                className="flex gap-30"
              >
                <div className="flex cursor-pointer items-center gap-10">
                  <RadioGroupItem value="sayHi" id="sayHi" />
                  <label htmlFor="sayHi" className="text-lg/24">
                    Say Hi
                  </label>
                </div>
                <div className="flex cursor-pointer items-center gap-10">
                  <RadioGroupItem value="getQuote" id="getQuote" />
                  <label htmlFor="getQuote" className="text-lg/24">
                    Get a Quote
                  </label>
                </div>
              </RadioGroup>
            </div>
          </div>

          <div className="space-y-25">
            <div className="flex flex-col gap-5">
              <label htmlFor="name">Name</label>
              <input
                className="rounded-[14px] border border-black px-20 py-10"
                placeholder="Name"
                type="text"
                id="name"
              />
            </div>
            <div className="flex flex-col gap-5">
              <label htmlFor="email">Email*</label>
              <input
                className="rounded-[14px] border border-black px-20 py-10"
                placeholder="Email"
                type="email"
                id="email"
              />
            </div>
            <div className="flex flex-col gap-5">
              <label htmlFor="message">Message*</label>
              <textarea
                className="h-190 resize-none rounded-[14px] border border-black px-20 py-10"
                placeholder="Message"
                id="message"
              />
            </div>
          </div>

          <button
            className="bg-dark flex w-full cursor-pointer items-center justify-center rounded-[14px] py-20 text-xl/28 text-white"
            type="button"
          >
            Send Message
          </button>
        </form>

        <Image className="absolute right-8" src={Img.Form} alt="Form" />
      </div>
    </section>
  )
}
