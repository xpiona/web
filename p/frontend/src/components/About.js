import React, { Component } from 'react';
import axios from "axios";
// import { Link, Route, Switch, BrowserRouter as Router } from "react-router-dom"
import { Button } from 'reactstrap';
import MemberLoginForm from "./MemberLoginForm"
class About extends Component{

  constructor(props) {
    super(props);
    this.state = {
      word: null,
      IsLoggedIn : true
    };
  }

  async componentWillMount() {
    // e.preventDefault();
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
      console.log("aaaaaaaaaa");
      console.log(data);
      this.setState({
        word : data,
        IsLoggedIn : true
      });
      // return data;
    }
  }

  async logout(){
    let url = '/member/logout';
    let options = {
      method : 'POST',
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
      console.log(data);
      this.setState({
        IsLoggedIn : false
      });
    }
  }

    render(){

      if(this.state.IsLoggedIn === false){
        return <MemberLoginForm></MemberLoginForm>
      }

      return( 
        <div>
           Hi, {this.state.word} 로그인 되었습니다.
           <Button onClick = {this.logout.bind(this)}> 로그아웃 </Button>
        </div>
      );
    }
  }

  export default About;