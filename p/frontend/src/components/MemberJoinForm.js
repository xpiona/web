import React, { Component } from 'react';
import axios from "axios";

class MemberJoinForm extends Component{

  constructor(props) {
    super(props);
     this.state = {
      id : '',
      pw : ''
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
      let url = '/member/join';
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
        console.log(data);
      }
    }

    render(){
      return(
        <article>
            <h2>Join</h2>
              <form onSubmit = {this.handleSubmit.bind(this)}>
                <p><input type="text" name = "id"  value = {this.state.id} onChange = {this.handleChange.bind(this)} placeholder = "id"></input></p>
                <p><input type="text" name = "pw"  vlaue = {this.state.pw} onChange = {this.handleChange.bind(this)} placeholder = "pw"></input></p>
                <p><input type = "submit"></input></p>
              </form>
          </article>
      );
    }
  }

  export default MemberJoinForm;