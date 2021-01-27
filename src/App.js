import React from "react";
import "./App.css";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import SearchPage from "./pages/SearchPage";
import SingleArtistPage from "./components/SingleArtistPage";
import SearchBar from "./components/SearchBar";

function App() {
  return (
    <div>
      <Router>
        <SearchBar />
        <Switch>
          <Route
            exact
            path="/"
            render={() => (
              <React.Fragment>
                <SearchPage />
              </React.Fragment>
            )}
          />
          <Route exact path="/artist/:artistId" component={SingleArtistPage} />

          <Redirect to="/" />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
