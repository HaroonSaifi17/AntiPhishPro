import './Home.css'
import NavBar from '../../components/navbar/NavBar.jsx'
import Solutions from '../../components/solutions/Solutions.jsx'
import UseCase from '../../components/UseCase/UseCase.jsx'
import Counter from '../../components/counter/Counter.jsx'


function Home() {
  return (
    <>
      <NavBar />
      <Solutions/>
      <UseCase/>
      <Counter/>
    </>
  )
}

export default Home
