import React from 'react';

const Card = (props) => {
  console.log({ props });
  console.log(props.desc);
  return (
    <div className="timeline__item">
      <i className={props.icon}></i>
      <span className="timeline__date">{props.year}</span>
      <h3 className="timeline__title">{props.title}</h3>
      <h4 className="timeline__subtitle">{props.subtitle}</h4>
      <p className="timeline__text">
        <ul className="list">
          {props.desc.map((des) => {
            return <li>{des}</li>;
          })}
        </ul>
      </p>
    </div>
  );
};

export default Card;
