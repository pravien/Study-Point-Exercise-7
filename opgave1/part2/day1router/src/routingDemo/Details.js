import React from "react"
import { BrowserRouter as Router, Route, Link, NavLink, Switch, Prompt } from "react-router-dom";

export default class Details extends React.Component {
    render() {
      let id = this.props.match.params.id;
      let book = this.props.bookStore.books.filter((book) => {
        return book.id === Number(id);
      })[0];
      return (
        <div style={{ padding: 4 }}>
          <h4 style={{ color: "steelblue" }}>Detailed info for the title: {book.title}</h4>
          <p>Info: {book.info}</p>
          <br />
          <Link to="/products">Products</Link>
        </div>
      );
    }
  }