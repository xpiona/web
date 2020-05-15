import React, { Component } from 'react';
import axios from "axios";

class About extends Component{

  constructor(props) {
    super(props);
    this.state = {
      word: null
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
      this.setState({word : data});
      // return data;
    }
  }

    render(){

      return(
        <div>
           Hi, {this.state.word} 로그인 되었습니다.
           
        </div>
      );
    }
  }

  export default About;