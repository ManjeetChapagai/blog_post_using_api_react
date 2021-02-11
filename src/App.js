import React from "react";
import "./App.css";

import { Users } from "./components/Users";
import { Posts } from "./components/Posts";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Comments } from "./components/Comments";
import Nav from "./components/Nav";

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route path="/posts" exact component={Posts} />
          <Route path="/users" component={Users} />
          <Route path="/" exact component={Posts} />
          <Route path="/posts/:id/comments" component={Comments} />
        </Switch>
      </div>
    </Router>
  );
}
export default App;
