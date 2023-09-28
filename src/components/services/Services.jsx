import React from 'react';
import './services.css';
import Image1 from '../../assets/OIP.jpg';
import Image2 from '../../assets/iStock-1217177624 (2).jpg';
import Image3 from '../../assets/process1.jpg';

const data = [
  {
    id: 1,
    image: Image1,
    title: 'Backend Development',
    description: [
      'Mobile application development',
      'Web application development',
      'Backend refactoring',
      'Cloud backend solutions',
      'Support and maintenance',
    ],
  },
  {
    id: 2,
    image: Image2,
    title: 'Frontend Development',
    description: [
      'Mobile application development',
      'Web application development',
      'Frontend as a service',
      'PSD to Bootstrap',
      'UI/UX Designing',
    ],
  },
  {
    id: 3,
    image: Image3,
    title: 'WordPress Development',
    description: [
      'Custom WordPress website development',
      'Theme development and customization',
      'WooCommerce development',
      'WordPress plugin development',
      'Blog development',
      'API integration and customization',
    ],
  },
];

const Services = () => {
  return (
    <section className="services container section" id="services">
      <h2 className="section__title">Services</h2>
      <div className="services__container grid">
        {data.map(({ id, image, title, description }) => {
          return (
            <div className="services__card" key={id}>
              <img src={image} alt="" className="services__img " />
              <h3 className="services__title">{title}</h3>
              <div className="services__description">
                <div>
                  <ul className="list">
                    {description.map((desc) => {
                      return <li>{desc}</li>;
                    })}
                  </ul>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Services;
