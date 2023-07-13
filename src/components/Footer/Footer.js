import React from 'react'
import './Footer.css'
import { Facebook, Instagrma, LinkedIn, footerLogo } from '../../assets'
export default function Footer() {
  return (
    <footer>
      <div className="footer">
        <div className="footer-logo">
          <a href=""><img src={footerLogo} alt='' /></a>
          <p>Dream. Design. Deploy</p>
        </div>
        <div>
          <p>©2021 <span className="copyright"> MagikKraft</span></p>
        </div>
        <div className="follow-link">
          <p>Follow Us on Social Media</p>
          <div className="follow-icone">
            <a href=""> <img src={Facebook} alt='' /></a>
            <a href=""> <img src={Instagrma} alt='' /></a>
            <a href=""><img src={LinkedIn} alt='' /></a>
          </div>
        </div>
      </div>
    </footer>
  )
}
