import React, { useState } from 'react';
import './CardSlider.css';

// Import necessary Font Awesome components
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch,faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const Cards = () => {
  const [position, setPosition] = useState(0);

  const cards = [
    {
      title: 'Clascoterone D6',
      imagePath: 'https://artisbiotech.com/cms/attachment/AI0550.PNG',
      subtitle1: 'STABLE ISOTOPES',
      subtitle2: 'CAS Number: NA',
      buttonLabel: 'View Details',
    },
    {
      title: 'Clenproperol D7',
      imagePath:'https://artisbiotech.com/cms/attachment/AC0940.PNG',
      subtitle1: 'STABLE ISOTOPES',
      subtitle2: 'CAS Number: 1173021-09-4',
      buttonLabel: 'View Details',
    },
    {
      title: 'Perindopril D4',
      imagePath: 'https://artisbiotech.com/cms/attachment/AI0532.PNG',
      subtitle1: 'STABLE ISOTOPES',
      subtitle2: 'CAS Number: 1356929-58-2',
      buttonLabel: 'View Details',
    },
    {
        title: 'Bisoprolol D5 Fumarate',
        imagePath: 'https://artisbiotech.com/cms/attachment/AI0531.PNG',
        subtitle1: 'STABLE ISOTOPES',
        subtitle2: 'CAS Number : 1189881-87-5',
        buttonLabel: 'View Details',
      },
      {
        title: 'Prindoprilat D4',
        imagePath: 'https://artisbiotech.com/cms/attachment/AI0530.PNG',
        subtitle1: 'STABLE ISOTOPES',
        subtitle2: 'CAS Number : 1356841-18-3',
        buttonLabel: 'View Details',
      },
      {
        title: 'Beta-Methylcholine chloride D3 ',
        imagePath: 'https://artisbiotech.com/cms/attachment/AI0510.PNG',
        subtitle1: 'STABLE ISOTOPES',
        subtitle2: 'CAS Number : NA',
        buttonLabel: 'View Details',
      },
      {
        title: 'Cefixime 13C 15N2 ',
        imagePath: 'https://artisbiotech.com/cms/attachment/AI0475.PNG',
        subtitle1: 'STABLE ISOTOPES',
        subtitle2: 'CAS Number : NA',
        buttonLabel: 'View Details',
      },
      {
        title: 'Farnesol D6 ',
        imagePath: 'https://artisbiotech.com/cms/attachment/AI0467.PNG',
        subtitle1: 'STABLE ISOTOPES',
        subtitle2: 'CAS Number : 166447-71-8',
        buttonLabel: 'View Details',
      },
      {
        title: 'Folic Acid D4 ',
        imagePath: 'https://artisbiotech.com/cms/attachment/AI0466.PNG',
        subtitle1: 'STABLE ISOTOPES',
        subtitle2: 'CAS Number : 171777-72-3',
        buttonLabel: 'View Details',
      },
      {
        title: 'Everolimus D4 ',
        imagePath: 'https://artisbiotech.com/cms/attachment/AI0465.PNG',
        subtitle1: 'STABLE ISOTOPES',
        subtitle2: 'CAS Number : 1338452-54-2',
        buttonLabel: 'View Details',
      },

    // Add more cards with button labels as needed
  ];

  const handlePrev = () => {
    if (position === 0) {
      setPosition(cards.length - 1);
    } else {
      setPosition(position - 1);
    }
  };

  const handleNext = () => {
    if (position === cards.length - 1) {
      setPosition(0);
    } else {
      setPosition(position + 1);
    }
  };

  const handleCardButtonClick = (index) => {
    // Handle button click for the specific card index
    console.log(`Button clicked for card at index ${index}`);
  };

  return (
    <div>
        <div className="cards-heading">
        <h1>NEW RELEASED PRODUCTS</h1>
        <div class="line"></div>
        <FontAwesomeIcon icon={faShoppingCart} className="shopping-icon" />
        <div class="line"></div>
      </div>
      <div className="card-slider">
        <div className="card-list" style={{ transform: `translateX(${position * -200}px)` }}>
          {cards.map((card, index) => (
            <div key={index} className="card">
              <img src={card.imagePath} alt={card.title} />
              <div className="card-body">
                <h2>{card.title}</h2>
                <p>{card.subtitle1}</p>
                <p>{card.subtitle2}</p>
                <button onClick={() => handleCardButtonClick(index)} className="search-button">
                  <FontAwesomeIcon icon={faSearch} />
                  {card.buttonLabel}
                </button>
              </div>
            </div>
          ))}
        </div>
        <button className="prev" onClick={handlePrev}>&#10094;</button>
        <button className="next" onClick={handleNext}>&#10095;</button>
      </div>
    </div>
  );
};


export default Cards;
