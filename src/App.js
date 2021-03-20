import logo from './logo.svg';
import './App.css';
import Header from './Components/Header/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Components/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Destination from './Components/Destination/Destination';
import Login from './Components/Login/Login';

import { createContext, useState } from 'react';
import PrivetRoute from './Components/PrivetRoute/PrivetRoute';
import GoogleMap from './Components/Destination/GoogleMap';
export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});

  return (
    <UserContext.Provider value={[loggedInUser,setLoggedInUser]}>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route  path="/home">
            <Home />
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          {/* <Route path="/product/:productKey">
            <ProductDetails></ProductDetails>
          </Route> */}
          <Route path="/transport/:transportKey">
          <Destination></Destination>
          </Route>
          <PrivetRoute path="/blog">
        <Home></Home>
          </PrivetRoute>
        </Switch>
      </Router>
    </UserContext.Provider>
  
  );
}

export default App;
