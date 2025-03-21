'use client'

import Image from 'next/image'
import { FormEvent, useState } from 'react'
import * as Img from '@/app/_sections/images'
import { RadioGroup, RadioGroupItem } from '@/components/primitives/radio'

export function ContactUs() {
  const [contactReason, setContactReason] = useState('sayHi')
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    await new Promise(resolve => setTimeout(resolve, 1000))

    setContactReason('sayHi')
    setName('')
    setEmail('')
    setMessage('')
    setIsSubmitting(false)
  }

  return (
    <section className="pb-140">
      <div className="mb-80 flex items-center gap-40">
        <h2 className="bg-green w-fit rounded-[7px] px-7 text-[40px] font-medium">
          Contact Us
        </h2>
        <p className="text-lg">
          Connect with Us: Let's Discuss Your <br /> Digital Marketing Needs
        </p>
      </div>

      <div className="flex items-center justify-between rounded-[45px] bg-[#F3F3F3] px-100 pt-60 pb-80">
        <form className="w-full max-w-556 space-y-40" onSubmit={handleSubmit}>
          <div>
            <div className="flex gap-35">
              <RadioGroup
                value={contactReason}
                onValueChange={setContactReason}
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
                className="rounded-[14px] border border-black bg-white px-20 py-18"
                placeholder="Name"
                type="text"
                id="name"
                value={name}
                onChange={e => setName(e.target.value)}
              />
            </div>
            <div className="flex flex-col gap-5">
              <label htmlFor="email">Email*</label>
              <input
                className="rounded-[14px] border border-black bg-white px-20 py-18"
                placeholder="Email"
                type="email"
                id="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="flex flex-col gap-5">
              <label htmlFor="message">Message*</label>
              <textarea
                className="h-190 resize-none rounded-[14px] border border-black bg-white px-20 py-18"
                placeholder="Message"
                id="message"
                value={message}
                onChange={e => setMessage(e.target.value)}
                required
              />
            </div>
          </div>

          <button
            className="bg-dark not-disabled:hover:text-dark flex w-full cursor-pointer items-center justify-center rounded-[14px] py-20 text-xl/28 text-white transition-colors not-disabled:hover:bg-white not-disabled:hover:shadow-[0px_0_0px_1px_#000] disabled:opacity-30"
            type="submit"
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </button>
        </form>

        <Image className="absolute right-8" src={Img.Form} alt="Form" />
      </div>
    </section>
  )
}
