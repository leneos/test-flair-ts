import React from "react";
import { StartScreen } from "../StartScreen/StartScreen";
import "./App.scss";
import { Route, Switch, Redirect, withRouter } from "react-router-dom";
import { Scoreboard } from "../Scoreboard/Scoreboard";
const App: React.FC = () => {
  return (
    <div className="App">
      <div className="container">
        <Switch>
          <Route path="/start" component={Scoreboard} />
          <Route path="/" exact component={StartScreen} />
          <Redirect to="/" />
        </Switch>
      </div>
    </div>
  );
};

export default withRouter(App);
