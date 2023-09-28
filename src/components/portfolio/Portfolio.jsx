import React, { useState } from 'react';
import './portfolio.css';
import Work1 from '../../assets/eGP.jpg';
import Work2 from '../../assets/recent-work.jpg';
import Work3 from '../../assets/Geez.jpg';
import { Image } from '@mantine/core';
import { Link } from '@mui/material';

const Menu = [
  {
    id: 1,
    image: Work1,
    title: 'Manual and Automation Testing',
    category: 'Web Development',
    link: 'https://egp.ppa.gov.et/egp/home',
  },
  {
    id: 2,
    image: Work2,
    title: 'Backend and Frontend Developmet',
    category: 'Web Development',
    link: 'https://perago-information-systems-website.vercel.app/',
  },
  {
    id: 3,
    image: Work3,
    title: 'WordPress Development',
    category: 'WordPress Development',
    link: 'https://geeztechnology.com/',
  },
];

const Portfolio = () => {
  const [items, setItems] = useState(Menu);
  const filterItem = (catregoryItem) => {
    const updatedItems = Menu.filter((curElem) => {
      return curElem.category === catregoryItem;
    });
    setItems(updatedItems);
  };
  return (
    <section className="work container section" id="work">
      <h2 className="section__title">Recent Works</h2>
      <div className="work__filters">
        <span className="work__item" onClick={() => setItems(Menu)}>
          All Works
        </span>
        <span
          className="work__item"
          onClick={() => filterItem('Web Development')}
        >
          Web Development
        </span>

        <span
          className="work__item"
          onClick={() => filterItem('WordPress Development')}
        >
          WordPress Development
        </span>
      </div>
      <div className="work__container grid">
        {items.map((elem) => {
          const { id, image, link, category } = elem;
          return (
            <div className="work__card" key={id}>
              <Link href={link} target={link}>
                <Image src={image} alt="" style={{ height: '250px' }} />
              </Link>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;

// import React, { useState } from 'react';
// import './portfolio.css';
// import Work1 from '../../assets/eGP.jpg';
// import Work2 from '../../assets/recent-work.jpg';
// import Work3 from '../../assets/Geez.jpg';
// import { Image } from '@mantine/core';
// import { Link } from '@mui/material';

// const Menu = [
//   {
//     id: 1,
//     image: Work1,
//     title: 'Manual and Automation Testing',
//     category: 'Software Testing',
//   },
//   {
//     id: 2,
//     image: Work2,
//     title: 'Backend and Frontend Development',
//     category: 'Web Development',
//   },
//   {
//     id: 3,
//     image: Work3,
//     title: 'WordPress Development',
//     category: 'WordPress Development',
//   },
// ];

// const Portfolio = () => {
//   const [items, setItems] = useState(Menu);

//   const filterItem = (categoryItem) => {
//     const updatedItems = Menu.filter(
//       (curElem) => curElem.category === categoryItem
//     );
//     setItems(updatedItems);
//   };

//   return (
//     <section className="work container section" id="work">
//       <h2 className="section__title">Recent Works</h2>
//       <div className="work__filters">
//         <div>
//           <span className="work__item" onClick={() => setItems(Menu)}>
//             All Works
//           </span>
//         </div>
//         <div>
//           <span
//             className="work__item"
//             onClick={() => filterItem('Web Development')}
//           >
//             Web Development
//           </span>
//           <div className="work__container grid">
//             <Link href="https://geeztechnology.com/">
//               <Image className="work__img" src={Work2} />
//             </Link>
//           </div>
//         </div>
//         <div>
//           <span
//             className="work__item"
//             onClick={() => filterItem('WordPress Development')}
//           >
//             WordPress Development
//           </span>
//           <div className="work__container grid">
//             <div className="work__card">
//               <Link href="https://geeztechnology.com/">
//                 <Image className="work__img" src={Work3} />
//               </Link>
//             </div>
//           </div>
//         </div>
//       </div>
//       <div className="work__container grid">
//         {items.map((item) => (
//           <div className="work__card" key={item.id}>
//             <span className="work__category">{item.category}</span>
//             <h3 className="work__title">{item.title}</h3>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default Portfolio;
