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
            <img src={card1} alt='' />
            <div>
              <span>press</span>
            </div>
            <h4>
              besedo Appoints Hanna Marklund As New Chief Financial Officer
            </h4>
            <p>
              besedo Is Delighted To Announce The Appointment Of Hanna Marklund
              As The Company's New Chief Financial Officer (CFO) Effective
              Immediately
            </p>
          </div>
          <div className='card'>
            <img src={card2} alt='' />
            <div>
              <span>trust and safety</span>
            </div>
            <h4>
              Building Trust and Safety: Why It Matters and How to Get It Right
            </h4>
            <p>
              Discover the Importance of Trust and Safety for Websites and Apps:
              Learn Effective Strategies and Explore Case Studies to Ensure a
              Secure User Experience
            </p>
          </div>
          <div className='card'>
            <img src={card3} alt='' />
            <div>
              <span>sharing economy</span>
            </div>
            <h4>
              Sharing Economy Vs. Online Marketplaces: Key Differences and
              Opportunities
            </h4>
            <p>
              Learn the Differences Between Sharing Economy Companies and Online
              Marketplaces, Plus a Look at Successful Sharing Economy Companies
              and Content Moderation.
            </p>
          </div>
          <div className='card'>
            <img src={card4} alt='' />
            <div>
              <span>UGC</span>
            </div>
            <h4>content Moderation Glossary</h4>
            <p>
              Get in the Know with Our Ultimate Glossary of Content Moderation:
              From UGC to AI-Powered Moderation, We've Got You Covered. Learn
              the Lingo Now!
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Blog
