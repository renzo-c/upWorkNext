import { useRouter } from 'next/router'
import Link from 'next/link'
import Header from '../../../components/header'

const Post = () => {
  const router = useRouter()
  const { id } = router.query

  return (
    <>
      <Header />
      <h1>Names: {id}</h1>
      <ul>
        <li>
          <Link href="/post/[id]/[name]" as={`/post/${id}/first-name`}>
            <a>First Name</a>
          </Link>
        </li>
        <li>
          <Link href="/post/[id]/[name]" as={`/post/${id}/last-name`}>
            <a>Last Name</a>
          </Link>
        </li>
      </ul>
    </>
  )
}

export default Post
