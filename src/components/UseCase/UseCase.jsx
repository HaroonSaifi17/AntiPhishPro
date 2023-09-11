import React from "react";
import "./useCase.css";
import logo1 from '../../assets/Frame.svg'
import logo3 from '../../assets/Group-2.svg'
import logo2 from '../../assets/Group-3.svg'

const UseCase = () => {
  return (
    <div className="usecase">
      <div className="container">
        <div className="utitle">
          <h1>
            Use Cases:<b>&nbsp;Unleash The Power Of PHSINH Detection</b>
          </h1>
          <p>
            You work hard to build long-term relationships with customers, and
            content is a key part of that. One bad interaction can compromise
            the user experience and lose an advocate for your brand. Content
            moderation secures your userbase, your brand, and your revenue.
          </p>
        </div>
      </div>
      <div className="ucontent">
        <div className="udesc">
          <div className="u1">
            <img src={logo1} alt="" />
            <h1>AI & Automation</h1>
            <p>Real-time AI-powered morderation with deep learning creates an ideal user experience and solves your content challenges.</p>
          </div>
          <div className="u2">
          <img src={logo2} alt="" />
          <h1>Human-Manual</h1>
          <p>Efficiently scale your manual moderation with our experienced team & proven processes. Ensure continuous improvement for optimal user experience.</p>
          </div>
          <div className="u3">
          <img src={logo3} alt="" />
          <h1>Custom Solutions</h1>
          <p>Combine artificial intelligence expertise with human insight, ensuring total coverage on a user-friendly platform.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UseCase;
