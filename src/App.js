import React from "react";
import { Route, Link, Switch } from "react-router-dom"
import Home from "./Home"
import Form from "./Pizza"
import styled from "styled-components"

const Header = styled.header`
  background-color: #282c34;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: coral;
`

const Navigate = styled.nav`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`

const App = () => {
  return (
    <Header className="App-header">
      <nav>
        <h1 className="header">Lambda Eats</h1>
        <Navigate className="App-link">
          <Link to="/">Home</Link>
          <Link to="/Pizza">Pizza</Link>
        </Navigate>
      </nav>
      <Switch>
        <Route path="/Pizza" component={Form} />
        <Route path="/" component={Home} />
      </Switch>
    </Header>
  );
};
export default App