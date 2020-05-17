import React, { Component } from 'react';
import axios from "axios";

import About from "./About"
import MemberLoginForm from "./MemberLoginForm"


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
      let data = await response.data.memId;
      if(data !== undefined){
        console.log(data)
        this.setState({
          IsLoggedIn : true
        })
      }

    }
  }


    render(){

      if(this.state.IsLoggedIn === true){
        return <About></About>
      }
      else{
        return(
          <div>
            <MemberLoginForm></MemberLoginForm>
          </div>
        );
      }
      
    }
  }

  export default Member;