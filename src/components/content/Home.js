import React from 'react';
import Experience from './Experience';
import Education from './Education';


const Home = () => {
  return (
    <React.Fragment>
      <article className="g-content__item">
        <h3>About</h3>
        <p>I have been interested in all things related to Front-End Development for many years.
          So far I have worked with a range of clients from international media companies.
          I also researched more about back end serving his coding passion like javascript, nodejs ...</p>
      </article>
      <article className="g-content__item">
        <h3>Education</h3>
        <div className="g-content__2x">
          <Education />
        </div>
      </article>
      <Experience />
    </React.Fragment>
  )
}


export default Home;