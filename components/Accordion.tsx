import { PortableText } from '@portabletext/react'
import * as AccordionPrimitive from '@radix-ui/react-accordion'
import { ChevronDownIcon } from '@radix-ui/react-icons'
import { clsx } from 'clsx'
import React from 'react'
import { Link } from './Link'

export interface CursoItem {
  _id: string
  nome: string
  descricao?: string
  categoria: string
  conteudo?: any
  link: string
  date?: string
  _createdAt: string
}

interface AccordionProps {
  items: CursoItem[]
}

const Accordion = ({ items }: AccordionProps) => {
  return (
    <AccordionPrimitive.Root type="single" defaultValue="item-1" className={clsx('sm:hidden')}>
      {items?.map(({ _id, nome, categoria, conteudo, descricao, date, link }, i) => (
        <AccordionPrimitive.Item
          key={`header-${_id}`}
          value={`item-${i + 1}`}
          className="w-full first:rounded-t-md last:rounded-b-md [&:not(:last-child)]:border-b [&:not(:last-child)]:border-b-primary/60"
        >
          <AccordionPrimitive.Header className="focus-vsisible:bg-red-100 w-full rounded-t-[inherit] rounded-b-[inherit]">
            <AccordionPrimitive.Trigger
              className={clsx(
                'group relative',
                'focus:outline-none',
                'rounded-t-[inherit] radix-state-closed:rounded-b-[inherit]',
                'focus-within:z-1 inline-flex w-full items-center justify-between gap-2 bg-primary px-7 py-8 text-left focus-within:relative hover:bg-[#026a66] focus-visible:shadow-[0_0px_0px_4px_rgba(233,218,172,1)] radix-state-open:bg-[#026a66]'
              )}
            >
              <span className="absolute -right-2 -top-2 block rounded-lg bg-accent py-1 px-1.5 text-xs font-bold text-button-text">
                NOVO
              </span>
              <div className="flex flex-col">
                <span className="text-base font-bold text-white">{nome}</span>
                <span className="font-base text-base text-gray-300">{categoria}</span>
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
            <div className="flex flex-col">
              <div className="dark:text-body-darkn prose text-base text-body-light dark:text-body-dark dark:prose-invert">
                {!conteudo && (
                  <>
                    <div>Não tem descrição</div>
                  </>
                )}
                {conteudo && (
                  <>
                    <PortableText value={conteudo} />
                  </>
                )}
              </div>
              <Link
                href={link}
                className="mx-auto mt-4 block max-w-fit rounded-lg bg-accent py-3 px-7 text-center font-bold uppercase text-button-text ring-emerald-400 focus-visible:outline-none focus-visible:ring-4"
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
