import Image from 'next/image'
import Link from 'next/link'
import * as Img from './images'
import * as Svg from './svgs'

const team = [
  {
    name: 'John Smith',
    role: 'CEO and Founder',
    image: Img.JohnSmith,
    description:
      '10+ years of experience in digital marketing. Expertise in SEO, PPC, and content strategy',
  },
  {
    name: 'Jane Doe',
    role: 'Director of Operations',
    image: Img.JaneDoe,
    description:
      '7+ years of experience in project management and team leadership. Strong organizational and communication skills',
  },
  {
    name: 'Michael Brown',
    role: 'Senior SEO Specialist',
    image: Img.MichaelBrown,
    description:
      '5+ years of experience in SEO and content creation. Proficient in keyword research and on-page optimization',
  },
  {
    name: 'Emily Johnson',
    role: 'PPC Manager',
    image: Img.EmilyJohnson,
    description:
      '3+ years of experience in paid search advertising. Skilled in campaign management and performance analysis',
  },
  {
    name: 'Brian Williams',
    role: 'Social Media Specialist',
    image: Img.BrianWilliams,
    description:
      '4+ years of experience in social media marketing. Proficient in creating and scheduling content, analyzing metrics, and building engagement',
  },
  {
    name: 'Sarah Kim',
    role: 'Content Creator',
    image: Img.SarahKim,
    description:
      '2+ years of experience in writing and editing. Skilled in creating compelling, SEO-optimized content for various industries',
  },
]

export function Team() {
  return (
    <section className="pt-140 pb-100">
      <div className="mb-80 flex items-center gap-40">
        <h2 className="bg-green w-fit rounded-[7px] px-7 text-[40px] font-medium">
          Team
        </h2>
        <p>
          Meet the skilled and experienced team behind our <br /> successful digital
          marketing strategies
        </p>
      </div>
      <ul className="grid grid-cols-3 gap-40">
        {team.map(member => (
          <li
            className="border-dark w-full max-w-387 rounded-[45px] border px-35 py-40 shadow-[0px_5px_0px_0px_#191A23]"
            key={member.name}
          >
            <div className="relative flex items-end gap-20">
              <Image src={member.image} alt={member.name} />
              <div>
                <h4 className="text-xl font-medium">{member.name}</h4>
                <span>{member.role}</span>
              </div>

              <Link href="#" className="absolute top-0 right-0">
                <Svg.Linkedin />
              </Link>
            </div>

            <div className="my-28 h-px w-full bg-black" />
            <p>{member.description}</p>
          </li>
        ))}
      </ul>

      <div className="mt-40 flex justify-end">
        <Link
          href="#"
          className="bg-dark inline-block rounded-[14px] px-76 py-20 text-center text-xl/28 text-white"
        >
          See all team
        </Link>
      </div>
    </section>
  )
}
