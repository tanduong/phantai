import React from 'react';
import { education } from './Data';

const Education = () => {
  return (
    <React.Fragment>
      {education.map((education, index) => (
        <div className="g-content__right" key={index}>
          <h4>{education.position}</h4>
          <p>{education.note}</p>
          <p>{education.desc}</p>
          <p>{education.date}</p>
        </div>
      ))}
    </React.Fragment>
  )
}

export default Education;