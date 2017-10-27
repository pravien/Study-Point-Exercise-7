import React from "react"
import { BrowserRouter as Router, Route, Link, NavLink, Switch} from "react-router-dom";
import { Prompt } from 'react-router'


import Product from "./Products"
export default class DeleteBook extends React.Component {
    constructor(props) {
      super();
      this.state = { "book": {id: ""}, isDirty: false }
    }
    onDelete = () => {
        const answer  = this.props.bookStore.deleteBook(this.state.book.id);
        console.log(answer);
        if(answer == 'id removed'){
        alert(this.state.book.id+" was removed")
        this.props.onAddBook();
        this.setState({isDirty:false});
        }
        else{
            alert(answer);
        }
    }
    onChange = (e) => {
      const name = e.target.name;
      const value = e.target.value;
      console.log(value);
      if(name  === 'id'){
        this.setState({"book":{id:value},isDirty:true});
      }
    }
    render() {
      return (
        <div>
          Book ID: <input name="id" onChange={this.onChange}/>
          <button onClick={this.onDelete}>Delete</button>
          {
           <Prompt
           when={this.state.isDirty}
           message="Are you sure you want to leave?"
           />}
        </div>
      )
    }
  }