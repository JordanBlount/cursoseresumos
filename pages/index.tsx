import { PageSeo } from 'components/SEO'
import Container from '~/components/Container'
import { HEADER_HEIGHT } from '~/constant'
import { siteMetadata } from '~/data/siteMetadata'
import type { BlogFrontMatter } from '~/types'

export default function Home({ posts }: { posts: BlogFrontMatter[] }) {
  return (
    <>
      <PageSeo title={siteMetadata.title} description={siteMetadata.description} />
      <Container>
        {/* NOTE: I can add "-10px" here in the mininum height to expose content under this */}
        <div
          style={{ minHeight: `calc(100svh - ${HEADER_HEIGHT} - 0.5rem)` }}
          className={`flex flex-col items-center justify-center`}
        >
          {/* mt-[5rem] */}
          <div className="-mt-[140px] flex flex-col items-center justify-center">
            {/* NOTE: Feels slightly hacky, but removes all widows */}
            <h1 className="mx-auto text-center text-4xl font-bold text-[#3D3D3D] dark:text-gray-100 sm:text-5xl sm:leading-none md:text-[54px]">
              Cursos para te ajudar a <br /> ter sucesso
            </h1>
            <a className="mt-7 block rounded-lg bg-[#E9DAAC] py-3 px-7 font-bold uppercase text-[#616161]">
              Cursos
            </a>
          </div>
        </div>
        lol
      </Container>
    </>
  )
}
