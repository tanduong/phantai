import React from 'react';


const skill = [
  {
    title: 'COMMUNICATION',
    percent: 'p80'
  },
  {
    title: 'TEAMWORK',
    percent: 'p80'
  },
  {
    title: 'CREATIVITY',
    percent: 'p80'
  },
  {
    title: 'ORGANIZATION',
    percent: 'p80'
  },
  {
    title: 'LEADERSHIP',
    percent: 'p80'
  },
  {
    title: 'TEAMPLAYER',
    percent: 'p80'
  },
];
const NavSkill = () => {
  return(
     <div className="g-item">
        <h3>Experience & Skills</h3>
        <ul>
          {skill.map((skill, index) => (
            <li key={index}>
              <p>{skill.title}<span className={skill.percent}></span></p>
            </li>
          ))}
        </ul>
      </div>
  )
}
export default NavSkill;
