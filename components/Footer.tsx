import clsx from 'clsx'
import { headerNavLinks } from '~/data/headerNavLinks'
import { siteMetadata } from '~/data/siteMetadata'
import Container from './Container'
import { Link } from './Link'
import MadeInAtlanta from './MadeInAtlanta'

export function Footer() {
  return (
    <footer className="bg-primary">
      <Container>
        <div className="mt-14 mb-8 flex flex-col items-center justify-center">
          <div className="flex flex-col items-center gap-9 text-center sm:flex-row">
            {headerNavLinks.map((link) => {
              let className = clsx(
                // NOTE: The padding is causing the nav bar to jumping when transitioning from a larger screen to mobile
                'inline-block rounded text-lg font-medium text-white py-1 px-2 sm:py-2 sm:px-3 focus-visible:ring-4 focus-visible:ring-accent focus-visible:outline-none'
              )
              return (
                <Link key={link.title} href={link.href} className={className}>
                  <span>{link.title}</span>
                </Link>
              )
            })}
          </div>
          <div className="group mb-2 mt-14 flex flex-col items-center justify-center text-sm text-white sm:mt-8">
            <Link
              href="https://jordanblount.com"
              className="rounded focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-accent"
            >
              <MadeInAtlanta />
            </Link>
            <div className="transition-all duration-300 ease-out group-hover:opacity-50">{`Copyright © ${new Date().getFullYear()} ${
              siteMetadata.author
            }`}</div>
          </div>
        </div>
      </Container>
    </footer>
  )
}
