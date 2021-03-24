import React from "react";
import "./contactItem.css";
import {Link} from "react-router-dom";
import {Redirect} from "react-router-dom";
import {saveData} from "../../../Services/api-service";
import { deleteContact, updateStatus } from "../../../Actions/ContactListActions";
import { connect } from "react-redux";

class ContactItem extends React.Component {

    onDeleteContact = () => {
        const { List, deleteContact } = this.props;
        const contact = this.props;
        const newList = List.filter((contact_item) => {
            return contact_item.Id !== contact.Id;
        });
        deleteContact(contact.Id);
        saveData(newList).then(() => {
            this.setState({
                List: newList,
                isRedirect: true
            })
        }) 
    }

    onStatusChange = () =>{
        const contact = {...this.props};
        const { List, updateStatus } = this.props;
        const newList = List.slice();
        const index = List.findIndex((elem) => elem.Id === contact.Id);

        if (newList[index].Status === "Inactive"){
            newList[index].Status = "Active"
        }
        else if (newList[index].Status === "Active"){
            newList[index].Status = "Pending"
        }
        else if (contact.Status === "Pending"){
            newList[index].Status = "Banned"
        }
        else{
            newList[index].Status = "Inactive"
        }
        updateStatus(newList);
        saveData(newList).then(() => {
            this.setState({
                List: newList
            })
        }) 
    }

    render () {
        const { onEditClick } = this.props;
        const {Avatar, Name, Created, Role, Status, Email, Gender} = this.props;
        const URL = `https://randomuser.me/api/portraits/${Gender}/${Avatar}.jpg`;
        let statusStyle = "badge bg-secondary status";
        switch(Status) {
            case 'Active': statusStyle = "badge bg-success status";
            break;
            case 'Banned': statusStyle = "badge bg-danger status";
            break; 
            case 'Pending': statusStyle = "badge bg-warning status";
            break;
            default: statusStyle = "badge bg-secondary status";
          }          

        return (
            <tr>
                <td>
                    <img src={URL} alt=""/>
                    <a href="/#" className="user-link">{Name}</a>
                    <span className="user-subhead">{Role}</span>
                </td>
                <td className="text-center">
                {Created}
                </td>
                <td className="text-center">
                    <span className={statusStyle} onClick={this.onStatusChange} >{Status}</span>
                </td>
                <td className="text-center">
                    <a className="email" href="/#">{Email}</a>
                </td>
                <td className="text-center">
                    <a href="/#" className="table-link">
                        <span className="fa-stack">
                            <i className="fa fa-square fa-stack-2x"></i>
                            <i className="fa fa-search-plus fa-stack-1x fa-inverse"></i>
                        </span>
                    </a>
                    <Link to="/edit-contact" className="table-link" onClick={onEditClick}>
                        <span className="fa-stack">
                            <i className="fa fa-square fa-stack-2x"></i>
                            <i className="fa fa-pencil fa-stack-1x fa-inverse"></i>
                        </span>
                    </Link>
                    <a href="/#" className="table-link danger" onClick={this.onDeleteContact}>
                        <span className="fa-stack">
                            <i className="fa fa-square fa-stack-2x"></i>
                            <i className="fa fa-trash-o fa-stack-1x fa-inverse"></i>
                        </span>
                    </a>
                </td>
            </tr>
        )
    }
}

const mapStateToProps  = ({ ContactListReducer }) => {
    const { List } = ContactListReducer;
    return { List }
}

const mapDispatchToProps = {
    deleteContact,
    updateStatus
}

export default connect(mapStateToProps, mapDispatchToProps)(ContactItem);