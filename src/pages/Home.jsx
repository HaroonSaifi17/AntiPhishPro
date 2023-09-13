import Blog from '../components/blog/Blog'
import Counter from '../components/counter/Counter'
import Footer from '../components/footer/footer'
import Hero from '../components/hero/Hero'
import NavBar from '../components/navbar/NavBar'

function Home() {
  return (
    <>
      <NavBar />
      <Hero />
      <Counter/>
      <Blog/>
      <Footer/>
    </>
  )
}

export default Home
