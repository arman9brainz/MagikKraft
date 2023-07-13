
import React, { useState } from 'react';
import './Faqs.css';

export default function Faqs() {
  const [activeAccordion, setActiveAccordion] = useState(null);

  const toggleAccordion = (index) => {
    setActiveAccordion(activeAccordion === index ? null : index);
  };

  return (
    <section>
      <div className="container">
        <div className="FAQs-Title">
          <h1>FAQs</h1>
        </div>
        <div className="FAQs-accordion">
          <button className={`accordion ${activeAccordion === 0 ? 'active' : ''}`} onClick={() => toggleAccordion(0)}>
            What is MagikKraft?
          </button>
          <div className="panel" style={{ maxHeight: activeAccordion === 0 ? '500px' : '0', border: activeAccordion === 0 ? '1px solid #fff3' : null }}>
            <p> MagikKraft is an AI-powered platform that enables you to personalize the sequences and actions of your programmable
              devices, like drones, automated appliances, or self-driving vehicles.</p>
          </div>

          <button className={`accordion ${activeAccordion === 1 ? 'active' : ''}`} onClick={() => toggleAccordion(1)}>
            What is MagikKraft?
          </button>
          <div className="panel" style={{ maxHeight: activeAccordion === 1 ? '500px' : '0', border: activeAccordion === 1 ? '1px solid #fff3' : null }}>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          </div>


          <button className={`accordion ${activeAccordion === 2 ? 'active' : ''}`} onClick={() => toggleAccordion(2)}>
            How does MagikKrat work?
          </button>
          <div className="panel" style={{ maxHeight: activeAccordion === 2 ? '500px' : '0', border: activeAccordion === 2 ? '1px solid #fff3' : null }}>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          </div>


          <button className={`accordion ${activeAccordion === 3 ? 'active' : ''}`} onClick={() => toggleAccordion(3)}>
            What can I do with MagikKraft?
          </button>
          <div className="panel" style={{ maxHeight: activeAccordion === 3 ? '500px' : '0', border: activeAccordion === 3 ? '1px solid #fff3' : null }}>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          </div>

          <button className={`accordion ${activeAccordion === 4 ? 'active' : ''}`} onClick={() => toggleAccordion(4)}>
            Does MagikKraft harm my device's existing functionalities?
          </button>
          <div className="panel" style={{ maxHeight: activeAccordion === 4 ? '500px' : '0', border: activeAccordion === 4 ? '1px solid #fff3' : null }}>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          </div>

          <button className={`accordion ${activeAccordion === 5 ? 'active' : ''}`} onClick={() => toggleAccordion(5)}>
            How can I gain early access to MagikKraft?
          </button>
          <div className="panel" style={{ maxHeight: activeAccordion === 5 ? '500px' : '0', border: activeAccordion === 5 ? '1px solid #fff3' : null }}>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

