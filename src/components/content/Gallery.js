import React from 'react';
import { gallery } from './Data';

const Gallery = () => {
  return (
     <article className="g-content__item">
        <h3>Gallery</h3>
        <div className="g-content__1x">
          <div className="gallery">
          {gallery.map((src, index) => (
            <div className="gallery__img" key={index}>
              <img src={src} alt="Gallery"/>
              </div>
          ))}
          </div>
        </div>
      </article>
  )
}
export default Gallery;