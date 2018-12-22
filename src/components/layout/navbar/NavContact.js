import React from 'react';

const imageSrc = [
  {
    img: './img/phone.png',
    info: '+84 919 664 350',
    alt: 'phone',
  },
  {
    img: './img/mail.png',
    info: 'taicnit@email.com',
    alt: 'mail',
  },
  {
    img: './img/url.png',
    info: 'www.phantai.herokuapp.com',
    alt: 'url',
  },
  {
    img: './img/location.png',
    info: 'Ho Chi Minh City',
    alt: 'location',
  },
];

const NavContact = () => {
  return (
    <div className="g-item">
      <h3>Gallery & Contact</h3>
      <ul className="contact-details">
        {imageSrc.map(({img, alt, info}, index) => (
          <li key={index}>
            <a href="/">
              <img src={img} alt={alt} />
              {info}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default NavContact;
