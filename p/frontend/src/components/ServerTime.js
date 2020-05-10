import React, { Component } from 'react';

class ServerTime extends Component{

    state = {
        time: null
      };

      async componentDidMount() {
        const response = await fetch('/api/hello')
        const body = await response.text();
        this.setState({ time: body});
      }


    render(){
      return(
        <div className="App-intro">
            {this.state.time}
        </div>
      )
    }
  
}
  export default ServerTime;