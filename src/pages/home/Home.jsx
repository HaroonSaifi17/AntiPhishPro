import './Home.css'
import NavBar from '../../components/navbar/NavBar.jsx'
import Solutions from '../../components/solutions/Solutions.jsx'
import UseCase from '../../components/UseCase/UseCase.jsx'
import Counter from '../../components/counter/Counter.jsx'
import Hero from '../../components/hero/Hero.jsx'
import Blog from '../../components/blog/Blog.jsx'
import Footer from '../../components/footer/footer.jsx'


function Home() {
  return (
    <>
      <NavBar />
      <Hero/>
      <Solutions/>
      <Counter/>
      <Blog/>
      <Footer/>
    </>
  )
}

export default Home
