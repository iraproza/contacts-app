import React, { Fragment, Component } from "react";
import ReactDOM from "react-dom";

// Router
import {
  BrowserRouter as Router, 
  Switch, 
  Route
} from "react-router-dom"
import "./index.css";
// Import uuid
import { v4 as uuidv4 } from 'uuid';

// Components
import Header from "./components/Header/header";
import ContactList from "./components/ContactList/contactList";
import Footer from "./components/Footer/footer";
import AddContact from "./components/AddContact/addContact";
import Error404 from "./components/Error404/error404";

class App extends Component {
  state = {
    List: [
      {
        "Id": uuidv4(),
        "Avatar": "47",
        "Name": "Mila Kunis",
        "Created": "2013/08/08",
        "Role": "Admin",
        "Status": "Active",
        "Email": "mila@kunis.com",
        "Gender": "women"
      },
      {
        "Id": uuidv4(),
        "Avatar": "50",
        "Name": "Camil Jonson",
        "Created": "2013/08/08",
        "Role": "User",
        "Status": "Inactive",
        "Email": "camil@gmail.com",
        "Gender": "men"
      },
      {
        "Id": uuidv4(),
        "Avatar": "46",
        "Name": "Sara Jeckson",
        "Created": "2018/08/08",
        "Role": "Moderatot",
        "Status": "Banned",
        "Email": "jackson@kunis.com",
        "Gender": "women"
      },
      {
        "Id": uuidv4(),
        "Avatar": "33",
        "Name": "Sam Watson",
        "Created": "2014/10/07",
        "Role": "User",
        "Status": "Pending",
        "Email": "samwww@gmail.com",
        "Gender": "men"
      }
    ]
  }

  onDelete = (Id) => {
    const index = this.state.List.findIndex((elem) => elem.Id === Id);
    let newList1 = this.state.List.slice();
    newList1.splice([index],1);
    this.setState(() => {
      return {
        List: newList1
      }
    })
  }

  onStatusChange = (Id) =>{
    const index = this.state.List.findIndex((elem) => elem.Id === Id);
    let newList = this.state.List.slice();
    if (newList[index].Status === "Inactive"){
      newList[index].Status = "Active"
    }
    else if (newList[index].Status === "Active"){
      newList[index].Status = "Pending"
    }
    else if (newList[index].Status === "Pending"){
      newList[index].Status = "Banned"
    }
    else{
      newList[index].Status = "Inactive"
    }
    this.setState(() => {
      return {
        List: newList
      }
    })
  }
  
  onAddContact = () => {
    let newContact = {
      "Id": uuidv4(),
      "Avatar": document.querySelector("input[name='avatar']").value,
      "Name": document.querySelector("input[name='name']").value,
      "Created": document.querySelector("input[name='created']").value,
      "Role": document.querySelector("input[name='role']").value,
      "Status": document.querySelector("input[name='status']").value,
      "Email": document.querySelector("input[name='email']").value,
      "Gender": document.querySelector("input[name='gender']").value
  } 
  let newList = [...this.state.List, newContact]
  this.setState(() => {
    return {
      List: newList
    }
  })
}

  render(){
    const { List } = this.state;
    return(
      <Fragment>
        <Router>
        <Header />
          <Switch>
            <Route path = "/" exact render= {() => <ContactList List={List} onStatusChange={this.onStatusChange} onDelete = {this.onDelete} />}></Route>
            <Route path = "/add-contact" exact render= {() => <AddContact onAddContact={this.onAddContact}/>}></Route>
            <Route path="" component={Error404} />
          </Switch>
          <Footer />
        </Router>
      </Fragment>
    )
  }
}

ReactDOM.render(<App />, document.getElementById("root"));