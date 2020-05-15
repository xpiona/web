
import React, { Component } from 'react';
import axios from "axios";
import About from "./About"
// import { Redirect } from "react-router-dom"

class MemberLoginForm extends Component{
  
  constructor(props) {
    super(props);
     this.state = {
      id : '',
      pw : '',
      isLoggedIn : false
     }
  };

  handleChange(event){
      let {name: fieldName, value} = event.target;

      this.setState({
        [fieldName]: value
      });
  };

  async handleSubmit(e){
      e.preventDefault();
      var _id = this.state.id;
      console.log(_id)
      var _pw = this.state.pw;
      console.log(_pw)
      let url = '/member/login';
      let options = {
      method : 'POST',
      url : url,
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json;charset=UTF-8'
      },
      data: {
          memId: _id,
          memPw: _pw
        
      }
    }
      let response = await axios(options);
      let responseOK = response && response.status === 200 && response.statusText === 'OK';
      if (responseOK) {
        let data = await response.data;
        console.log("memberloginform : console. ");
        console.log(data);
        if(data === 'success'){
          this.setState({ isLoggedIn : true });
        }
        // const { from } = window.location.state || { from: { pathname: "/" } }
        // if(data === 'success'){ return <Redirect to={from} /> }
        // if(data === 'success'){ return <Redirect to='/' /> }
      }
    }

    render(){

      if(this.state.isLoggedIn === true){

        return <About></About>
      }

      return(
        <article>
          <h2>Login</h2>
              <form onSubmit = {this.handleSubmit.bind(this)}>
                <p><input type="text" name = "id"  value = {this.state.id} onChange = {this.handleChange.bind(this)} placeholder = "id"></input></p>
                <p><input type="text" name = "pw"  vlaue = {this.state.pw} onChange = {this.handleChange.bind(this)} placeholder = "pw"></input></p>
                <p><input type = "submit" onClick = {this.send} ></input></p>
              </form>
          </article>
      );
    }
  }

  export default MemberLoginForm;