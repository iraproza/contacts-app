import React, {Fragment} from "react";

const AddContact = ({onAddContact}) =>{
    return(
        <Fragment>
            <div className="container search-container">
                <div className="row justify-content-center">
                    <div className="col-12 col-md-12 col-lg-12">
                        <form className="new-contact">
                            <label for="name">Name</label>
                            <input type="text" id="name" name="firstname" placeholder="Your name.."></input>
                            <label for="gender">Gender</label>
                            <input type="text" id="gender" name="gender" placeholder="Gender..."></input>
                            <label for="role">Role</label>
                            <input type="text" id="role" name="role" placeholder="Role..."></input>
                            <label for="status">Status</label>
                            <input type="text" id="status" name="status" placeholder="Status..."></input>
                            <label for="created">Created</label>
                            <input type="text" id="created" name="created" placeholder="created..."></input>
                            <label for="email">Email</label>
                            <input type="email" id="email" name="email" placeholder="Email..."></input>
                            <label for="avatar">Avatar</label>
                            <input type="text" id="avatar" name="avatar" placeholder="Avatar..."></input>
                            <input type="submit" onClick = {onAddContact}></input>
                        </form>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default AddContact;