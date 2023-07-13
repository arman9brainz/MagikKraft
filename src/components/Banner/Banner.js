import React from 'react'
import './Banner.css'
export default function Banner() {
  return (
    <section>
      <div className="container">
        <div className="banner">
          <div className="banner-detailes">
            <div className="banner-Title">
              <h1>Tailored Technology Made Easy with <span> MagikKraft</span></h1>
            </div>
            <div className="banner-subtitle">
              <p>Simplify complex controls. Our AI-powered platform lets you create your own interaction recion,
                and deploy with ease</p>
              <button className="Banner-button">Join the Waitlist</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
