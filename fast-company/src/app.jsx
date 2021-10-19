import React from "react";
import Users from "./layouts/users";
import { Route, Switch, Redirect } from "react-router-dom";
import Main from "./layouts/main";
import Login from "./layouts/login";

function App() {
  return (
    <div>
      <Switch>
        <Route path="/users/:userId?" component={Users} />
        <Route path="/login/:type?" component={Login} />
        <Route path="/" exact component={Main} />
        <Redirect to="/" />
      </Switch>
    </div>
  );
}

export default App;
