import { PageSeo } from 'components/SEO'
import { Accordion } from '~/components/Accordion'
import Container from '~/components/Container'
import { Dialog } from '~/components/Dialog'
import { Link } from '~/components/Link'
import { HEADER_HEIGHT } from '~/constant'
import { siteMetadata } from '~/data/siteMetadata'
import type { BlogFrontMatter } from '~/types'

export default function Home({ posts }: { posts: BlogFrontMatter[] }) {
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
              {Array(4)
                .fill(null)
                .map((item, i) => {
                  return (
                    <button
                      key={i}
                      className="inline-flex cursor-pointer items-center justify-between gap-2 rounded-md bg-primary px-7 py-8 text-left hover:bg-[#026a66] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-emerald-400"
                    >
                      <div className="flex flex-col">
                        <span className="text-base font-bold leading-tight text-white">
                          A Biología: Parte 1
                        </span>
                        <span className="text-sm font-light text-gray-300">Cursos Livres</span>
                      </div>
                      <div>
                        <svg
                          width="30"
                          height="30"
                          viewBox="0 0 30 30"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M15 2.34375C12.4968 2.34375 10.0499 3.08603 7.96857 4.47671C5.88726 5.8674 4.26508 7.84404 3.30716 10.1567C2.34923 12.4693 2.0986 15.014 2.58694 17.4691C3.07529 19.9242 4.28068 22.1793 6.05069 23.9493C7.82069 25.7193 10.0758 26.9247 12.5309 27.4131C14.986 27.9014 17.5307 27.6508 19.8433 26.6929C22.156 25.7349 24.1326 24.1127 25.5233 22.0314C26.914 19.9501 27.6563 17.5032 27.6563 15C27.6532 11.6443 26.3187 8.42694 23.9459 6.05411C21.5731 3.68127 18.3557 2.34685 15 2.34375ZM15 24.8438C13.0531 24.8438 11.1499 24.2664 9.53111 23.1848C7.91231 22.1031 6.65062 20.5658 5.90557 18.767C5.16052 16.9683 4.96558 14.9891 5.3454 13.0796C5.72522 11.1701 6.66275 9.41609 8.03942 8.03942C9.4161 6.66274 11.1701 5.72522 13.0796 5.34539C14.9891 4.96557 16.9683 5.16051 18.767 5.90556C20.5658 6.65061 22.1031 7.91231 23.1848 9.53111C24.2664 11.1499 24.8438 13.0531 24.8438 15C24.8407 17.6098 23.8026 20.1118 21.9572 21.9572C20.1118 23.8025 17.6098 24.8406 15 24.8438ZM21.0938 15C21.0938 15.373 20.9456 15.7306 20.6819 15.9944C20.4181 16.2581 20.0605 16.4062 19.6875 16.4062H16.4063V19.6875C16.4063 20.0605 16.2581 20.4181 15.9944 20.6819C15.7307 20.9456 15.373 21.0938 15 21.0938C14.627 21.0938 14.2694 20.9456 14.0056 20.6819C13.7419 20.4181 13.5938 20.0605 13.5938 19.6875V16.4062H10.3125C9.93954 16.4062 9.58186 16.2581 9.31814 15.9944C9.05441 15.7306 8.90626 15.373 8.90626 15C8.90626 14.627 9.05441 14.2694 9.31814 14.0056C9.58186 13.7419 9.93954 13.5938 10.3125 13.5938H13.5938V10.3125C13.5938 9.93954 13.7419 9.58185 14.0056 9.31813C14.2694 9.05441 14.627 8.90625 15 8.90625C15.373 8.90625 15.7307 9.05441 15.9944 9.31813C16.2581 9.58185 16.4063 9.93954 16.4063 10.3125V13.5938H19.6875C20.0605 13.5938 20.4181 13.7419 20.6819 14.0056C20.9456 14.2694 21.0938 14.627 21.0938 15Z"
                            fill="white"
                          />
                        </svg>
                      </div>
                    </button>
                  )
                })}
            </div>
            <div className="mx-auto max-w-xl">
              <Accordion />
            </div>
          </div>
        </section>
      </Container>
      {/* <Dialog /> */}
    </>
  )
}
