import React from 'react';
import './about.css';
import Image from '../../assets/kid.png';
import AboutBox from './AboutBox';
const About = () => {
  const downloadFile = () => {
    const fileUrl = '../../../assets/CV.pdf';

    const a = document.createElement('a');
    a.href = fileUrl;
    a.download = 'Kidest-CV.pdf'; // Set the desired file name here
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };
  return (
    <section className="about container section" id="about">
      <h2 className="section__title">About Me</h2>
      <div className="about__container grid">
        <img src={Image} alt="" className="about__img" />
        <div className="about__data grid">
          <div className="about__info">
            <p className="about__description">
              I am Kidest Legesse, software developer from Addis Ababa,
              Ethiopia. I have rich experience in web site design and building
              and customization, also I am good at WordPress.
            </p>
            <button onClick={downloadFile} className="btn">
              Download CV
            </button>
            {/* <a href="public/assets/CV.pdf" className="btn">
              Download CV
            </a> */}
          </div>
          <div className="about__skills grid">
            <div className="skills__data">
              <div className="skills__titles">
                <h3 className="skills name">Back-end Development</h3>
                <span className="skills__number ">90%</span>
              </div>
              <div className="skills__bar">
                <span className="skills__percentage backend"></span>
              </div>
            </div>
            <div className="skills__data">
              <div className="skills__titles">
                <h3 className="skills name">Front-end Development</h3>
                <span className="skills__number ">85%</span>
              </div>
              <div className="skills__bar">
                <span className="skills__percentage frontend"></span>
              </div>
            </div>
            <div className="skills__data">
              <div className="skills__titles">
                <h3 className="skills name">WordPress Development</h3>
                <span className="skills__number ">100%</span>
              </div>
              <div className="skills__bar">
                <span className="skills__percentage wordpress"></span>
              </div>
            </div>
            <div className="skills__data">
              <div className="skills__titles">
                <h3 className="skills name">Qaulity Assurance</h3>
                <span className="skills__number ">100%</span>
              </div>
              <div className="skills__bar">
                <span className="skills__percentage quality"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <AboutBox /> */}
    </section>
  );
};

export default About;
