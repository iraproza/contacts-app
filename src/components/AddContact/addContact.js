import React, {Fragment} from "react";
import { Link } from "react-router-dom";


const AddContact = ({onAddContact}) =>{
    return(
        <Fragment>
            <div className="container search-container">
                    <form className="new-contact row justify-content-center">
                        <label className="col-7 col-md-7 col-lg-7" htmlFor="name">Name</label>
                        <input className="col-7 col-md-7 col-lg-7" type="text" id="name" name="name" placeholder="Your name.."></input>
                        <label className="col-7 col-md-7 col-lg-7" htmlFor="gender">Gender</label>
                        <input className="col-7 col-md-7 col-lg-7" type="text" id="gender" name="gender" placeholder="Gender..."></input>
                        <label className="col-7 col-md-7 col-lg-7" htmlFor="role">Role</label>
                        <input className="col-7 col-md-7 col-lg-7" type="text" id="role" name="role" placeholder="Role..."></input>
                        <label className="col-7 col-md-7 col-lg-7" htmlFor="status">Status</label>
                        <input className="col-7 col-md-7 col-lg-7" type="text" id="status" name="status" placeholder="Status..."></input>
                        <label className="col-7 col-md-7 col-lg-7" htmlFor="created">Created</label>
                        <input className="col-7 col-md-7 col-lg-7" type="text" id="created" name="created" placeholder="created..."></input>
                        <label className="col-7 col-md-7 col-lg-7" htmlFor="email">Email</label>
                        <input className="col-7 col-md-7 col-lg-7" type="email" id="email" name="email" placeholder="Email..."></input>
                        <label className="col-7 col-md-7 col-lg-7" htmlFor="avatar">Avatar</label>
                        <input className="col-7 col-md-7 col-lg-7" type="number" id="avatar" name="avatar" placeholder="Avatar..."></input>
                        <Link to="/" className="col-7 col-md-7 col-lg-7 btn btn-outline-dark" onClick = {onAddContact}> Add contact </Link>
                    </form>
            </div>
        </Fragment>
    )
}

export default AddContact;