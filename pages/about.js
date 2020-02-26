import Header from '../components/header'
import useGlobal from '../utils/context/store/global'

const About = () => {
  const [globalState,] = useGlobal();
  const { user: { name_first, name_last } } = globalState

  return (<>
    <Header />
    <h1>About page</h1>
    {/* Name should be what was set in home page */}
    <p>{name_first}, {name_last}</p>
  </>
  )
}



export default About
