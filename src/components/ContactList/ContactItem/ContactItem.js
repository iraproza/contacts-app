import React from "react";
import "./contactItem.css";
import {Link} from "react-router-dom";
import {Redirect} from "react-router-dom";
import {saveData} from "../../../Services/api-service";
import { connect } from "react-redux";

class ContactItem extends React.Component {
    deleteContact = (Id) => {
        console.log( )
    const index = this.props.Id;
    console.log(this.props.Id)
    let newList1 = this.state.List.slice();
    newList1.splice([index],1);
    this.setState(() => {
      return {
        List: newList1
      }
    })

    this.saveData(newList1)
  }

    render () {
        const { onStatusChange, onEditClick } = this.props;
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
                    <span className={statusStyle} onClick={onStatusChange} >{Status}</span>
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
                    <a href="/#" className="table-link danger" onClick={this.deleteContact}>
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

export default connect(mapStateToProps)(ContactItem);