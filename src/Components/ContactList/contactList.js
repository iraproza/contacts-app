import React, { Fragment, useEffect } from "react";
import ContactItem from "./ContactItem/contactItem";
import { connect } from "react-redux";
import { updateDatabase } from "../../Services/api-service";
import { getAllContacts } from "../../Actions/ContactListActions";

const ContactList = ({List, searchList, valueSearch, getAllContacts}) => {

    useEffect(() => {
        updateDatabase().then(data => {
            getAllContacts(data)
        })
    }, [])

    const renderList = () =>{
        if(searchList.length === 0 && valueSearch.length === 0) {
            return List.map(contact => {
                return (
                    <ContactItem key={contact.Id} {...contact} />
                )
            })
        } 
        else if (searchList.length > 0) {
            return searchList.map(contact => {
                return (
                    <ContactItem key={contact.Id} {...contact} />
                )
            })
        }
        else if(searchList.length === 0 && valueSearch.length > 0 ){
           return <tr><td><h2>Contacts not found</h2></td></tr>;
        }
    }

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
                                        {renderList()}
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
    const { List, searchList, valueSearch } = ContactListReducer;
    return { List, searchList, valueSearch }
}
const mapDispatchToProps = {
    getAllContacts
}
export default connect(mapStateToProps, mapDispatchToProps)(ContactList);