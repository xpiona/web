
import React, { Component } from 'react';
import axios from "axios";
import Welcome from './Welcome';

class MemberModifyForm extends Component{
  
  constructor(props) {
    super(props);
     this.state = {
      id : '',
      pw : '',
      done : false
     }
  };

  handleChange(event){
      let {name: fieldName, value} = event.target;

      this.setState({
        [fieldName]: value
      });
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
      let _id = await response.data.memId;
      let _pw = await response.data.memPw;
      this.setState({
        id : _id,
        pw : _pw
      });
    }
  }

  async handleSubmit(e){
      e.preventDefault();
      var _id = this.state.id;
      var _pw = this.state.pw;
      let url = '/member/modify';
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
        if(data === 'success'){
          this.setState({
            done : true
          })
        }
      }
    }

    render(){

      if(this.state.done === true){
        return <Welcome></Welcome>
      }

      return(
        <article>
          <h2>Modify</h2>
              <form onSubmit = {this.handleSubmit.bind(this)}>
                <p><input type="hidden" name = "id"  value = {this.state.id} onChange = {this.handleChange.bind(this)} placeholder = {this.state.id} ></input></p>
                <p><input type="text" name = "pw"  vlaue = {this.state.pw} onChange = {this.handleChange.bind(this)} placeholder = {this.state.pw}></input></p>
                <p><input type = "submit" onClick = {this.send} ></input></p>
              </form>
          </article>
      );
    }
  }

  export default MemberModifyForm;