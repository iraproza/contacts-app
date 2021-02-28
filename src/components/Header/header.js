import React, { Fragment } from "react";
import "./header.css";

const Header = () =>{
    return(
        <Fragment>
            <div className="container">
                <div className="row">
                    <div className="col-12 ">
                        <ul className="nav nav-pills justify-content-between">
                            <li className="nav-item">
                                <a className="nav-link" href="#"><i className="fas fa-house-user home-icon"></i></a>
                            </li>
                            <li className="nav-item logo nav-link">
                                <i class="fas fa-mail-bulk"></i><i class="far fa-address-book"></i><i class="fas fa-paper-plane"></i><i class="fas fa-phone"></i><i class="fas fa-envelope-open-text"></i>
                            </li>
                            <li class="nav-item">
                                <a className="nav-link" href="#"><i className="fas fa-user-plus add-contact-icon"></i></a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default Header;