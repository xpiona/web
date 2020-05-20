import React, { Component } from 'react';
import axios from 'axios';
import { Table } from 'reactstrap';

class Board extends Component{

  constructor(props) {
    super(props);
     this.state = {
      ItemList : []
     }
  };

  async componentWillMount() {
    // e.preventDefault();
    let url = '/board/showall';
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
      this.setState({
        ItemList : data
      })
    }
  }
 
    render(){
      return(
        <div>
          <h2>Board</h2>
          <Table>
              {this.state.ItemList.map(item =>
              <tr>
                <td>{item.bno}</td>  <td>{item.content}</td>  <td>{item.regdate}</td> 
                <td>{item.title}</td> <td>{item.viewcnt}</td> <td>{item.writer}</td>
              </tr>)}
          </Table>
        </div>
      );
    }
  }

  export default Board;