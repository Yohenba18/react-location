import React from "react";
import "./App.css";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import MapView from "./components/MapView";
import Home from "./components/Home";
import Login from "./components/Login";
import { useStateValue } from "./components/StateProvider";

function App() {

  const [{user}, dispatch] = useStateValue();
  // const user = null;
  return (
    <div>
    {!user ? <Login/> : (
      <Router>
      <Switch>
        <Route path="/map">
          <MapView />;
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
    )}
    
    </div>
    
  );
}

export default App;
