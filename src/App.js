import React from "react";
import ReactDOM from "react-dom";

const Pet = (props) => {
    return React.createElement("div", {}, [
      React.createElement("h1", {}, props.name),
      React.createElement("h2", {}, props.animal),
      React.createElement("h2", {}, props.breed),
    ]);
  };
  
  const App = () => {
    return React.createElement("div", {}, [
      React.createElement("h1", {}, "Adopt Me!"),
      React.createElement(Pet, { name: "Xena", animal: "Dog", breed: "Pitbull"}),
      React.createElement(Pet, { name: "Pickles", animal: "Cat", breed: "American Shorthair"}),
      React.createElement(Pet, { name: "Rusty", animal: "Dog", breed: "Chihuahua-Yorkie Mix"}),
    
    ]);
  };
  
  ReactDOM.render(React.createElement(App), document.getElementById("root"));