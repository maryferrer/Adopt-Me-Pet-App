import { StrictMode } from "react/cjs/react.production.min";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import SearchParams from "./SearchParams";
import Details from './Details';
  
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
      <Router>
        <header>
          <Link to="/">
            <h1>Adopt Me!</h1>
          </Link>
        </header>
        <Switch>
          <Route path="/details/:id">
            <Details />
          </Route>
          <Route path="/">
            <SearchParams />
          </Route>
        </Switch>
      </Router>
    </div>
    );
  };

  ReactDOM.render(
    <StrictMode>
    <App />
    </StrictMode>, document.getElementById("root"));