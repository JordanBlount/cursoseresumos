import { useState } from 'react'
import { MAIN_CONTENT_MIN_HEIGHT } from '~/constant'
import { Footer } from './Footer'
import { Header } from './Header'
import { MobileNav } from './MobileNav'

export function LayoutWrapper({ children }) {
  let [navShow, setNavShow] = useState(false)
  let onToggleNav = () => setNavShow((status) => !status)

  return (
    <>
      {/* NOTE: If i want to, I can change this to "min-h-[100svh] and add flex grow to the main element" */}
      <div className="flex flex-col justify-between">
        {/* NOTE: Subtracting a value from "vh" allows me to add some gutter/white space above the fold */}
        <div className="dark:opacity-15 absolute z-[-1] h-[calc(100vh-3rem)] w-full bg-dots bg-[length:1rem_1rem] opacity-10 sm:hidden"></div>
        <MobileNav navShow={navShow} onToggleNav={onToggleNav} />
        <Header onToggleNav={onToggleNav} />
        <main style={{ minHeight: MAIN_CONTENT_MIN_HEIGHT }}>{children}</main>
        <Footer />
      </div>
    </>
  )
}
