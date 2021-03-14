import React, {Fragment} from "react";
import {Redirect} from "react-router-dom";
import "./editContact.css";

class EditContact extends React.Component{
    state = {
        "Id": this.props.currentContact.Id,
        "Avatar": this.props.currentContact.Avatar,
        "Name": this.props.currentContact.Name,
        "Created": this.props.currentContact.Created,
        "Role": this.props.currentContact.Role,
        "Status": this.props.currentContact.Status,
        "Email": this.props.currentContact.Email,
        "Gender": this.props.currentContact.Gender,
        "isRedirect": false
    }   
    getName = (event) => {
        this.setState({
            Name: event.target.value
        })
    }     
    
    getAvatar = (event) => {
        this.setState({
            Avatar: event.target.value
        })
    }
    getEmail = (event) => {
        this.setState({
            Email: event.target.value
        })
    }

    getRole = (event) => {
        this.setState({
            Role: event.target.value
        })
    }
    getGender = (event) => {
        this.setState({
            Gender: event.target.value
        })
    }

    getStatus = (event) => {
        this.setState({
            Status: event.target.value
        })
    }
    
    editContact = (event) =>{
        event.preventDefault();
        const {Avatar, Name, Email, Status, Role, Gender, Created, Id} =  this.state;
        const contact = { Id, Avatar, Name, Created, Status, Role, Gender, Email };
        const {onEditContact} = this.props;
        onEditContact(contact);
        this.setState({
            isRedirect: true
        })
    }

    render() {
        const {Name, Avatar, Role, Status, Email, Gender, isRedirect} = this.state; 
        const URL = `https://randomuser.me/api/portraits/${Gender}/${Avatar}.jpg`;
        if(isRedirect){
            return(
                <Redirect to = "/"/>
            )
        }
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
                                                    className="center-block img-responsive img-circle img-thumbnail thumb96" src={URL}
                                                     alt="Contact" />
                                                </div>
                                                <h3 className="m0 text-bold">{Name}</h3>
                                                <div>
                                                    <p className="key">Gender: <span>{Gender}</span></p> 
                                                    <p className="key">Role: <span>{Role}</span></p> 
                                                    <p className="key">Status: <span>{Status}</span></p> 
                                                    <p className="key">Email: <span>{Email}</span></p> 
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <form onSubmit = {this.editContact} className="new-contact justify-content-center align-items-center d-flex flex-column col-8">
                                        <label className="col-7 col-md-7 col-lg-7" htmlFor="name">Name</label>
                                        <input className="col-7 col-md-7 col-lg-7" type="text" id="name" name="name" placeholder="Your name.." onChange = {this.getName} value={Name}></input>
                                        <label className="col-7 col-md-7 col-lg-7" htmlFor="role">Role</label>
                                        <input className="col-7 col-md-7 col-lg-7" type="text" id="role" name="role" placeholder="Role..." onChange = {this.getRole} value={Role}></input>
                                        <label className="col-7 col-md-7 col-lg-7" htmlFor="status">Status</label>
                                        <input className="col-7 col-md-7 col-lg-7" type="text" id="status" name="status" placeholder="Status..." onChange = {this.getStatus} value={Status}></input>
                                        <div className="col-7 col-md-7 col-lg-7 gender-label">
                                            <label htmlFor="gender">Gender: </label>
                                            <label>
                                                <input  type="radio" name="gender" value="men" onChange = {this.getGender}></input>
                                            man
                                            </label>
                                            <label >
                                                <input type="radio" name="gender" value="women" onChange = {this.getGender}></input>
                                            woman
                                            </label>  
                                        </div>
                                        <label className="col-7 col-md-7 col-lg-7" htmlFor="email">Email</label>
                                        <input className="col-7 col-md-7 col-lg-7" type="email" id="email" name="email" placeholder="Email..." onChange = {this.getEmail} value={Email}></input>
                                        <label className="col-7 col-md-7 col-lg-7" htmlFor="avatar">Avatar</label>
                                        <input className="col-7 col-md-7 col-lg-7" type="number" min="1" max="99" id="avatar" name="avatar" placeholder="Avatar..." onChange = {this.getAvatar} value={Avatar}></input>
                                        <button className="col-7 col-md-7 col-lg-7" type="submit"> Edit contact </button>
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