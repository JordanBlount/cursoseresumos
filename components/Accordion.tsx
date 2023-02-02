import * as AccordionPrimitive from '@radix-ui/react-accordion'
import { ChevronDownIcon } from '@radix-ui/react-icons'
import { clsx } from 'clsx'
import React from 'react'
import { Link } from './Link'

interface AccordionItem {
  header: string
  tag: string
  content: string
}

// const items: AccordionItem[] = [
//   {
//     header: 'A Biología: Parte 1',
//     tag: 'Curso Livres',
//     content:
//       'Radix Primitives is a low-level UI component library with a focus on accessibility, customization and developer experience. You can use these components either as the base layer of your design system, or adopt them incrementally.',
//   },
//   {
//     header: 'Why are goats so popular at Vercel',
//     tag: 'Curso Livres',
//     content:
//       'Goats are popular at Vercel for a few reasons. First, they provide a healthier and more sustainable solution for grass cutting and vegetation control. Additionally, goats are able to traverse very steep terrain. This makes them perfect for providing maintenance in areas that are difficult to access. Finally, their presence is said to provide a calming atmosphere, which is especially beneficial in stressful engineering environments.',
//   },
// ]

const items: AccordionItem[] = Array(10).fill({
  header: 'A Biología: Parte 1 - Um resumo da ciênica moderna',
  tag: 'Curso Livres',
  content:
    'Radix Primitives is a low-level UI component library with a focus on accessibility, customization and developer experience. You can use these components either as the base layer of your design system, or adopt them incrementally.',
})

interface AccordionProps {}

const Accordion = (props: AccordionProps) => {
  return (
    <AccordionPrimitive.Root type="single" defaultValue="item-1" className={clsx('sm:hidden')}>
      {items.map(({ header, tag, content }, i) => (
        <AccordionPrimitive.Item
          key={`header-${i}`}
          value={`item-${i + 1}`}
          className="w-full first:rounded-t-md last:rounded-b-md [&:not(:last-child)]:border-b [&:not(:last-child)]:border-b-primary/60"
        >
          <AccordionPrimitive.Header className="focus-vsisible:bg-red-100 w-full rounded-t-[inherit] rounded-b-[inherit]">
            <AccordionPrimitive.Trigger
              className={clsx(
                'group',
                'focus:outline-none',
                'rounded-t-[inherit] radix-state-closed:rounded-b-[inherit]',
                'focus-within:z-1 inline-flex w-full items-center justify-between gap-2 bg-primary px-7 py-8 text-left focus-within:relative hover:bg-[#026a66] focus-visible:shadow-[0_0px_0px_4px_rgba(233,218,172,1)] radix-state-open:bg-[#026a66]'
              )}
            >
              <div className="flex flex-col">
                <span className="text-base font-bold text-white">{header}</span>
                <span className="font-base text-base text-gray-300">{tag}</span>
              </div>
              <ChevronDownIcon
                className={clsx(
                  'ml-2 h-5 w-5 shrink-0 text-gray-700 ease-in-out dark:text-gray-400',
                  'group-radix-state-open:rotate-180 group-radix-state-open:duration-300'
                )}
              />
            </AccordionPrimitive.Trigger>
          </AccordionPrimitive.Header>
          <AccordionPrimitive.Content className="w-full rounded-b-[inherit] border-x border-x-prompt-border-l-r-light bg-prompt-content-light px-7 pt-4 pb-4 dark:border-x-prompt-border-l-r-dark dark:bg-prompt-content-dark">
            <div className="flex flex-col items-center justify-center">
              <div className="text-base text-body-light dark:text-body-dark">{content}</div>
              <Link
                href="#cursos"
                className="mt-4 block rounded-lg bg-accent py-3 px-7 font-bold uppercase text-button-text focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-primary"
              >
                Compre
              </Link>
            </div>
          </AccordionPrimitive.Content>
        </AccordionPrimitive.Item>
      ))}
    </AccordionPrimitive.Root>
  )
}

export { Accordion }
