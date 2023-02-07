import { PageSeo } from 'components/SEO'
import React, { LegacyRef, useState } from 'react'
import { Accordion, CursoItem } from '~/components/Accordion'
import Container from '~/components/Container'
import { Dialog } from '~/components/Dialog'
import { Link } from '~/components/Link'
import { HEADER_HEIGHT } from '~/constant'
import { siteMetadata } from '~/data/siteMetadata'
import accents from 'remove-accents'
import type { GetStaticProps } from 'next/types'
import { createClient } from 'next-sanity'

const client = createClient({
  projectId: 'qkeuvhb9',
  dataset: 'production',
  apiVersion: '2023-02-04',
  useCdn: false,
})

export const getStaticProps: GetStaticProps = async () => {
  const cursos = await client.fetch(`
    *[_type == "curso"]{
     ...,
      "categoria": categoria->nome
    }
  `)

  return {
    props: {
      cursos,
    },
    revalidate: 20,
  }
}

export default function Home({ cursos }) {
  let [searchValue, setSearchValue] = useState('')
  let filteredCourses = cursos.filter((course) => {
    // NOTE: I can add things that can be searched here
    // FIXME: Make sure that if a property does not exist, it does not add "Null" into the string
    let searchContent = course?.nome + course?.descricao + course?.conteudo + course?.categoria
    // NOTE: This may cause some slowdown, so I may eventually remove it. It makes search work without worrying about accents
    searchContent = accents.remove(searchContent)
    return searchContent.toLowerCase().includes(searchValue.toLowerCase())
  })

  const handleChange = (e) => {
    setSearchValue(e.target.value)
  }

  return (
    <>
      <PageSeo
        title={siteMetadata.title + ' | ' + siteMetadata.headerTitle}
        description={siteMetadata.description}
      />
      <Container>
        {/* NOTE: I can add "-10px" here in the mininum height to expose content under this */}
        <div
          style={{ minHeight: `calc(100vh - ${HEADER_HEIGHT} - 0.5rem)` }}
          className={`relative flex flex-col items-center justify-center`}
          // className="relative"
        >
          {/* mt-[5rem] */}
          {/* -mt-[140px] */}
          {/* <div className="dark:opacity-15 absolute top-16 left-10 z-[-1] hidden h-[400px] w-[500px] bg-dots bg-[length:1rem_1rem] opacity-10 sm:block xl:w-[650px]"></div> */}

          <div className="dark:opacity-15 absolute z-[-1] hidden h-[400px] w-[500px] bg-dots bg-[length:1rem_1rem] opacity-10 sm:block sm:-translate-x-16 sm:-translate-y-10 md:-translate-x-20 md:-translate-y-8 xl:w-[650px] xl:-translate-x-36"></div>
          <div className="-mt-[140px] flex flex-col items-center justify-center pt-[5rem]">
            {/* NOTE: Feels slightly hacky, but removes all widows */}
            <h1 className="mx-auto text-center text-3xl font-bold text-h1-light dark:text-h1-dark sm:text-5xl sm:leading-none md:text-[54px]">
              Cursos para te ajudar
              <br />a ter sucesso
            </h1>
            <Link
              href="#cursos"
              className="mt-7 block rounded-lg bg-accent py-3 px-7 font-bold uppercase text-button-text ring-emerald-400 hover:bg-accent-light focus-visible:outline-none focus-visible:ring-4 active:bg-yellow-400"
            >
              Cursos
            </Link>
          </div>
        </div>
        <section id="sobrenos" className="mb-12 scroll-mt-10">
          <h2 className="mb-6 text-center text-4xl font-bold text-primary">Sobre Nós</h2>
          <p className="mx-auto max-w-xl text-base text-body-light dark:text-body-dark">
            Nossos cursos são feitos para te ajudar a conseguir passar suas provas tranquilamente.
            Temos muitas opçãos abaixo. Se não tiver o que está buscando, pode crer que já vai
            chegar!
          </p>
        </section>
        <section id="cursos" className="my-24 scroll-mt-10 md:my-36">
          <h2 className="mb-6 text-center text-4xl font-bold text-primary">Cursos</h2>
          <div className="space-y-8">
            <form>
              <label className="sr-only" htmlFor="course-search">
                Search
              </label>
              <input
                type="text"
                id="course-search"
                className="mx-auto block w-full max-w-xl rounded-lg border border-gray-300 bg-gray-100/20 py-2.5 px-4 text-base text-gray-800 focus-visible:border-emerald-400 focus-visible:ring-2 focus-visible:ring-emerald-400 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus-visible:border-emerald-400 dark:focus-visible:ring-emerald-400"
                placeholder="Busca"
                value={searchValue}
                onChange={handleChange}
                required
              />
            </form>
            {!filteredCourses.length && (
              <>
                <div className="mx-auto max-w-xl text-center text-xl">Nenhum curso achado.</div>
              </>
            )}
            {filteredCourses.length > 0 && (
              <>
                <div className="mx-auto hidden max-w-4xl grid-cols-2 gap-4 rounded-md sm:grid md:grid-cols-3">
                  {filteredCourses?.map((item, i) => (
                    // NOTE: Fix this
                    <Dialog key={item._id} item={item} />
                  ))}
                </div>
              </>
            )}
            <div className="mx-auto max-w-xl">
              <Accordion items={filteredCourses} />
            </div>
          </div>
        </section>
      </Container>
    </>
  )
}
