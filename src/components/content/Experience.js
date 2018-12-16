import React from 'react';
import { experience } from './Data';

const Experience = () => {
  return (
    <article className="g-content__item">
        <h3>Experience</h3>
      {experience.map((experience, index) => (
        <div className="g-content__1x" key={index}>
          <h4>{experience.position}</h4>
          <p>{experience.desc}</p>
          <p>{experience.client}</p>
          <p>{experience.tech}</p>
          <p>{experience.date}</p>
        </div>
      ))}
    </article>
  )
}

export default Experience;