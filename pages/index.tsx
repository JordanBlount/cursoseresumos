import { PageSeo } from 'components/SEO'
import { siteMetadata } from '~/data/siteMetadata'
import { getAllFilesFrontMatter } from '~/libs/mdx'
import type { BlogFrontMatter } from '~/types'

export function getStaticProps() {
  let posts = getAllFilesFrontMatter('blog')
  return { props: { posts } }
}

export default function Home({ posts }: { posts: BlogFrontMatter[] }) {
  return (
    <>
      <PageSeo title={siteMetadata.title} description={siteMetadata.description} />
    </>
  )
}
