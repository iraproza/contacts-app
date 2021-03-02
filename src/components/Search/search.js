import React, {Fragment} from "react";
import "./search.css";


const Search = () =>{
    return(
        <Fragment>
            <div className="container search-container">
                <br/>
                <div className="row justify-content-center">
                    <div className="col-12 col-md-12 col-lg-12">
                        <form className="card card-sm">
                            <div className="card-body row no-gutters align-items-center">
                                <div className="col-auto">
                                <i className="fas fa-search"></i>
                                </div>
                                <div className="col search-input-box">
                                    <input className="search-input form-control form-control-lg form-control-borderless" type="search" placeholder="Search contact"/>
                                </div>
                                <div className="col-auto">
                                    <button className="btn-search btn btn-lg btn-primary" type="submit">Search</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default Search;