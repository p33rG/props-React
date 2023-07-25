import React from 'react';
import ReactDOM from 'react-dom';
import Cards from "./card";
import "./style.css";
ReactDOM.render(

  <>
    <Cards

      imgsrc="https://static1.colliderimages.com/wordpress/wp-content/uploads/2022/11/Sonic-in-Sonic-Prime.jpg?q=50&fit=crop&w=1500&dpr=1.5"
      name="Sonic Prime"
      category="movies"
      title="NetFlix Orignal Series"
      link="google.com"
    />
    <Cards

      imgsrc="https://static1.colliderimages.com/wordpress/wp-content/uploads/2023/07/my-happy-marriage-netflix.jpeg?q=50&fit=crop&w=1500&dpr=1.5"
      name="My Happy Merriage "
      category="Anime"
      title="NetFlix Orignal Series"
      link="google.com"
    />
    <Cards

      imgsrc="https://static1.colliderimages.com/wordpress/wp-content/uploads/2023/07/the-witcher-netflix-season-3-social-featured.jpg?q=50&fit=crop&w=1500&dpr=1.5"
      name="The Witcher"
      category="Movies"
      title="NetFlix Orignal Series"
      link="google.com"
    />
    <Cards

      imgsrc="https://static1.colliderimages.com/wordpress/wp-content/uploads/2023/07/survival-of-the-thickest-netflix.jpg?q=50&fit=crop&w=1500&dpr=1.5"
      name="Survival of the Thickest"
      category="Movies"
      title="NetFlix Orignal Series"
      link="google.com"
    />

  </>,

  document.getElementById('root')
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
