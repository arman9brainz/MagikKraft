import React from 'react';
import backgroundImage from '../../assets/images/MagikKraft.png';
import './Details.css';

export default function Details() {
  const sectionStyle = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: '25% 159%',
  };

  return (
    <section className="MagikKraft-info" style={sectionStyle}>
      <div className="container">
        <div className="detailes">
          <p>
            At MagikKraft, we are committed to enhancing the potential of technology, while being mindful of its impact.
            Our aim is to provide powerful tools without causing any undue harm or unforeseen consequences. We
            prioritize privacy, user control, and creative freedom. As we journey along the path of intuitive and
            accessible technology, these guiding principles remain at our core.
          </p>
        </div>
      </div>
    </section>
  );
}
