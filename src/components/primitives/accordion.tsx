'use client'

import * as React from 'react'
import { Minus, Plus } from '@/app/_sections/svgs'
import { cn } from '@/lib/utils'
import * as AccordionPrimitive from '@radix-ui/react-accordion'

const Accordion = AccordionPrimitive.Root

const AccordionItem = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Item>
>(({ className, ...props }, ref) => (
  <AccordionPrimitive.Item
    ref={ref}
    className={cn(
      'data-[state=open]:bg-green rounded-[45px] border shadow-[0px_5px_0px_0px_#191A23] transition-colors',
      className,
    )}
    {...props}
  />
))
AccordionItem.displayName = 'AccordionItem'

const AccordionTrigger = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger>
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Header className="flex">
    <AccordionPrimitive.Trigger
      ref={ref}
      className={cn(
        'group flex flex-1 cursor-pointer items-center justify-between px-60 py-41 text-left text-sm font-medium transition-all [&[data-state=open]>svg]:rotate-180',
        className,
      )}
      {...props}
    >
      {children}
      <div className="flex h-58 w-58 items-center justify-center rounded-full border bg-white">
        <Minus className="transition-opacity duration-200 group-data-[state=closed]:hidden group-data-[state=open]:block" />
        <Plus className="transition-opacity duration-200 group-data-[state=closed]:block group-data-[state=open]:hidden" />
      </div>
    </AccordionPrimitive.Trigger>
  </AccordionPrimitive.Header>
))
AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName

const AccordionContent = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Content>
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Content
    ref={ref}
    className="data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down overflow-hidden text-lg"
    {...props}
  >
    <div className={cn('px-60 pt-0 pb-41', className)}>{children}</div>
  </AccordionPrimitive.Content>
))
AccordionContent.displayName = AccordionPrimitive.Content.displayName

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent }
