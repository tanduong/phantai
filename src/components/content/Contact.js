import React from 'react';
import Gallery from './Gallery';

const Contact = () => {
  return(
    <React.Fragment>
      <Gallery />
      <article className="g-content__item">
        <h3>Contact</h3>
        <div className="g-content__1x">
          <form action="" className="form-contact">
            <label>Your Name</label>
            <input type="text" placeholder="Enter your name" />
            <label>Your Email</label>
            <input type="email" placeholder="Enter your email" />
            <label>Message</label>
            <textarea id="" cols="30" rows="10" placeholder="Messages"></textarea>
            <button type="submit">Submit</button>
          </form>
        </div>
      </article>
    </React.Fragment>
   )
}
export default Contact;