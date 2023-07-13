import React from 'react'
import './Work.css'
import { Craft, Simulate, Deploy } from '../../assets'
export default function Work() {
  return (
    <section>
      <div className="container">
        <div className="box-Title">
          <h1>How It Works.</h1>
        </div>
        <div className="work-detailesbox">
          <div className="work-box">
            <div className="work-boximg">
              <img src={Craft} alt='' />
            </div>
            <div className="work-box-Title">
              <h1>Craft</h1>
              <p className="work-box-subTitle">Pair your devices and compose customized recipes through our AI-powered tool.
              </p>
            </div>
          </div>
          <div className="work-box">
            <div className="work-boximg">
              <img src={Simulate} alt='' />
            </div>
            <div className="work-box-Title">
              <h1>Simulate</h1>
              <p className="work-box-subTitle">Test your sequences in our virtual playground, finetune and perfect them in real-time.
              </p>
            </div>
          </div>
          <div className="work-box">
            <div className="work-boximg">
              <img src={Deploy} alt='' />
            </div>
            <div className="work-box-Title">
              <h1>Deploy</h1>
              <p className="work-box-subTitle">Send your perfected sequences to your device and watch them perform in the real world.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

  )
}
