import React, { Fragment, Component } from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "./store";

// Router
import {
  BrowserRouter as Router, 
  Switch, 
  Route
} from "react-router-dom"
import "./index.css";


// Components
import Header from "./Components/Header/header";
import ContactList from "./Components/ContactList/contactList";
import Footer from "./Components/Footer/footer";
import AddContact from "./Components/AddContact/addContact";
import EditContact from "./Components/EditContact/editContact";
import Error404 from "./Components/Error404/error404";

class App extends Component {
  // URL = "https://contacts-213d4-default-rtdb.firebaseio.com/List.json"
  // state = {
  //   List: [],
  //   currentContact: null,
  //   searchList: [],
  //   valueSearch: ''
  // }

//   onEditClick = (Id) => {
//     const editContact = this.state.List.find((elem) => elem.Id === Id);
//     this.setState(() => {
//       return {
//         currentContact: editContact
//       }
//     })
//   }

//   onEditContact = (contact) =>{
//     const newList = this.state.List.map((item) => item.Id === contact.Id ? contact : item)
//     this.setState(()=>{
//       return{
//         List: newList
//       }
//     })

//     this.saveData(newList)
//   }

  // onSearchContact = (valueSearch) => {
  //   const newList = this.state.List.slice();
  //   const searchContactList = [];
  //   for(let i = 0; i < newList.length; i++){
  //     if(newList[i].Name.toLowerCase().includes(valueSearch)){
  //       searchContactList.push(newList[i]);
  //     }
  //   }
  //   this.setState(() => {
  //     return {
  //       searchList: searchContactList
  //     }
  //   })
  // }

//   onSearchValue = (searchTarget) => {
//     this.setState(() => {
//       return {
//         valueSearch: searchTarget
//       }
//     })
//   }

  render(){
    // const { List, searchList, currentContact, valueSearch } = this.state;
    return(
      <Provider store= {store}>
        <Router>
        <Header 
        // onSearchContact={this.onSearchContact} onSearchValue = {this.onSearchValue} 
        />
          <Switch>
            <Route path = "/" exact component = {ContactList}></Route>
            <Route path = "/add-contact" exact component= { AddContact }></Route>
            <Route path = "/edit-contact" exact component= { EditContact }></Route>
            <Route path="" exact component={Error404} />
          </Switch>
          <Footer/>
        </Router>
      </Provider>
    )
  }
}

ReactDOM.render(<App />, document.getElementById("root"));