import React, { Fragment } from "react";
import { Link } from "react-router-dom";

import "./header.css";
import Search from "../../Components/Search/search";

const Header = ({onSearchContact, onSearchValue}) =>{
    return(
        <Fragment>
            <div className="container">
                <div className="row">
                    <div className="col-12 ">
                        <ul className="nav nav-pills justify-content-between">
                            <li className="nav-item">
                                <Link className="nav-link" to="/"><i className="fas fa-house-user home-icon"></i></Link>
                            </li>
                            <li className="nav-item logo nav-link">
                                Contact List
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/add-contact"><i className="fas fa-user-plus add-contact-icon"></i></Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <Search onSearchContact = {onSearchContact} onSearchValue = {onSearchValue}/>
        </Fragment>
    )
}

export default Header;