import React from 'react';
import './display.css';

const headlines = [
  {
    title: "‘Completely false’: Afghan ex-prez Ashraf Ghani",
    description: "Ashraf Ghani said leaving Kabul was what he believed the only way to 'keep the guns sile...",
    image: "https://via.placeholder.com/150",
  },
  {
    title: "RBI removes PCA restrictions on UCO Bank - M",
    description: "Following UCO Bank's exit, two banks -- Indian Overseas Bank and Central Bank of India -...",
    image: "https://via.placeholder.com/150",
  },
  {
    title: "Microsoft acquires video creation and editing software",
    description: "Video editing software may become the next big addition to Microsoft's suite of producti...",
    image: "https://via.placeholder.com/150",
  },
  {
    title: "Delhi hospitals record surge in viral fever",
    description: "Every year we witness an increase in the cases of viral fever and dengue. This year too...",
    image: "https://via.placeholder.com/150",
  },
  {
    title: "‘Completely false’: Afghan ex-prez Ashraf Ghani",
    description: "Ashraf Ghani said leaving Kabul was what he believed the only way to 'keep the guns sile...",
    image: "https://via.placeholder.com/150",
  },
  {
    title: "RBI removes PCA restrictions on UCO Bank - M",
    description: "Following UCO Bank's exit, two banks -- Indian Overseas Bank and Central Bank of India -...",
    image: "https://via.placeholder.com/150",
  },  
  {
    title: "Microsoft acquires video creation and editing software",
    description: "Video editing software may become the next big addition to Microsoft's suite of producti...",
    image: "https://via.placeholder.com/150",
  },
  {
    title: "Delhi hospitals record surge in viral fever",
    description: "Every year we witness an increase in the cases of viral fever and dengue. This year too...",
    image: "https://via.placeholder.com/150",
  },
  {
    title: "Delhi hospitals record surge in viral fever",
    description: "Every year we witness an increase in the cases of viral fever and dengue. This year too...",
    image: "https://via.placeholder.com/150",
  },
  {
    title: "Delhi hospitals record surge in viral fever",
    description: "Every year we witness an increase in the cases of viral fever and dengue. This year too...",
    image: "https://via.placeholder.com/150",
  },
  {
    title: "Delhi hospitals record surge in viral fever",
    description: "Every year we witness an increase in the cases of viral fever and dengue. This year too...",
    image: "https://via.placeholder.com/150",
  },
  {
    title: "Delhi hospitals record surge in viral fever",
    description: "Every year we witness an increase in the cases of viral fever and dengue. This year too...",
    image: "https://via.placeholder.com/150",
  },
  {
    title: "Delhi hospitals record surge in viral fever",
    description: "Every year we witness an increase in the cases of viral fever and dengue. This year too...",
    image: "https://via.placeholder.com/150",
  },
  {
    title: "Delhi hospitals record surge in viral fever",
    description: "Every year we witness an increase in the cases of viral fever and dengue. This year too...",
    image: "https://via.placeholder.com/150",
  },
];

const Display = () => {
  return (
    <div className="display">
      <h1 className="headline-title">Today's Top Headlines</h1>
      <div className="headline-container">
        {headlines.map((headline, index) => (
          <div key={index} className="headline-card">
            <img src={headline.image} alt={headline.title} className="headline-image" />
            <div className="headline-content">
              <h2 className="headline">{headline.title}</h2>
              <p className="description">{headline.description}</p>
              <button className="read-more">Read More</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Display;
