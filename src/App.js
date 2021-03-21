
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Components/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Destination from './Components/Destination/Destination';
import Login from './Components/Login/Login';

import { createContext, useState } from 'react';
import PrivetRoute from './Components/PrivetRoute/PrivetRoute';
export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});

  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <PrivetRoute path="/destionation">
          <Destination></Destination>
          </PrivetRoute>
          <Route path="/login">
            <Login></Login>
             </Route>
            <PrivetRoute path="/transport/:transportKey">
              <Destination></Destination>
            </PrivetRoute>
        </Switch>
      </Router>
    </UserContext.Provider>

  );
}

export default App;
