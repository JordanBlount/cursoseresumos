import { Transition } from '@headlessui/react'
import * as DialogPrimitive from '@radix-ui/react-dialog'
import { Cross1Icon } from '@radix-ui/react-icons'
import { clsx } from 'clsx'
import React, { Fragment, useState } from 'react'

interface DialogProps {}

const Dialog = (props: DialogProps) => {
  let [isOpen, setIsOpen] = useState(false)

  return (
    <DialogPrimitive.Root open={isOpen} onOpenChange={setIsOpen}>
      <DialogPrimitive.Trigger>Test</DialogPrimitive.Trigger>
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
                'focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75',
                'border border-gray-500 shadow-lg dark:border-gray-800'
              )}
            >
              <DialogPrimitive.Title className="text-2xl font-bold leading-tight text-h1-light dark:text-h1-dark">
                A Biología: Parte 1 - A study of the best science
              </DialogPrimitive.Title>
              <DialogPrimitive.Description className="text-lg font-medium text-gray-500 dark:text-gray-400">
                Cursos Livres
              </DialogPrimitive.Description>

              <div className="mt-4 h-60 max-h-64 overflow-y-scroll text-body-light dark:text-body-dark">
                Lorem ipsum dolor sit amet consectetur. Congue ut lorem nunc volutpat sed in amet
                risus scelerisque. Pharetra nullam feugiat blandit dictum sit vitae risus.
              </div>
              <div className="mt-4 flex justify-center">
                <DialogPrimitive.Close
                  className={clsx(
                    'inline-flex select-none justify-center rounded-md px-4 py-2 font-bold',
                    'bg-accent text-button-text hover:bg-purple-700 dark:bg-accent dark:hover:bg-purple-600',
                    'border border-transparent',
                    'focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75'
                  )}
                >
                  Compre
                </DialogPrimitive.Close>
              </div>

              <DialogPrimitive.Close
                className={clsx(
                  'absolute top-3.5 right-3.5 inline-flex items-center justify-center rounded-full p-1',
                  'focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75'
                )}
              >
                <Cross1Icon className="h-4 w-4 text-gray-500 hover:text-gray-700 dark:text-gray-500 dark:hover:text-gray-400" />
              </DialogPrimitive.Close>
            </DialogPrimitive.Content>
          </Transition.Child>
        </Transition.Root>
      </DialogPrimitive.Portal>
    </DialogPrimitive.Root>
  )
}

export { Dialog }
