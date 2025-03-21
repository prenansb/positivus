'use client'

import { useCallback, useEffect, useState } from 'react'
import { CarouselArrow, Star } from '@/app/_sections/svgs'
import { cn } from '@/lib/utils'
import useEmblaCarousel from 'embla-carousel-react'

export function TestimonialsCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: 'start' })
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [slidesCount, setSlidesCount] = useState(5)

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi])
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi])

  const onSelect = useCallback(() => {
    if (!emblaApi) return
    setSelectedIndex(emblaApi.selectedScrollSnap())
  }, [emblaApi])

  useEffect(() => {
    if (!emblaApi) return

    setSlidesCount(emblaApi.scrollSnapList().length)
    emblaApi.on('select', onSelect)
    onSelect()

    return () => {
      emblaApi.off('select', onSelect)
    }
  }, [emblaApi, onSelect])

  const scrollTo = useCallback(
    (index: number) => emblaApi && emblaApi.scrollTo(index),
    [emblaApi],
  )

  return (
    <div className="flex w-full flex-col items-center gap-124">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {Array.from({ length: 5 }).map((_, index) => (
            <div key={index} className="relative min-w-0 flex-[0_0_606px] pl-20">
              <div className="p-1">
                <div className="border-green relative rounded-[45px] border px-52 py-48">
                  <div className="text-lg/[110%] text-white">
                    "We have been working with Positivus for the past year and have seen a
                    significant increase in website traffic and leads as a result of their
                    efforts. The team is professional, responsive, and truly cares about
                    the success of our business. We highly recommend Positivus to any
                    company looking to grow their online presence."
                  </div>

                  <div className="border-green bg-dark absolute bottom-[-21px] left-65 h-40 w-40 rotate-45 border-r border-b" />
                </div>

                <div className="pt-48 pl-80">
                  <h4 className="text-green text-xl font-medium">John Smith</h4>
                  <span className="text-lg text-white">
                    Marketing Director at XYZ Corp
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-6 flex w-full max-w-564 items-center justify-between">
        <button
          className="cursor-pointer"
          onClick={scrollPrev}
          disabled={selectedIndex === 0}
        >
          <CarouselArrow
            className={cn(
              'rotate-180 text-white transition-opacity',
              selectedIndex === 0 ? 'opacity-30' : 'opacity-100',
            )}
          />
        </button>

        <div className="flex gap-20">
          {Array.from({ length: slidesCount }).map((_, index) => (
            <button
              key={index}
              onClick={() => scrollTo(index)}
              aria-label={`Go to slide ${index + 1}`}
            >
              <Star
                className={cn(
                  'transition-colors',
                  selectedIndex === index ? 'text-green' : 'text-white',
                )}
              />
            </button>
          ))}
        </div>

        <button
          className="cursor-pointer"
          onClick={scrollNext}
          disabled={selectedIndex === slidesCount - 1}
        >
          <CarouselArrow
            className={cn(
              'text-white transition-opacity',
              selectedIndex === slidesCount - 1 ? 'opacity-30' : 'opacity-100',
            )}
          />
        </button>
      </div>
    </div>
  )
}
