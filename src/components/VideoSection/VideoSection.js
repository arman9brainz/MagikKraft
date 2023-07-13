import React from 'react'
import './VideoSection.css'
import { BannerImage } from '../../assets'
import { useTypewriter, Cursor } from "react-simple-typewriter";
export default function VideoSection() {
  const [text] = useTypewriter({
    words: ["1. Water the red roses on the farm evenly from an elevation of 8 feet and provide notification when completed.",
    "2. Monitor the car's progress through the winding mountain road by following it from behind at a height of 20 feet and a distance of 15 feet.",
  "3. Keep track of the lead actor's movements during the chase sequence from the front, maintaining a distance of 10 feet and an altitude of 5 feet."],
    loop: true,
    typeSpeed: 20,
    deleteSpeed: 20,
    delaySpeed: 2000,
  });

  return (
    <section>
      <div className="container">
        <div className="video-detailes">
          <div className="video-Title">
            <svg xmlns="http://www.w3.org/2000/svg" width="31" height="31" viewBox="0 0 31 31" fill="none">
              <path
                d="M19.8026 7.42742L21.5651 10.9524C21.8026 11.4399 22.4401 11.9024 22.9776 12.0024L26.1651 12.5274C28.2026 12.8649 28.6776 14.3399 27.2151 15.8149L24.7276 18.3024C24.3151 18.7149 24.0776 19.5274 24.2151 20.1149L24.9276 23.1899C25.4901 25.6149 24.1901 26.5649 22.0526 25.2899L19.0651 23.5149C18.5276 23.1899 17.6276 23.1899 17.0901 23.5149L14.1026 25.2899C11.9651 26.5524 10.6651 25.6149 11.2276 23.1899L11.9401 20.1149C12.0776 19.5399 11.8401 18.7274 11.4276 18.3024L8.94014 15.8149C7.47764 14.3524 7.95263 12.8774 9.99013 12.5274L13.1776 12.0024C13.7151 11.9149 14.3526 11.4399 14.5901 10.9524L16.3526 7.42742C17.2901 5.51492 18.8401 5.51492 19.8026 7.42742Z"
                stroke="url(#paint0_linear_1_168)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M10.5651 7.16492H3.06506" stroke="url(#paint1_linear_1_168)" stroke-width="1.5"
                stroke-linecap="round" stroke-linejoin="round" />
              <path d="M6.81506 24.6649H3.06506" stroke="url(#paint2_linear_1_168)" stroke-width="1.5"
                stroke-linecap="round" stroke-linejoin="round" />
              <path d="M4.31506 15.9149H3.06506" stroke="url(#paint3_linear_1_168)" stroke-width="1.5"
                stroke-linecap="round" stroke-linejoin="round" />
              <defs>
                <linearGradient id="paint0_linear_1_168" x1="8.09082" y1="25.8569" x2="28.0645" y2="25.8569"
                  gradientUnits="userSpaceOnUse">
                  <stop stop-color="#DE0243" />
                  <stop offset="1" stop-color="#8733FE" />
                </linearGradient>
                <linearGradient id="paint1_linear_1_168" x1="3.06506" y1="8.16492" x2="10.5651" y2="8.16492"
                  gradientUnits="userSpaceOnUse">
                  <stop stop-color="#DE0243" />
                  <stop offset="1" stop-color="#8733FE" />
                </linearGradient>
                <linearGradient id="paint2_linear_1_168" x1="3.06506" y1="25.6649" x2="6.81506" y2="25.6649"
                  gradientUnits="userSpaceOnUse">
                  <stop stop-color="#DE0243" />
                  <stop offset="1" stop-color="#8733FE" />
                </linearGradient>
                <linearGradient id="paint3_linear_1_168" x1="3.06506" y1="16.9149" x2="4.31506" y2="16.9149"
                  gradientUnits="userSpaceOnUse">
                  <stop stop-color="#DE0243" />
                  <stop offset="1" stop-color="#8733FE" />
                </linearGradient>
              </defs>
            </svg>
            <>
              <span>{text}</span>
              <Cursor
                cursorBlinking="false"
                cursorStyle="|"
              />
            </>
          </div>
        </div>
        <div className="Banner-video">
          <img src={BannerImage} alt='' />
        </div>
      </div>
    </section>
  )
}
