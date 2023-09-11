import React from 'react'
import './solutions.css'
import pink from '../../assets/promo-reports-pink.webp'
import yellow from '../../assets/promo-ugc-yellow.webp'

const Solutions = () => {
  return (
    <div className='solution'>
        <div className="scontainer">
        <div className="stitle">
            <h1>Solutions</h1>
        </div>
        <div className='scontent'>
            <div className="sleft">
                <img className='pink' src={yellow} alt="" />
                <h2>All content moderated</h2>
                <p>When handling user-created materials overnight is crucial. Create a remarkable platform for your users - relevant to sectors like gaming,dating, sharing economy, marketplace, communications and various other application</p>
            </div>
            <div className="sright">
            <img className='yellow' src={pink} alt="" />
                <h2>Reports & analytics built in</h2>
                <p>Gain insights to operate,expand, and comprehend your enterprise.Export data straight from Beside right to your email.Now you can produce executive-grade analyses with performance indicators for all your user-generated and content</p>
            </div>
            </div>
        </div>
    </div>
  )
}

export default Solutions