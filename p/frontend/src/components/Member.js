import React, { Component } from 'react';
import axios from "axios";

import MemberLoginForm from "./MemberLoginForm"
import About from "./About"

class Member extends Component{

  constructor(props) {
    super(props);
     this.state = {
      IsLoggedIn : false
     }
  };

  async componentWillMount() {
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
      // let data = await response.data.memId;
      this.setState({
        IsLoggedIn : true
      })
    }
  }


    render(){

      if(this.state.IsLoggedIn === true){
        return <About></About>
      }

      return(
        <div>
          <MemberLoginForm></MemberLoginForm>
        </div>
      );
    }
  }

  export default Member;