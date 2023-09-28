import React from 'react';
import './home.css';
import Me from '../../assets/kid.png';
import HeaderSocials from './HeaderSocials';
import ScrollSown from './ScrollSown';
import Shapes from './Shapes';

const Home = () => {
  return (
    <section className="home container" id="home">
      <div className="intro">
        <img src={Me} alt="" className="home__img" />
        <h1 className="home__name">Kidest Legesse</h1>
        <span className="home__education">I'm a Software Developer</span>
        <HeaderSocials />
        <a href="#contact" className="btn">
          Hire ME
        </a>
        <ScrollSown />
      </div>
      <Shapes />
    </section>
  );
};

export default Home;
