import React, {Component} from 'react';

import './App.css';
import { Button } from 'reactstrap';
// import 'bootstrap/dist/css/bootstrap.min.css';
import "bootswatch/dist/darkly/bootstrap.min.css"; 
import { Link, Route, Switch, BrowserRouter as Router } from "react-router-dom"

import NavCon from "./components/NavCon"
import Member from "./components/Member"
import Welcome from "./components/Welcome"
import Board from "./components/Board"


class App extends Component{
      render() {
        return (
          <Router>
            <header>
              <Link to="/">
                <Button>Welcome</Button>
              </Link>
              <Link to="/Member">
                <Button>Member</Button>
              </Link>
              <Link to="/NavCon">
                <Button>NavCon</Button>
              </Link>
              <Link to="/Board">
                <Button>Board</Button>
              </Link>
            </header>

            <main>
              <Switch>
                <Route exact path="/" component={Welcome} />
                <Route path="/Member" component={Member} />
                <Route path="/NavCon" component={NavCon} />
                <Route path="/Board" component={Board} />
              </Switch>
            </main>
          </Router>
        );
      }
}
export default App;