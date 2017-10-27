import React from "react"
import {Route, Switch } from "react-router-dom"
import Login from "./Login";
import Logout from "./Logout";
import About from "./About";
import UserPage from "./UserPage";
import RandomNumber from "./RandomNumber";
import AllUsers from "./AllUsers";
import AdminPage from "./AdminPage";
import TopMenu from "./TopMenu";
import auth from "../authorization/auth"


function App() {
  console.log("is admin "+auth._isUser);
  return (
    <div>
      <TopMenu isUser={auth._isUser} isAdmin={auth._isAdmin} />
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/logout" component={Logout} />
        <Route path="/about" component={About} />
        <Route path="/user" component={UserPage} />
        <Route path="/randomnumber" component={RandomNumber}/>
        <Route path="/admin" component={AdminPage} />
        <Route path="/getAllUsers" component={AllUsers}/>
      </Switch>
    </div>
  )
}
export default App;