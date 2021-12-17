import ReactDOM from "react-dom";

import SearchParams from "./SearchParams";
  
  // const App = () => {
  //   return React.createElement("div", {}, [
  //     React.createElement("h1", {}, "Adopt Me!"),
  //     React.createElement(Pet, { name: "Xena", animal: "Dog", breed: "Pitbull"}),
  //     React.createElement(Pet, { name: "Pickles", animal: "Cat", breed: "American Shorthair"}),
  //     React.createElement(Pet, { name: "Rusty", animal: "Dog", breed: "Chihuahua-Yorkie Mix"}),
    
  //   ]);
  // };
  
  const App = () => {
    return (
    <div>
      <h1>Adopt Me!</h1>
      <SearchParams />
    </div>
    );
  };

  ReactDOM.render(<App />, document.getElementById("root"));