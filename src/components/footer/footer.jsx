import './footer.css'

function Footer() {
  return (
    <>
      <div className='f-wpr'>
      <footer>
        <div className='flex2'>
          <div>
            <h5>CONTACT</h5>
            <a>example@gmail.com</a>
            <a>222-222-333</a>
            <a>222-222-444</a>
          </div>
          <div>
            <h5>INORMATION</h5>
            <a>About Us</a>
            <a>Contact Us</a>
          </div>
          <div>
            <h5>SERVICES</h5>
            <a>Live dectactor</a>
            <a>Blog</a>
            <a>Community</a>
          </div>
        </div>
        <div className='icons'>
          <i class="fa-brands fa-instagram"></i>
          <i class="fa-brands fa-whatsapp"></i>
          <i class="fa-brands fa-linkedin"></i>
        </div>
        <p>&copy; 2023 AntiPhishPro. All rights reserved.</p>
      </footer>
      </div>
    </>
  )
}

export default Footer
