import React from 'react';
import { Container, } from "semantic-ui-react";
import NavBar from "./components/NavBar";
import NoMatch from "./components/NoMatch";
import Login from "./components/Login";
import Register from "./components/Register";
import Home from "./components/Home";
import { Route, Switch, } from "react-router-dom";
import './App.css';


function App() {
  return (
    <>
    <NavBar />
    <Container>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
        <Route component={NoMatch} />
      </Switch>
    </Container>
    </>
  );
}

export default App;
