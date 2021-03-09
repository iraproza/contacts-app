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
import EditContact from "./components/EditContact/editContact";
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
    ],
    currentContact: null
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

  onEditClick = (Id) => {
    const editContact = this.state.List.find((elem) => elem.Id === Id);
    this.setState(() => {
      return {
        currentContact: editContact
      }
    })
  }

  onEditContact = (contact) =>{
    const newList = this.state.List.map((item) => item.Id === contact.Id ? contact : item)
    this.setState(()=>{
      return{
        List: newList
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
  
  onAddContact = (newContact) => {
    const tmpList = this.state.List.slice();
    const newList = [...tmpList, newContact]
    console.log(newList)
    this.setState(()=>{
      return{
        List: newList
      }
    })
}

  render(){
    const { List, currentContact } = this.state;
    return(
      <Fragment>
        <Router>
        <Header />
          <Switch>
            <Route path = "/" exact render= {() => <ContactList List={List} onStatusChange={this.onStatusChange} onDelete = {this.onDelete} onEditClick = {this.onEditClick} />}></Route>
            <Route path = "/add-contact" exact render= {() => <AddContact onAddContact = {this.onAddContact}/>}></Route>
            <Route path = "/edit-contact" exact render= {() => <EditContact List={List}  currentContact={currentContact} onEditClick = {this.onEditClick} onEditContact = {this.onEditContact}/>}></Route>
            <Route path="" component={Error404} />
          </Switch>
          <Footer />
        </Router>
      </Fragment>
    )
  }
}

ReactDOM.render(<App />, document.getElementById("root"));