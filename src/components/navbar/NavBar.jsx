import './NavBar.css'
import { Link, useNavigate } from 'react-router-dom'

function NavBar() {
  const navigate = useNavigate()
  return (
    <>
    <div className='wpr-main'>
      <div className='nav-wpr'>
        <div className="logo">
          <a>
            <i className='fa-solid fa-shield-virus'></i>
            <span>AntiPhishPro</span>
          </a>
        </div>
        <div className='list'>
          <ul>
            <li>
              <a href='#Home'>Home</a>
              <a href='#Solution'>Solutions</a>
              <a href='#Reports'>Reports</a>
              <a>Community</a>
              <a href='#blog'>Blog</a>
            </li>
          </ul>
        </div>
        <div className='login-wpr'>
          <a onClick={()=>{navigate('/signup')}}>Sign Up</a>
          <a onClick={()=>{navigate('/login')}}>Login</a>
        </div>
      </div>
    </div>
    </>
  )
}

export default NavBar
