import React, {Fragment} from "react";
import "./search.css";


class Search  extends React.Component {    
    getValueSearch = (event) =>{
        const searchTarget = event.target.value;
        const {onSearchContact, onSearchValue} = this.props;
        onSearchValue(searchTarget);
        onSearchContact(searchTarget);
    }
    render(){
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
                                        <input className="search-input form-control form-control-lg form-control-borderless" type="search" placeholder="Search contact" onChange = {this.getValueSearch}/>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </Fragment>
        )
    }
}

export default Search;