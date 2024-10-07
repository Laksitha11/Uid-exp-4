import React from 'react';
import './List.css';

const List = ({ items }) => {
  return (
    <section className="list-section">
      {items.map((item, index) => (
        <div key={index} className="list-item">
          <img src={item.image} alt={item.name} />
          <h2>{item.name}</h2>
          <p>{item.description}</p>
        </div>
      ))}
    </section>
  );
};

export default List;
