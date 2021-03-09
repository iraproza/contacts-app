import React, {Fragment} from "react";
import {Redirect} from "react-router-dom";

class EditContact extends React.Component{
    
    render() {
        return(
            <Fragment>
                <div className="container search-container">
                    <div className="row"> 
                        <div className="container bootstrap snippets bootdey">
                                <div className="row ng-scope">
                                    <div className="col-4">
                                        <div className="panel panel-default">
                                            <div className="panel-body text-center">
                                                <div className="pv-lg"><img
                                                    className="center-block img-responsive img-circle img-thumbnail thumb96"
                                                     alt="Contact" />
                                                </div>
                                                <h3 className="m0 text-bold"></h3>
                                                <div>
                                                    <p>Role <span></span> </p> 
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <form onSubmit = {this.addNewContact} className="new-contact  justify-content-center col-8">
                                        <label className="col-7 col-md-7 col-lg-7" htmlFor="name">Name</label>
                                        <input className="col-7 col-md-7 col-lg-7" type="text" id="name" name="name" placeholder="Your name.." onChange = {this.getName}></input>
                                        <label className="col-7 col-md-7 col-lg-7" htmlFor="gender">Gender</label>
                                        <input className="col-7 col-md-7 col-lg-7" type="text" id="gender" name="gender" placeholder="Gender..." ></input>
                                        <label className="col-7 col-md-7 col-lg-7" htmlFor="role">Role</label>
                                        <input className="col-7 col-md-7 col-lg-7" type="text" id="role" name="role" placeholder="Role..." onChange = {this.getRole}></input>
                                        <label className="col-7 col-md-7 col-lg-7" htmlFor="status">Status</label>
                                        <input className="col-7 col-md-7 col-lg-7" type="text" id="status" name="status" placeholder="Status..." onChange = {this.getStatus}></input>
                                        <label className="col-7 col-md-7 col-lg-7" htmlFor="email">Email</label>
                                        <input className="col-7 col-md-7 col-lg-7" type="email" id="email" name="email" placeholder="Email..." onChange = {this.getEmail}></input>
                                        <label className="col-7 col-md-7 col-lg-7" htmlFor="avatar">Avatar</label>
                                        <input className="col-7 col-md-7 col-lg-7" type="number" min="1" max="99" id="avatar" name="avatar" placeholder="Avatar..." onChange = {this.getAvatar}></input>
                                        <button className="col-7 col-md-7 col-lg-7" type="submit"> Add new contact </button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>   
            </Fragment>
        )
    }
}

export default EditContact;