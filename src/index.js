import React, { Fragment, Component } from "react";
import ReactDOM from "react-dom";
import "./index.css";

// Components
import Header from "./components/Header/header";
import Search from "./components/Search/search";
import ContactList from "./components/ContactList/contactList";
import Footer from "./components/Footer/footer";

class App extends Component {
  state = {
    List: [
      {
        "Avatar": "https://bootdey.com/img/Content/avatar/avatar3.png",
        "Name": "Mila Kunis",
        "Created": "2013/08/08",
        "Role": "Admin",
        "Status": "Active",
        "Email": "mila@kunis.com"
      },
      {
        "Avatar": "https://bootdey.com/img/Content/avatar/avatar2.png",
        "Name": "Camil Jonson",
        "Created": "2013/08/08",
        "Role": "User",
        "Status": "Inactive",
        "Email": "camil@gmail.com"
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