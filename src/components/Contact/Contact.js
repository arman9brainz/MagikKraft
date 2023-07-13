import React from 'react'
import './Contact.css'
export default function Contact() {
    return (
        <section className="contact">
            <div className="container">
                <div className="contact-title">
                    <h1>Join the Waitlist for Early Access</h1>
                    <p>Sign Up Now</p>
                </div>
                <div className="contact-form">
                    <form>
                        <input type="email" name="" id="" placeholder="Enter your email" />
                        <input type="email" name="" id="" placeholder="Enter Your Name" />
                        <button type="submit">Join Now</button>
                    </form>
                </div>
            </div>
        </section>
    )
}
