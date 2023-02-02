import clsx from 'clsx'
import { headerNavLinks } from 'data/headerNavLinks'
import { useRouter } from 'next/router'
import { Link } from './Link'
import { ThemeSwitcher } from './ThemeSwitcher'
import { Logo } from './Logo'
import { siteMetadata } from '~/data/siteMetadata'

export function Header({ onToggleNav }: { onToggleNav: () => void }) {
  let router = useRouter()
  return (
    <header className="overflow-x-hidden bg-transparent py-12">
      {/* NOTE: Example of how the outside container should wrap most components */}
      <div className="mx-auto flex max-w-3xl items-center justify-between px-5 lg:px-0 xl:max-w-5xl">
        <div>
          <Link
            href="/"
            aria-label={`${siteMetadata.title}'s website homepage`}
            className={
              'block rounded ring-emerald-400 focus-visible:outline-none focus-visible:ring-4'
            }
          >
            <div className="umami--click--logo flex items-center justify-between">
              <div className="flex items-center justify-center py-1 px-2 ">
                <Logo />
              </div>
            </div>
          </Link>
        </div>
        <div className="flex items-center space-x-2 sm:space-x-4 md:space-x-8">
          <div className="hidden space-x-2 sm:block sm:space-x-4 md:space-x-8">
            {headerNavLinks.map((link) => {
              let className = clsx(
                // NOTE: The padding is causing the nav bar to jumping when transitioning from a larger screen to mobile
                // sm:py-2 sm:px-3
                //ocus-visible:ring-2 ring-emerald-400 focus-visible:border-primary
                'inline-block rounded text-lg font-medium text-h1-light dark:text-h1-dark py-1 px-2 focus-visible:ring-4 ring-emerald-400 focus-visible:outline-none',
                router.pathname === link.href
                  ? 'bg-gray-200 dark:bg-gray-700'
                  : 'hover:bg-gray-200 dark:hover:bg-gray-700',
                `umami--click--nav-${link.href.replace('/', '')}`
              )
              return (
                <Link key={link.title} href={link.href} className={className}>
                  <span>{link.title}</span>
                </Link>
              )
            })}
          </div>
          <ThemeSwitcher />
          <button
            className="umami--click--mobile-nav-toggle ml-2 mr-1 h-8 w-8 rounded sm:hidden"
            type="button"
            aria-label="Toggle Menu"
            onClick={onToggleNav}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="text-h1-light dark:text-gray-100"
            >
              <path
                fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>
      </div>
    </header>
  )
}
