import React, { Component } from 'react';
import axios from "axios";

import MemberLoginForm from "./MemberLoginForm"
import About from "./About"

class Member extends Component{

  constructor(props) {
    super(props);
     this.state = {isLoggedIn : false}
  };
  
  async get_a(e) {
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

      // this.get_a();
      // const isLoggedIn = this.state.isLoggedIn;
      // let button = null;
      // if (isLoggedIn) {
      //   button = <About/>
      // } else{
      //   button = <MemberLoginForm/>;
      // }

      if(this.state.isLoggedIn === true){
        return <About></About>
      }

      return(
        <div>
          <MemberLoginForm></MemberLoginForm>
          {/* {button}  */}
        </div>

      );
    }
  }

  export default Member;