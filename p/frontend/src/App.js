import React, {Component} from 'react';

import './App.css';
import { Button } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import NavCon from "./components/NavCon"
import ServerTime from "./components/ServerTime"
import GetSession from "./components/GetSession"
import MemberLoginForm from "./components/MemberLoginForm"
import MemberJoinForm from "./components/MemberJoinForm"

class App extends Component{
      render() {
        return (
          <div className="App">
            <Button color="danger"> Danger! </Button>
              <ServerTime></ServerTime>
              <MemberLoginForm></MemberLoginForm>
              <MemberJoinForm></MemberJoinForm>
              <GetSession></GetSession>
              <NavCon></NavCon>
              
          </div>
        );
      }
}
export default App;