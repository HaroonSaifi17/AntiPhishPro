import './Hero.css'
import myPhoto from '../../assets/heroGraphic.jpg'
function Hero() {
  return (
    <>
    <div className='hero-wpr'>
      <h2 className='hero-heading'>Real-Time URL and Website Sandbox</h2>
      <div className='search-wpr'>
        <div>
          <div className='search-button'>
            <a>URL SCAN</a>
            <a>IP/DOMAIN LOOKUP</a>
          </div>
          <div className='search'>
            <span>
              <input type='text' />
            </span>
            <a>SCAN</a>
            <a>
              <i class='fa-solid fa-gear'></i>
            </a>
          </div>
        </div>
      </div>
      <div className='hero-main'>
        <div>
          <h1>
            A comprehensive, flexible stategy for enhanced content regulation
          </h1>
          <p>
            Our Content Regulation Platform fuses Artificial Intelligence with
            human know-how to deliver a secure and exceptional user journey
            through precise real-time capacities. We forge a more secure and
            uplifting online environment for all.
          </p>
          <a className='hero-button1'>Contact Us</a>
          <a className='hero-button2'>More Details</a>
        </div>
        <div>
          <img src={myPhoto} alt='' />
        </div>
      </div>
    </div>
    </>
  )
}

export default Hero
