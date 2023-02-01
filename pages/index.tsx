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
          className={`relative flex flex-col items-center justify-center`}
          // className="relative"
        >
          {/* mt-[5rem] */}
          {/* -mt-[140px] */}
          <div className="dark:opacity-15 absolute top-16 left-10 z-[-1] hidden h-[400px] w-[500px] bg-dots bg-[length:1rem_1rem] opacity-10 sm:block xl:w-[650px]"></div>
          <div className="-mt-[280px] flex flex-col items-center justify-center pt-[5rem]">
            {/* NOTE: Feels slightly hacky, but removes all widows */}
            <h1 className="mx-auto text-center text-4xl font-bold text-[#3D3D3D] dark:text-gray-100 sm:text-5xl sm:leading-none md:text-[54px]">
              Cursos para te ajudar <br /> a ter sucesso
            </h1>
            <a
              href="#"
              className="mt-7 block rounded-lg bg-[#E9DAAC] py-3 px-7 font-bold uppercase text-[#616161]"
            >
              Cursos
            </a>
          </div>
        </div>
        <section id="sobrenos" className="mb-12">
          <h2 className="mb-6 text-center text-4xl font-bold text-[#037A76]">Sobre Nós</h2>
          <p className="mx-auto max-w-2xl text-base">
            Lorem ipsum dolor sit amet consectetur. Congue ut lorem nunc volutpat sed in amet risus
            scelerisque. Pharetra nullam feugiat blandit dictum sit vitae risus.
          </p>
        </section>
      </Container>
    </>
  )
}
