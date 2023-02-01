// let [searchValue, setSearchValue] = useState('')
// let filteredBlogPosts = posts.filter((frontMatter) => {
//   let searchContent = frontMatter.title + frontMatter.summary + frontMatter.tags.join(' ')
//   return searchContent.toLowerCase().includes(searchValue.toLowerCase())
// })

// export function TypedBios() {
//     let el = React.useRef(null)
//     let typed = React.useRef(null)
  
//     React.useEffect(() => {
//       typed.current = new Typed(el.current, {
//         stringsElement: '#bios',
//         typeSpeed: 40,
//         backSpeed: 10,
//         loop: true,
//         backDelay: 1000,
//       })
//       return () => typed.current.destroy()
//     }, [])
  
//     return (
//       <div>
//         <span ref={el} className="text-neutral-900 dark:text-neutral-200" />
//       </div>
//     )
//   }
  