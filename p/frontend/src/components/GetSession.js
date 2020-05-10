import React, { Component } from 'react';
import { Button } from 'reactstrap';
import axios from "axios";

class GetSession extends Component{
    
    state = {
        word: null
      };

    async get_f(e) {
        e.preventDefault();
        const response = await fetch('/member/session').then(res=>res.json())
        // const body = await response.text();
        const body = await response.text;
        console.log(body);
        this.setState(
          { word : body}
          );
      }

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
          console.log(data);
        }

      }

    render(){
      return(
          <div>
              <h2>here</h2>
              <Button onClick = {this.get_a.bind(this)}> Session</Button>
              {this.state.word}
          </div>
      );
    }
  }

  export default GetSession;