import React, { Fragment } from "react";
import { Link } from "react-router-dom";

import "./header.css";
import Search from "../../components/Search/search";

const Header = () =>{
    return(
        <Fragment>
            <div className="container">
                <div className="row">
                    <div className="col-12 ">
                        <ul className="nav nav-pills justify-content-between">
                            <li className="nav-item">
                                <Link className="nav-link" to="/home"><i className="fas fa-house-user home-icon"></i></Link>
                            </li>
                            <li className="nav-item logo nav-link">
                                <Link className="nav-link" to="/"><i className="fas fa-mail-bulk"></i><i className="far fa-address-book"></i><i className="fas fa-paper-plane"></i><i className="fas fa-phone"></i><i className="fas fa-envelope-open-text"></i></Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/add-contact"><i className="fas fa-user-plus add-contact-icon"></i></Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <Search/>
        </Fragment>
    )
}

export default Header;