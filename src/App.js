
import HomePage from "./container/Homepage/HomePage.jsx";

import Register from "./container/Register/Register";

import  Login  from "./container/login/Login";

import { BrowserRouter as Router, Switch, Route, Redirect} from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "./context/AuthContext.js";
import Profile from "./container/profile/Profile.jsx";


function App() {
  const {user} =useContext(AuthContext)
  return (
    <Router>
      <Switch>
        <Route exact path="/">
        {user ? <HomePage/> : <Register/>}
        </Route>
        <Route path="/login">
        {user ? <Redirect to="/" /> : <Login/>}
        </Route>
        <Route path="/register">
          {user? <Redirect to="/" /> : <Register/>}
        <HomePage/>
        </Route>
        <Route path="/profile/:username">
          <Profile />
        </Route>
      </Switch>
    </Router>
  )
}

export default App;
     