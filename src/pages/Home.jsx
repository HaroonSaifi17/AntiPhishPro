import Blog from '../components/blog/Blog'
import Footer from '../components/footer/footer'
import Hero from '../components/hero/Hero'
import NavBar from '../components/navbar/NavBar'

function Home() {
  return (
    <>
      <NavBar />
      <Hero />
      <Blog/>
      <Footer/>
    </>
  )
}

export default Home
