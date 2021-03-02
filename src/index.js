import React, { Fragment, Component } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import {v4 as uuidv4} from 'uuid';

// Components
import Header from "./components/Header/header";
import Search from "./components/Search/search";
import ContactList from "./components/ContactList/contactList";
import Footer from "./components/Footer/footer";

class App extends Component {
  state = {
    List: [
      {
        "Id": uuidv4,
        "Avatar": "47",
        "Name": "Mila Kunis",
        "Created": "2013/08/08",
        "Role": "Admin",
        "Status": "Active",
        "Email": "mila@kunis.com",
        "Gender": "women"
      },
      {
        "Id": uuidv4,
        "Avatar": "50",
        "Name": "Camil Jonson",
        "Created": "2013/08/08",
        "Role": "User",
        "Status": "Inactive",
        "Email": "camil@gmail.com",
        "Gender": "men"
      },
      {
        "Id": uuidv4,
        "Avatar": "46",
        "Name": "Sara Jeckson",
        "Created": "2018/08/08",
        "Role": "Moderatot",
        "Status": "Banned",
        "Email": "jackson@kunis.com",
        "Gender": "women"
      },
      {
        "Id": uuidv4,
        "Avatar": "33",
        "Name": "Sam Watson",
        "Created": "2014/10/07",
        "Role": "User",
        "Status": "Pending",
        "Email": "camil@gmail.com",
        "Gender": "men"
      }
    ]
  }

  render(){
    const { List } = this.state;
    return(
      <Fragment>
        <Header />
        <Search />
        <ContactList List={List} />
        <Footer />
      </Fragment>
    )
  }
}

ReactDOM.render(<App />, document.getElementById("root"));