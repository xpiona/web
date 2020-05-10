import React, {Component} from 'react';
import MemberLoginForm from "./components/MemberLoginForm"
import ServerTime from "./components/ServerTime"
import './App.css';
import { Button } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavCon from "./components/NavCon"


class App extends Component{
      render() {
        return (
          <div className="App">
            <Button color="danger"> Danger! </Button>
              <ServerTime></ServerTime>
              <NavCon></NavCon>
              <MemberLoginForm></MemberLoginForm>
          </div>
        );
      }
}
export default App;