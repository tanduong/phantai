import React from 'react';
import { technical } from './Data';

const Technical = () => {
  return (
    <article className="g-content__item">
      <h3>Technical</h3>
      <div className="g-content__2x">
        {technical.map((technical, index) => (
          <div className="skill" key={index}>
            <p className="head">
              <i className={technical.icon}></i>
              <span className={technical.per}></span>  
            </p>
            <p><strong>{technical.title}</strong>{technical.desc}</p>
          </div>
        ))}
      </div>
    </article>
  )
}

export default Technical;