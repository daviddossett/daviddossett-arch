import React from 'react';
import headshot from '../src/images/headshot.jpg';
import './App.css';

function App() {
  return (
    <div className="app">
      <div className="content">
        <section className="header">
          <img src={headshot} className={'headshot'} alt='My headshot' />
          <h1>&#128075;&nbsp;Hi, I'm David </h1>
          <p className={'role'}>I'm a designer and developer at Microsoft</p>
        </section>
        {/* <section>
          <h2>Currently</h2>
          <h3>Microsoft</h3>
          <p>Senior Designer (2016 - Present)</p>
        </section> */}
        <section>
          <h2>Projects  &#128679;</h2>
          <h3><a href={'https://filmandcolor.co'} target="blank">filmandcolor</a></h3>
          <p>Color palettes generated from your favorite movie stills. Built with React, Clarifai, and more.</p>
          <br/>
        </section>
        <section>
          <h2>Figma plugins &#128679;</h2>
        </section>
        <section className={'links'}>
          <a href={'https://twitter.com/david_dossett'} target="blank">Twitter -&gt;</a>
          <a href={'https://github.com/mistople'} target="blank">GitHub -&gt;</a>
          <a href={'https://www.instagram.com/david_dossett/'} target="blank">Instagram -&gt;</a>
          <a href={'https://www.linkedin.com/in/davidcdossett/'} target="blank">LinkedIn -&gt;</a>
        </section>
      </div>
    </div>
  );
}

export default App;
