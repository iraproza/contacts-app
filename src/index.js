import React, { Fragment, Component } from "react";
import ReactDOM from "react-dom";

// Router
import {
  BrowserRouter as Router, 
  Switch, 
  Route
} from "react-router-dom"
import "./index.css";


// Components
import Header from "./components/Header/header";
import ContactList from "./components/ContactList/contactList";
import Footer from "./components/Footer/footer";
import AddContact from "./components/AddContact/addContact";
import EditContact from "./components/EditContact/editContact";
import Error404 from "./components/Error404/error404";

class App extends Component {
  URL = "https://contact-3290a-default-rtdb.firebaseio.com/List.json"
  state = {
    // List: [
    //   {
    //     "Id": uuidv4(),
    //     "Avatar": "47",
    //     "Name": "Mila Kunis",
    //     "Created": "08/08/2013",
    //     "Role": "Admin",
    //     "Status": "Active",
    //     "Email": "mila@kunis.com",
    //     "Gender": "women"
    //   },
    //   {
    //     "Id": uuidv4(),
    //     "Avatar": "50",
    //     "Name": "Camil Jonson",
    //     "Created": "08/08/2013",
    //     "Role": "User",
    //     "Status": "Inactive",
    //     "Email": "camil@gmail.com",
    //     "Gender": "men"
    //   },
    //   {
    //     "Id": uuidv4(),
    //     "Avatar": "46",
    //     "Name": "Sara Jeckson",
    //     "Created": "11/08/2014",
    //     "Role": "Moderatot",
    //     "Status": "Banned",
    //     "Email": "jackson@kunis.com",
    //     "Gender": "women"
    //   },
    //   {
    //     "Id": uuidv4(),
    //     "Avatar": "33",
    //     "Name": "Sam Watson",
    //     "Created": "04/09/2017",
    //     "Role": "User",
    //     "Status": "Pending",
    //     "Email": "samwww@gmail.com",
    //     "Gender": "men"
    //   }
    // ],
    List: [],
    currentContact: null
  }

  componentDidMount(){
    this.updateDatabase();
  }

updateDatabase = () => {
  fetch(this.URL)
    .then(response => {
      return response.json();
    }).then(date => {
      if(date !== null){
        this.setState(() =>{
          return{
            List: date
          }
        })
      }
    })
    .catch(err => console.log(err))
  }

  saveData = (contactList) => {
    fetch(URL, {
      method: "PUT",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify
    })
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