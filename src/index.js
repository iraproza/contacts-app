import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import "./index.css";

// Components
import Header from "./components/Header/Header";
import Search from "./components/Search/Search";
import ContactList from "./components/ContactList/ContactList";
import Footer from "./components/Footer/Footer";

const App = () => {
  return(
    <Fragment>
      <Header />
      <Search/>
      <ContactList />
      <Footer/>
    </Fragment>
  )
}

ReactDOM.render(<App />, document.getElementById("root"));