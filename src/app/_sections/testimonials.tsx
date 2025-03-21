import { TestimonialsCarousel } from '../_components/testimonials-carousel'

export function Testimonials() {
  return (
    <section className="pb-140">
      <div className="mb-80 flex items-center gap-40">
        <h2 className="bg-green w-fit rounded-[7px] px-7 text-[40px] font-medium">
          Testimonials
        </h2>
        <p className="text-lg">
          Hear from Our Satisfied Clients: Read Our Testimonials <br /> to Learn More
          about Our Digital Marketing Services
        </p>
      </div>

      <div className="bg-dark flex w-full items-center justify-center rounded-[45px] pt-84 pb-68">
        <TestimonialsCarousel />
      </div>
    </section>
  )
}
