import './Hero.css'

import myPhoto from '../../assets/hero-g3.jpg'
function Hero() {
  return (
    <>
      <div className='main-hero-wpr'>
        <div className='hero-wpr'>
          <h2 className='hero-heading'>
            Secure Your Link: Before You Click, Let AI Verify.
          </h2>
          <div className='search-wpr'>
            <div>
              <div className='search-button'>
                <a>URL SCAN</a>
                <a>URL PREVIEW</a>
              </div>
              <div className='search'>
                <span>
                  <input type='text' />
                </span>
                <a>SCAN</a>
                <a>
                  <i className='fa-solid fa-gear'></i>
                </a>
              </div>
            </div>
          </div>
          <div className='hero-main'>
            <div>
              <h1>No Phishing Allowed: AI Smartness Meets Web Detective</h1>
              <p>
                Our advanced AI models work tirelessly to ensure your online
                safety. Simply paste a URL, and we'll verify its authenticity,
                keeping you protected from phishing threats. Explore the web
                with confidence, knowing that we've got your back.
              </p>
              <a className='hero-button1'>Contact Us</a>
              <a className='hero-button2'>More Details</a>
            </div>
            <div>
              <img src={myPhoto} alt='' />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Hero
