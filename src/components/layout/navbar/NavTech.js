import React from 'react';


const technical = [
  {
    title: 'REACTJS',
    percent: 'p80',
  },
  {
    title: 'JAVASCRIPT',
    percent: 'p80',
  },
  {
    title: 'HTML5',
    percent: 'p80',
  },
  {
    title: 'SASS',
    percent: 'p80',
  },
  {
    title: 'CSS3',
    percent: 'p80',
  },
  {
    title: 'BOOTSTRAP',
    percent: 'p80',
  },
  {
    title: 'JQUERY',
    percent: 'p80',
  },
  {
    title: 'GULP',
    percent: 'p80',
  },
  {
    title: 'NODEJS',
    percent: 'p80',
  },
  {
    title: 'GIT',
    percent: 'p80',
  },
  {
    title: 'PHOTOSHOP',
    percent: 'p80',
  },
  {
    title: 'ILLUSTRATOR',
    percent: 'p80',
  },
]
const NavTech = () => {
  return (
    <div className="g-item">
      <h3>Technical</h3>
      <ul>
        {technical.map((technical,index) => (
          <li key={index}>
            <p>
              {technical.title}<span className={technical.percent}></span>
            </p>
          </li>
        ))}
      </ul>
    </div>
  )
}
export default NavTech;