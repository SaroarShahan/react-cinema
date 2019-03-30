import React, { Component } from "react";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import logger from "redux-logger";
import { Switch, Route, withRouter } from "react-router-dom";
import Header from "./common/Header";
import MovieContainer from "./modules/movies/containers/MovieContainer";
import MovieDetailsContainer from "./modules/movies/containers/MovieDetailsContainer";
import rootReducers from "./reducer";
import "./style/style.scss";

const store = createStore(rootReducers, applyMiddleware(thunk, logger));

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Header />
        <Switch>
          <Route exact path="/" component={MovieContainer} />
          <Route path="/movies/:id" component={MovieDetailsContainer} />
        </Switch>
      </Provider>
    );
  }
}

export default withRouter(App);
