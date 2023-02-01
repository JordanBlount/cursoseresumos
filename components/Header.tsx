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
    <header className="overflow-x-hidden bg-white py-12 backdrop-blur dark:bg-dark">
      {/* NOTE: Example of how the outside container should wrap most components */}
      <div className="mx-auto flex max-w-3xl items-center justify-between px-5 lg:px-0 xl:max-w-5xl">
        <div>
          <Link href="/" aria-label={`${siteMetadata.title}'s website homepage`}>
            <div className="umami--click--logo flex items-center justify-between">
              <div className="mr-3 flex items-center justify-center">
                <Logo />
              </div>
            </div>
          </Link>
        </div>
        <div className="flex items-center">
          <div className="hidden space-x-2 sm:block">
            {headerNavLinks.map((link) => {
              let className = clsx(
                // NOTE: The padding is causing the nav bar to jumping when transitioning from a larger screen to mobile
                'inline-block rounded text-lg font-medium text-gray-900 dark:text-gray-100 py-1 px-2 sm:py-2 sm:px-3',
                router.pathname === link.href
                  ? 'bg-gray-200 dark:bg-gray-700'
                  : 'hover:bg-gray-200 dark:hover:bg-gray-700',
                `umami--click--nav-${link.href.replace('/', '')}`
              )
              return (
                <Link key={link.title} href={link.href}>
                  <span className={className}>{link.title}</span>
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
              className="text-gray-900 dark:text-gray-100"
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
