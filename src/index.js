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

//   updateDatabase = () => {
//     fetch(this.URL)
//       .then(response => {
//         return response.json();
//       }).then(date => {
//         if(date !== null){
//           this.setState(() =>{
//             return{
//               List: date
//             }
//           })
//         }
//       })
//       .catch(err => console.log(err))
//     }

//   saveData = (contactList) => {
//     fetch(this.URL, {
//       method: "PUT",
//       headers: {
//         'Content-Type': 'application/json'
//       },
//       body: JSON.stringify(contactList),
//     }).then(response => {
//       console.log("saveDate", response)
//     }).catch(err => console.log(err));
//   }


//   onDelete = (Id) => {
//     const index = this.state.List.findIndex((elem) => elem.Id === Id);
//     let newList1 = this.state.List.slice();
//     newList1.splice([index],1);
//     this.setState(() => {
//       return {
//         List: newList1
//       }
//     })

//     this.saveData(newList1)
//   }

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

//   onStatusChange = (Id) =>{
//     const index = this.state.List.findIndex((elem) => elem.Id === Id);
//     let newList = this.state.List.slice();
//     if (newList[index].Status === "Inactive"){
//       newList[index].Status = "Active"
//     }
//     else if (newList[index].Status === "Active"){
//       newList[index].Status = "Pending"
//     }
//     else if (newList[index].Status === "Pending"){
//       newList[index].Status = "Banned"
//     }
//     else{
//       newList[index].Status = "Inactive"
//     }
//     this.setState(() => {
//       return {
//         List: newList
//       }
//     })

//     this.saveData(newList)
//   }
  
//   onAddContact = (newContact) => {
//     const tmpList = this.state.List.slice();
//     const newList = [...tmpList, newContact]
//     this.setState(()=>{
//       return{
//         List: newList
//       }
//     })

//     this.saveData(newList)
// }
//   onSearchContact = (valueSearch) => {
//     const newList = this.state.List.slice();
//     const searchContactList = [];
//     for(let i = 0; i < newList.length; i++){
//       if(newList[i].Name.toLowerCase().includes(valueSearch)){
//         searchContactList.push(newList[i]);
//       }
//     }
//     this.setState(() => {
//       return {
//         searchList: searchContactList
//       }
//     })
//   }

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
          <Footer />
        </Router>
      </Provider>
    )
  }
}

ReactDOM.render(<App />, document.getElementById("root"));