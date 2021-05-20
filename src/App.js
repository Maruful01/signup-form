import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Login from './Component/Login/Login';
import { createContext, useState } from 'react';
import Signup from './Component/Signup/Signup';
import UserLogin from './Component/Login/UserLogin';
import Details from './Component/UserDetails/Details';
import PrivateRoute from './Component/PrivateRoute/PrivateRoute';
export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({name: null, email: null, password: null});
  console.log(loggedInUser);
  return (
    <div className="App">
      <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">{loggedInUser.name}</Link>
            </li>
            <li>
              <Link to="/login">login</Link>
            </li>
            <li>
              <Link to="/signup">signup</Link>
            </li>
          </ul>
        </nav>
        <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
        <Switch>
          <Route path="/login">
            <Login/>
          </Route>
          <Route path="/signup">
            <Signup/>
          </Route>

          <Route path="/userLogin">
            <UserLogin></UserLogin>
          </Route>

          <Route path="/details">
            <Details></Details>
          </Route>
        </Switch>
        </UserContext.Provider>
      </div>
    </Router>
    </div>
  );
}

export default App;
