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
      <div className="flex flex-col justify-between">
        <MobileNav navShow={navShow} onToggleNav={onToggleNav} />
        <Header onToggleNav={onToggleNav} />
        <main style={{ minHeight: MAIN_CONTENT_MIN_HEIGHT }}>{children}</main>
        <Footer />
      </div>
    </>
  )
}
