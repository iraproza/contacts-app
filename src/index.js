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
  URL = "https://contacts-213d4-default-rtdb.firebaseio.com/List.json"
  state = {
    List: [],
    currentContact: null,
    searchList: [],
    valueSearch: ''
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
    fetch(this.URL, {
      method: "PUT",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(contactList),
    }).then(response => {
      console.log("saveDate", response)
    }).catch(err => console.log(err));
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

    this.saveData(newList1)
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

    this.saveData(newList)
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

    this.saveData(newList)
  }
  
  onAddContact = (newContact) => {
    const tmpList = this.state.List.slice();
    const newList = [...tmpList, newContact]
    this.setState(()=>{
      return{
        List: newList
      }
    })

    this.saveData(newList)
}
  onSearchContact = (valueSearch) => {
    const newList = this.state.List.slice();
    const searchContactList = [];
    for(let i = 0; i < newList.length; i++){
      if(newList[i].Name.toLowerCase().includes(valueSearch)){
        searchContactList.push(newList[i]);
      }
    }
    this.setState(() => {
      return {
        searchList: searchContactList
      }
    })
  }

  onSearchValue = (searchTarget) => {
    this.setState(() => {
      return {
        valueSearch: searchTarget
      }
    })
  }

  render(){
    const { List, searchList, currentContact, valueSearch } = this.state;
    return(
      <Fragment>
        <Router>
        <Header onSearchContact={this.onSearchContact} onSearchValue = {this.onSearchValue} />
          <Switch>
            <Route path = "/" exact render= {() => <ContactList List={valueSearch===''?List:searchList.length>0?searchList:searchList} onStatusChange={this.onStatusChange} onDelete = {this.onDelete} onEditClick = {this.onEditClick} />}></Route>
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