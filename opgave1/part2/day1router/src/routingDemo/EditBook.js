import React from "react"
import { BrowserRouter as Router, Route, Link, NavLink, Switch} from "react-router-dom";
import { Prompt } from 'react-router'


import Product from "./Products"
export default class EditBook extends React.Component {
    constructor(props) {
      super();
      this.state = { "book":{id: "",title:"",info:""}, isDirty: false }
    }
    onEdit = () => {
        const answer  = this.props.bookStore.editBook(this.state.book);
        if(answer == 'id edited'){
        alert(this.state.book.id+" was edited")
        this.props.onAddBook();
        this.state.isDirty=false;
        }
        else{
            alert(answer);
        }
    }
    onChange = (e) => {
      const name = e.target.name;
      const value = e.target.value;
      this.state.isDirty=true;
      console.log(value);
      if(name  === 'id'){
        this.state.book.id=value;
      } else if(name  === 'title'){
        this.state.book.title=value;
      }
      else if(name  === 'info'){
        this.state.book.info=value;
      }
    }
    render() {
      return (
        <div>
          Book ID: <input name="id" onChange={this.onChange}/>
          Book Title: <input name="title" onChange={this.onChange}/>
          Book Info: <input name="info" onChange={this.onChange}/>
          <button onClick={this.onEdit}>Edit</button>
          {
           <Prompt
           when={this.state.isDirty}
           message="Are you sure you want to leave?"
           />}
        </div>
      )
    }
  }