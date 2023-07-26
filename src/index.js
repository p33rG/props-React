import React from 'react';
import ReactDOM from 'react-dom';
import Cards from "./card";
import "./style.css";
import data from "./array";
ReactDOM.render(

  <>
    <h1 className="list_header">List of top NetFlix Series</h1>

    {data.map((card, index) => (
      <Cards
        key={index} // Make sure to provide a unique key for each card
        imgsrc={card.imgsrc}
        name={card.name}
        category={card.category}
        title={card.title}
        link={card.link}
      />


    ))}

  </>,

  document.getElementById('root')
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
