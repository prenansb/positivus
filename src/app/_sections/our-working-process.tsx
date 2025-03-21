import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/primitives/accordion'

const items = [
  {
    title: 'Consultation',
    content:
      'During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.',
  },
  {
    title: 'Research and Strategy Development',
    content:
      'We will develop a comprehensive strategy that outlines the steps we will take to achieve your goals. This will include a timeline, key performance indicators, and a detailed plan for each stage of the process.',
  },
  {
    title: 'Implementation',
    content:
      'We will implement the strategy and monitor the results. We will make adjustments as needed to ensure that the strategy is working effectively.',
  },
  {
    title: 'Monitoring and Optimization',
    content:
      'We will monitor the results of the strategy and make adjustments as needed. We will also provide regular reports on the progress of the strategy.',
  },
  {
    title: 'Reporting and Communication',
    content:
      'We will provide regular reports on the progress of the strategy and make adjustments as needed. We will also provide a final report on the results of the strategy.',
  },
  {
    title: 'Continual Improvement',
    content:
      'We will provide ongoing support and follow-up to ensure that the strategy is working effectively. We will also provide a final report on the results of the strategy.',
  },
]

export function OurWorkingProcess() {
  return (
    <section>
      <div className="mb-80 flex items-center gap-40">
        <h2 className="bg-green w-fit rounded-[7px] px-7 text-[40px] font-medium">
          Our Working Process
        </h2>
        <p>
          Step-by-Step Guide to Achieving <br /> Your Business Goals
        </p>
      </div>

      <Accordion className="space-y-30" type="single" collapsible>
        {items.map((item, idx) => (
          <AccordionItem key={item.title} value={item.title}>
            <AccordionTrigger>
              <div className="flex items-center gap-25">
                <span className="text-[60px] font-medium">0{idx + 1}</span>
                <span className="text-2xl font-medium">{item.title}</span>
              </div>
            </AccordionTrigger>
            <AccordionContent>
              <div className="mb-40 h-px w-full bg-black" />
              {item.content}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  )
}
