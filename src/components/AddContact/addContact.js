import React, {Fragment} from "react";
import { v4 as uuidv4 } from 'uuid';
import {Redirect} from "react-router-dom";
import {saveData} from "../../Services/api-service";
import { connect } from "react-redux";
import { addNewContact } from "../../Actions/ContactListActions";

class AddContact extends React.Component{
    state = {
        "Avatar": 1,
        "Name": "",
        "Created": "",
        "Role": "",
        "Status": "",
        "Email": "",
        "Gender": "women",
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

    getStatus = (event) => {
        this.setState({
            Status: event.target.value
        })
    }

    getGender = (event) => {
        this.setState({
            Gender: event.target.value
        })
    }

    addNewContact = (event) =>{
        event.preventDefault();
        const {Avatar, Name, Email, Status, Role, Gender} =  this.state;
        const Created = (new Date()).toLocaleDateString();
        const Id = uuidv4();
        const newContact = { Id, Avatar, Name, Created, Status, Role, Gender, Email};
        const { List, addNewContact } = this.props;
        addNewContact(newContact);
        List.push(newContact);
        saveData(List).then(() => {
            this.setState({
                isRedirect: true
            })
        }) 
    }
 
    render() {
        const {Name, Gender, Role, Status, Email, Avatar, isRedirect} = this.state;
        if(isRedirect){
            return(
                <Redirect to = "/"/>
            )
        }
        const URL = `https://randomuser.me/api/portraits/${Gender}/${Avatar}.jpg`;
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
                                                    src={URL} alt="Contact" />
                                                </div>
                                                <h3 className="m0 text-bold">{Name.length>0?Name:"User Name"}</h3>
                                                <div>
                                                    <p>Gender: <span>{Gender}</span></p> 
                                                    <p>Role: <span>{Role}</span></p> 
                                                    <p>Status: <span>{Status}</span></p> 
                                                    <p>Email: <span>{Email}</span></p> 
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <form onSubmit = {this.addNewContact} className="new-contact  justify-content-center col-8">
                                        <label className="col-7 col-md-7 col-lg-7" htmlFor="name">Name</label>
                                        <input className="col-7 col-md-7 col-lg-7" type="text" id="name" name="name" placeholder="Your name.." onChange = {this.getName}></input>
                                        <div className="col-7 col-md-7 col-lg-7 gender-label">
                                            <label  htmlFor="gender">Gender: </label>
                                            <label>
                                                <input  type="radio" name="gender" value="men" onChange = {this.getGender}></input>
                                            man
                                            </label>
                                            <label>
                                                <input type="radio" name="gender" value="women" onChange = {this.getGender}></input>
                                            woman
                                            </label>  
                                        </div>                                      
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
const mapStateToProps  = ({ ContactListReducer }) => {
    const { List } = ContactListReducer;
    return { List }
}

const mapDispatchToProps = {
    addNewContact
}

export default connect(mapStateToProps, mapDispatchToProps )(AddContact);