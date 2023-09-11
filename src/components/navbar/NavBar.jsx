
import "./NavBar.css";
import { Link,useNavigate } from "react-router-dom";

function NavBar() {
  const navigate = useNavigate();
  return (
    <>
      <div className="nav">
        <div className="container">
          <div className="titles">
            <Link to="/" className='nav-link'>
              <h3>Solutions</h3>
            </Link>
            <Link to="/" className='nav-link'>
              <h3>Use Cases</h3>
            </Link>
            <Link to="/" className='nav-link'>
              <h3>Blog</h3>
            </Link>
            <Link to="/" className='nav-link'>
              <h3>Offers</h3>
            </Link>
            <Link to="/" className='nav-link'>
              <h3>Resources</h3>
            </Link>
          </div>
          <div className="buttons">
            <button onClick={()=>navigate('/signup')}>Sign Up</button>
            <button onClick={()=>navigate('/login')}>Login</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default NavBar;
