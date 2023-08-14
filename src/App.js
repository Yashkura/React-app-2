import React from "react";
import "./styles.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import UserDetails from "./components/UserDetails";
import Users from "./components/Users";
import Header from "./components/Header";
import Home from "./components/Home";
export default function App() {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <Switch>
          <Route path="/" exact={true}>
            <Home />
          </Route>
          <Route path="/user">
            <Users />
          </Route>
          <Route path="/userDetails">
            <UserDetails />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}
