import './App.css'
import Home from './pages/home/Home'
import Signup from './pages/signup/Signup'
import Login from './pages/login/Login'
import { Routes, Route} from 'react-router-dom'
import Result from './pages/results/Result'

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/results' element={<Result/>}/>
      </Routes>
    </>
  )
}

export default App
