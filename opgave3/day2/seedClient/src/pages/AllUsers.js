import React, { Component } from 'react'
import adminData from "../facades/adminFacade";

class AllUsers extends Component {

  constructor() {
    super();
    this.state = { data:[], err: "" }
  }

  componentWillMount() {
    /*
    This will fetch data each time you navigate to this route
    If only required once, add "logic" to determine when data should be "refetched"
    */
    adminData.getUsers((e, data) => {
      if (e) {
        return this.setState({ err: e.err })
      }
      this.setState({ err: "", data:data});
    });
  }

  convertToList(){
    console.log(this.state.data);
    <ul>
          {this.props.list.map(function(listValue){
            return <li>{listValue}</li>;
          })}
        </ul>
  }

  render() {
    return (
      <div>
        <h2>Users</h2>
        <div className="msgFromServer">
        <ul>
          {this.state.data.map(function(listValue){
           return <li>{listValue.username}</li>;
          })}
        </ul>
        </div>
        {this.state.err && (
          <div className="alert alert-danger errmsg-left" role="alert">
            {this.state.err}
          </div>
        )}
      </div>
    )
  }
}

export default AllUsers;