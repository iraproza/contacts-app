import React, { Fragment } from "react";

const Header = () =>{
    return(
        <Fragment>
            <div className="container">
                <div className="row">
                    <div className="col-12 ">
                        <ul className="nav nav-pills justify-content-between">
                            <li className="nav-item">
                                <a className="nav-link" href="#"><i className="fas fa-house-user"></i></a>
                            </li>
                            <li class="nav-item">
                                <a className="nav-link" href="#"><i className="fas fa-user-plus"></i></a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default Header;