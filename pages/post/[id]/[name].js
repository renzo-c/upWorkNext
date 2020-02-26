import { useRouter } from 'next/router'
import Header from '../../../components/header'

const Name = () => {
  const router = useRouter()
  const { id, name } = router.query

  return (
    <>
      <Header />
      <h1>Name: {id}</h1>
      <h1>Name: {name}</h1>
    </>
  )
}

export default Name
