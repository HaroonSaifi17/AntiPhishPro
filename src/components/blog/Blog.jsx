import './Blog.css'
import card1 from '../../assets/card1.webp'
import card2 from '../../assets/card2.webp'
import card3 from '../../assets/card3.webp'
import card4 from '../../assets/card4.webp'

function Blog() {
  return (
    <>
      <div className='blog-wpr'>
        <h1>From Our Blogs</h1>
        <div className='flex-wpr'>
          <div className='card'>
            <img src="https://todaysoftmag.com/images/articles/tsm96/large/a41.png" alt='' />
            <div>
              <span>Phishing</span>
            </div>
            <h4>
              The Art of Phishing: How Scammers Lure You In"
            </h4>
            <p>
              Common phishing tactics (email, social engineering, fake websites).
Real-world examples of phishing attempts
            </p>
          </div>
          <div className='card'>
            <img src={card2} alt='' />
            <div>
              <span>AI</span>
            </div>
            <h4>
              The Role of Artificial Intelligence in Phishing Defense
            </h4>
            <p>
              Explanation of how AI can detect and prevent phishing attacks.
Benefits of AI-powered phishing detection
            </p>
          </div>
          <div className='card'>
            <img src={card3} alt='' />
            <div>
              <span>Attacking</span>
            </div>
            <h4>
              Phishing Beyond Email: Exploring New Attack Vectors
            </h4>
            <p>
              Beyond email phishing: SMS, voice, and social media.
Case studies of non-email phishing attacks
            </p>
          </div>
          <div className='card'>
            <img src={card4} alt='' />
            <div>
              <span>Trends</span>
            </div>
            <h4>Phishing Trends in 2023: What to Watch Out For</h4>
            <p>
              Emerging tactics used by cybercriminals.
Protective measures to adopt in light of new threats.
            </p>
          </div>
        </div>
          <p className='more'><span>All Posts</span></p>
      </div>
    </>
  )
}

export default Blog
