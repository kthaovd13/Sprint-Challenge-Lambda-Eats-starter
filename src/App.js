import React from "react";
import { Route, Link } from "react-router-dom"
import Home from "./Home"
import Form from "./Pizza"




const App = () => {
  return (
    <div className="App-header">
      <nav>
        <h1 className="header">Lambda Eats</h1>
        <div className="App-link">
          <Link to="/">Home</Link>
          <Link to="/Pizza">Pizza</Link>
        </div>
      </nav>
      <Route path="/Pizza" component={Form} />
      <Route path="/" component={Home} />
    </div>
  );
};
export default App