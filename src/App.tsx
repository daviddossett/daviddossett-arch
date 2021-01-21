import React from 'react';
import headshot from '../src/images/headshot.jpg';
import './App.css';

function App() {
  return (
    <div className="app">
      <div className="content">
        <section className="header">
          <img src={headshot} className={'headshot'} alt='My headshot' />
          <h1>David Dossett</h1>
          <p className={'role'}>Designer & Developer</p>
        </section>
        <section>
          <h2>Currently</h2>
          <h3>Microsoft</h3>
          <p>Senior Designer (2016 - Present)</p>
        </section>
        <section>
          <h2>Projects</h2>
          <h3>Coming soon</h3>
        </section>
        <section>
          <h2>Figma plugins</h2>
          <h3>Coming soon</h3>
        </section>
        <section className={'links'}>
          <a href={'/'}>Twitter -&gt;</a>
          <a href={'/'}>GitHub -&gt;</a>
          <a href={'/'}>Instagram -&gt;</a>
          <a href={'/'}>LinkedIn -&gt;</a>
        </section>
      </div>
    </div>
  );
}

export default App;
