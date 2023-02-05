import { Transition } from '@headlessui/react'
import { PortableText } from '@portabletext/react'
import * as DialogPrimitive from '@radix-ui/react-dialog'
import { Cross1Icon } from '@radix-ui/react-icons'
import { clsx } from 'clsx'
import dayjs from 'dayjs'
import React, { Fragment, useState } from 'react'
import type { CursoItem } from './Accordion'
import { Link } from './Link'
var utc = require('dayjs/plugin/utc')
dayjs.extend(utc)

interface DialogProps {
  item: CursoItem
}

const Dialog = ({ item }: DialogProps) => {
  let [isOpen, setIsOpen] = useState(false)

  const createdAt = dayjs(new Date(item._createdAt))
  const now = dayjs()

  const showNovo = createdAt.diff(now, 'day') <= 10

  return (
    <DialogPrimitive.Root open={isOpen} onOpenChange={setIsOpen}>
      <DialogPrimitive.Trigger asChild>
        <button className="relative inline-flex cursor-pointer items-center justify-between rounded-md bg-primary px-7 py-8 text-left hover:bg-[#026a66] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-emerald-400 sm:gap-1 lg:gap-2">
          <div className="flex flex-col">
            {/* NOTE: I'll probably change this so that the text is scalable. When it is just "A Biologia: Parte 1", the text wraps badly */}
            <span className="text-base font-bold leading-tight text-white">{item.nome}</span>
            <span className="text-sm font-light text-gray-300">{item.categoria}</span>
          </div>
          <div>
            <svg
              width="30"
              height="30"
              viewBox="0 0 30 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15 2.34375C12.4968 2.34375 10.0499 3.08603 7.96857 4.47671C5.88726 5.8674 4.26508 7.84404 3.30716 10.1567C2.34923 12.4693 2.0986 15.014 2.58694 17.4691C3.07529 19.9242 4.28068 22.1793 6.05069 23.9493C7.82069 25.7193 10.0758 26.9247 12.5309 27.4131C14.986 27.9014 17.5307 27.6508 19.8433 26.6929C22.156 25.7349 24.1326 24.1127 25.5233 22.0314C26.914 19.9501 27.6563 17.5032 27.6563 15C27.6532 11.6443 26.3187 8.42694 23.9459 6.05411C21.5731 3.68127 18.3557 2.34685 15 2.34375ZM15 24.8438C13.0531 24.8438 11.1499 24.2664 9.53111 23.1848C7.91231 22.1031 6.65062 20.5658 5.90557 18.767C5.16052 16.9683 4.96558 14.9891 5.3454 13.0796C5.72522 11.1701 6.66275 9.41609 8.03942 8.03942C9.4161 6.66274 11.1701 5.72522 13.0796 5.34539C14.9891 4.96557 16.9683 5.16051 18.767 5.90556C20.5658 6.65061 22.1031 7.91231 23.1848 9.53111C24.2664 11.1499 24.8438 13.0531 24.8438 15C24.8407 17.6098 23.8026 20.1118 21.9572 21.9572C20.1118 23.8025 17.6098 24.8406 15 24.8438ZM21.0938 15C21.0938 15.373 20.9456 15.7306 20.6819 15.9944C20.4181 16.2581 20.0605 16.4062 19.6875 16.4062H16.4063V19.6875C16.4063 20.0605 16.2581 20.4181 15.9944 20.6819C15.7307 20.9456 15.373 21.0938 15 21.0938C14.627 21.0938 14.2694 20.9456 14.0056 20.6819C13.7419 20.4181 13.5938 20.0605 13.5938 19.6875V16.4062H10.3125C9.93954 16.4062 9.58186 16.2581 9.31814 15.9944C9.05441 15.7306 8.90626 15.373 8.90626 15C8.90626 14.627 9.05441 14.2694 9.31814 14.0056C9.58186 13.7419 9.93954 13.5938 10.3125 13.5938H13.5938V10.3125C13.5938 9.93954 13.7419 9.58185 14.0056 9.31813C14.2694 9.05441 14.627 8.90625 15 8.90625C15.373 8.90625 15.7307 9.05441 15.9944 9.31813C16.2581 9.58185 16.4063 9.93954 16.4063 10.3125V13.5938H19.6875C20.0605 13.5938 20.4181 13.7419 20.6819 14.0056C20.9456 14.2694 21.0938 14.627 21.0938 15Z"
                fill="white"
              />
            </svg>
          </div>
          {showNovo && (
            <span className="absolute -right-2 -top-2 block rounded-lg bg-accent py-1 px-1.5 text-xs font-bold text-button-text">
              NOVO
            </span>
          )}
        </button>
      </DialogPrimitive.Trigger>
      <DialogPrimitive.Portal forceMount>
        <Transition.Root show={isOpen}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <DialogPrimitive.Overlay forceMount className="fixed inset-0 z-20 bg-black/50" />
          </Transition.Child>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <DialogPrimitive.Content
              forceMount
              className={clsx(
                'fixed z-50',
                'max-w-lg rounded-md p-8 md:w-full',
                'top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]',
                'bg-prompt-content-light dark:bg-prompt-content-dark', //bg-gray-800
                'focus:outline-none focus-visible:ring focus-visible:ring-emerald-400 focus-visible:ring-opacity-75',
                'border border-gray-500 shadow-lg dark:border-gray-800'
              )}
            >
              <DialogPrimitive.Title className="text-2xl font-bold leading-tight text-h1-light dark:text-h1-dark">
                {`${item.nome}${!item.descricao ? '' : ' - ' + item.descricao}`}
              </DialogPrimitive.Title>
              <DialogPrimitive.Description className="text-lg font-medium text-gray-500 dark:text-gray-400">
                {item.categoria}
              </DialogPrimitive.Description>

              <div className="prose mt-4 h-60 max-h-64 overflow-y-scroll text-body-light dark:text-body-dark dark:prose-invert">
                {!item.conteudo && (
                  <>
                    <div className="flex h-full items-center justify-center">Não tem descrição</div>
                  </>
                )}
                {item.conteudo && (
                  <>
                    <PortableText value={item.conteudo} />
                  </>
                )}
              </div>
              <div className="mt-4 flex justify-center">
                <Link
                  href={item.link}
                  className={clsx(
                    'inline-flex select-none justify-center rounded-md px-4 py-2 font-bold',
                    'cursor-pointer bg-accent text-button-text hover:bg-accent-light active:bg-yellow-400',
                    'border border-transparent',
                    'focus:outline-none focus-visible:ring focus-visible:ring-emerald-400 focus-visible:ring-opacity-75'
                  )}
                >
                  Compre
                </Link>
              </div>

              <DialogPrimitive.Close
                className={clsx(
                  'absolute top-3.5 right-3.5 inline-flex items-center justify-center rounded-full p-1',
                  'focus:outline-none focus-visible:ring focus-visible:ring-emerald-400 focus-visible:ring-opacity-75'
                )}
              >
                <Cross1Icon className="h-8 w-8 text-gray-500 hover:text-gray-700 dark:text-gray-500 dark:hover:text-gray-400" />
              </DialogPrimitive.Close>
            </DialogPrimitive.Content>
          </Transition.Child>
        </Transition.Root>
      </DialogPrimitive.Portal>
    </DialogPrimitive.Root>
  )
}

export { Dialog }
