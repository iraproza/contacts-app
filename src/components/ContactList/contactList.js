import React, { Fragment, useEffect } from "react";
import ContactItem from "./ContactItem/contactItem";
import { connect } from "react-redux";
import { updateDatabase } from "../../Services/api-service";
import { getAllContacts } from "../../Actions/ContactListActions";

const ContactList = ({List, getAllContacts}) => {

    useEffect(() => {
        updateDatabase().then(data => {
            getAllContacts(data)
        })
    })
    
    const item = List.map(contact => {
        return (
            <ContactItem Id={contact.Id} key={contact.Id} Avatar = {contact.Avatar} Name = {contact.Name} Created = {contact.Created} Role = {contact.Role} Status = {contact.Status} Email = {contact.Email} Gender = {contact.Gender} 
            />
            //* onStatusChange ={() => onStatusChange(contact.Id)} onDelete = {() => onDelete (contact.Id)} onEditClick = {() => onEditClick (contact.Id)}
        )
    })
    return(
        <Fragment>
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="main-box clearfix">
                            <div className="table-responsive">
                                <table className="table user-list">
                                    <thead>
                                        <tr>
                                            <th><span>User</span></th>
                                            <th className="text-center"><span>Created</span></th>
                                            <th className="text-center"><span>Status</span></th>
                                            <th className="text-center"><span>Email</span></th>
                                            <th className="text-center">&nbsp;</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {item.length > 0 ? item : <tr><td><h2>Contacts not found</h2></td></tr>}
                                    </tbody>
                                </table> 
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

const mapStateToProps = ({ ContactListReducer }) => {
    const { List } = ContactListReducer;
    return { List }
}
const mapDispatchToProps = {
    getAllContacts
}
export default connect(mapStateToProps, mapDispatchToProps)(ContactList);