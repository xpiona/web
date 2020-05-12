import React, { Component } from 'react';
import axios from "axios";
import { Button } from 'reactstrap';

import MemberLoginForm from "./MemberLoginForm"


class Member extends Component{

  constructor(props) {
    super(props);
     this.state = {isLoggedIn : false}
  };
  
  async get_a(e) {
    // e.preventDefault();
    console.log("getting start");
    let url = '/member/session';
    let options = {
      method : 'GET',
      url : url,
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json;charset=UTF-8'
      }
    }
    let response = await axios(options);
    let responseOK = response && response.status === 200 && response.statusText === 'OK';
    if (responseOK) {
      let data = await response.data;
      if(data !== null){
        this.setState({ isLoggedIn : true });
      }
    }
  }


    render(){

      this.get_a();
      const isLoggedIn = this.state.isLoggedIn;
      let button = null;
      if (isLoggedIn) {
        // button = <Button onClick={alert(1)} />;
      } else{
        // button = <Button onClick={alert(2)} />;
      }

      return(
        <div>
          <MemberLoginForm></MemberLoginForm>
          {button}
        </div>

      );
    }
  }

  export default Member;