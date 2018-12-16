import React from 'react';


const imageSrc = [
  {
    phone: './img/phone.png',
    alt: 'phone'
  },
  {
    mail: './img/mail.png',
    alt: 'mail'
  },
  {
    url: './img/url.png',
    alt: 'url'
  },
  {
    location: './img/location.png',
    alt: 'location'
  },
]


const NavContact = () => {
  return (
    <div className="g-item">
      <h3>Gallery & Contact</h3>
      <ul className="contact-details">
      <li>
        <a href="/"><img src={imageSrc[0].phone} alt={imageSrc[0].alt}/>+84 919 664 350</a>
      </li>
      <li>
        <a href="/"><img src={imageSrc[1].mail} alt={imageSrc[1].mail}/>taicnit@email.com</a>
      </li>
      <li>
        <a href="/"><img src={imageSrc[2].url} alt={imageSrc[2].alt}/>www.phantai.herokuapp.com</a>
      </li>
      <li>
        <a href="/"><img src={imageSrc[3].location} alt={imageSrc[3].alt}/>Ho Chi Minh City</a>
      </li>
    </ul>
  </div>
  )
}
export default NavContact;