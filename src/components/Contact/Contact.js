import React from 'react';
import styled from 'styled-components';
import './Contact.css';
import Animation from '../../assets/images/animation1.png';
import AnimationTwo from '../../assets/images/animation2.png';

const ContactContainer = styled.section`
  &::after {
    content: url(${AnimationTwo});
    position: absolute;
    top: 240px;
    right: 210px;
  }
  &::before {
    content: url(${Animation});
    position: absolute;
    top: 340px;
    left: 210px;
  }
`;

export default function Contact() {
    return (
        <ContactContainer className="contact">
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
        </ContactContainer>
    );
}
