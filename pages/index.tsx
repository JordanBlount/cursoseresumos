import { PageSeo } from 'components/SEO'
import React, { LegacyRef } from 'react'
import { Accordion, CursoItem } from '~/components/Accordion'
import Container from '~/components/Container'
import { Dialog } from '~/components/Dialog'
import { Link } from '~/components/Link'
import { HEADER_HEIGHT } from '~/constant'
import { siteMetadata } from '~/data/siteMetadata'
import type { BlogFrontMatter } from '~/types'

export default function Home({ posts }: { posts: BlogFrontMatter[] }) {
  const items: CursoItem[] = Array(4).fill({
    header: 'A Biología: Parte 1',
    description: ' - Um resumo da ciênica moderna',
    tag: 'Curso Livres',
    content:
      'Radix Primitives is a low-level UI component library with a focus on accessibility, customization and developer experience. You can use these components either as the base layer of your design system, or adopt them incrementally.',
  })

  return (
    <>
      <PageSeo
        title={siteMetadata.title + ' | ' + siteMetadata.headerTitle}
        description={siteMetadata.description}
      />
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
            <h1 className="mx-auto text-center text-3xl font-bold text-h1-light dark:text-h1-dark sm:text-5xl sm:leading-none md:text-[54px]">
              Cursos para te ajudar
              <br />a ter sucesso
            </h1>
            <Link
              href="#cursos"
              className="mt-7 block rounded-lg bg-accent py-3 px-7 font-bold uppercase text-button-text focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-primary"
            >
              Cursos
            </Link>
          </div>
        </div>
        <section id="sobrenos" className="mb-12">
          <h2 className="mb-6 text-center text-4xl font-bold text-primary">Sobre Nós</h2>
          <p className="mx-auto max-w-xl text-base text-body-light dark:text-body-dark">
            Nossos cursos são feitos para te ajudar a conseguir passar suas provas tranquilamente.
            Temos muitas opçãos abaixo. Se não tiver o que está buscando, pode crer que já vai
            chegar!
          </p>
        </section>
        <section id="cursos" className="my-24 md:my-36">
          <h2 className="mb-6 text-center text-4xl font-bold text-primary">Cursos</h2>
          <div className="space-y-8">
            <input
              type="text"
              id="course-search"
              className="mx-auto block w-full max-w-xl rounded-lg border border-gray-300 bg-gray-100/20 p-2.5 text-sm text-gray-900 focus-visible:border-blue-500 focus-visible:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus-visible:border-blue-500 dark:focus-visible:ring-blue-500"
              placeholder="Busca"
              required
            />
            <div className="mx-auto hidden max-w-4xl grid-cols-2 gap-4 rounded-md sm:grid md:grid-cols-3">
              {items.map((item, i) => (
                <Dialog item={item} />
              ))}
            </div>
            <div className="mx-auto max-w-xl">
              <Accordion />
            </div>
          </div>
        </section>
      </Container>
    </>
  )
}
