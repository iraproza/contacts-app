import React, {Fragment} from "react";

class AddContact extends React.Component{
    state = {
        "Avatar": 1,
        "Name": "",
        "Created": "",
        "Role": "",
        "Status": "",
        "Email": "",
        "Gender": "women"
    }

    getName = (event) => {
        console.log(event.target.value)
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

    addNewContact = (event) =>{
        event.preventDefault();
        const {Avatar, Name, Email, Status, Role, Gender} =  this.state;
        let Created = Date.now();
        const newContact = {Avatar, Name, Email, Status, Role, Gender, Created}
    }
 
    render() {
        const {Name, Gender, Avatar} = this.state;
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
                                            <h3 className="m0 text-bold">{Name}</h3>
                                            <div>
                                                <p>Hello, I'm a just a dummy contact in your contact list and this is my
                                                    presentation text. Have fun!</p>
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
                                    <input className="col-7 col-md-7 col-lg-7" type="text" id="status" name="status" placeholder="Status..."></input>
                                    <label className="col-7 col-md-7 col-lg-7" htmlFor="email">Email</label>
                                    <input className="col-7 col-md-7 col-lg-7" type="email" id="email" name="email" placeholder="Email..." onChange = {this.getEmail}></input>
                                    <label className="col-7 col-md-7 col-lg-7" htmlFor="avatar">Avatar</label>
                                    <input className="col-7 col-md-7 col-lg-7" type="number" min="1" max="99" id="avatar" name="avatar" placeholder="Avatar..." onChange = {this.getAvatar}></input>
                                    <button type="submit"> </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>   
        </Fragment>
    )
}
}

export default AddContact;