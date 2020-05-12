import React, { Component } from 'react';
import axios from "axios";
import { Redirect } from 'react-router-dom';

import MemberLoginForm from "./MemberLoginForm"


class Member extends Component{

  constructor(props) {
    super(props);
     this.state = {
      isLogin : false
     }
  };
  
  async get_a(e) {
    e.preventDefault();
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
        this.setState({ isLogin : true });
      }
    }
  }


    render(){
      return(

        <div>
          <MemberLoginForm></MemberLoginForm>
          {
            !this.state.isLogin && <Redirect to="/"/>
          }
          로그인 되었습니다.
          
        </div>

      );
    }
  }

  export default Member;