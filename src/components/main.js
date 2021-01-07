import React from 'react';
import '../App.css';
var mainImg = require('..//components/img/mainImg.jpg');

class Content extends React.Component {

  render() {

    const mystyle = {


      color: "white",
      backgroundColor: "black",
      padding: "15px",
      fontFamily: "Sans Serif"
    };
    return (
      <div className="App">


        <h1 style={mystyle}>NBA Team Builder</h1>
        <h2 style={mystyle}>Build your team by adding player Name and position and a image of selected player!</h2>
        <img src={mainImg} alt="A" />


      </div>
    );
  }
}

export default Content;