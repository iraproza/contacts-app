import React, {Fragment} from "react";
import {connect} from "react-redux";
import "./search.css";
import {searchContact} from "../../Actions/ContactListActions"


const Search= ({ searchContact }) => {  
    const onSearch = (event) => {
        searchContact(event.target.value)
    }

        return(   
            <Fragment>
                <div className="container search-container">
                    <br/>
                    <div className="row justify-content-center">
                        <div className="col-12 col-md-12 col-lg-12">
                            <div className="card card-sm">
                                <div className="card-body row no-gutters align-items-center">
                                    <div className="col-auto">
                                    <i className="fas fa-search"></i>
                                    </div>
                                    <div className="col search-input-box">
                                        <input className="search-input form-control form-control-lg form-control-borderless" type="search" placeholder="Search contact" onChange = {onSearch}/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Fragment>
        )
}

const mapDispatchToProps = {
    searchContact
}
export default connect(null, mapDispatchToProps)(Search);