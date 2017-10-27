import React from "react"
import { BrowserRouter as Router, Route, Link, NavLink, Switch} from "react-router-dom";
import { Prompt } from 'react-router'


import Product from "./Products"
export default class AddBook extends React.Component {
    constructor(props) {
      super();
      this.state = { "book": {title: "", info: "" }, isDirty: false }
    }
    onSave = () => {
        this.props.bookStore.addBook(this.state.book);
        this.props.onAddBook();
        this.setState({isDirty:false});
    }
    onChange = (e) => {
      const name = e.target.name;
      const value = e.target.value;
      if(name  === 'title'){
        this.setState({"book":{title:value,infor:this.state.book.title.info},isDirty:true});
      }else if(name == 'info'){
        this.setState({"book":{title:this.state.book.title,info:value},isDirty:true});
      }
    }
    render() {
      return (
        <div>
          Title: <input name="title" onChange={this.onChange}/>
          Info: <input name="info" onChange={this.onChange}/>
          <button onClick={this.onSave}>Save</button>
          {
           <Prompt
           when={this.state.isDirty}
           message="Are you sure you want to leave?"
           />}
        </div>
      )
    }
  }