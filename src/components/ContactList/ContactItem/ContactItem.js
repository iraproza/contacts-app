import React from "react";

class ContactItem extends React.Component {
    state = {
        "Avatar": this.props.Avatar,
        "Name": this.props.Name,
        "Created": this.props.Created,
        "Role": this.props.Role,
        "Status": this.props.Status,
        "Email": this.props.Email,
        "Gender": this.props.Gender
    }
    render () {
        console.log("contactItem PROPS =>", this.props)
        const {Avatar, Name, Created, Role, Status, Email, Gender} = this.state;
        const URL = `https://randomuser.me/api/portraits/${Gender}/${Avatar}.jpg`;
        let statusStyle = "badge bg-secondary";
        if(Status === "Active"){
            statusStyle = "badge bg-success"
        }
        else if(Status === "Banned"){
            statusStyle = "badge bg-danger"
        }
        else if(Status === "Pending"){
            statusStyle = "badge bg-warning"
        }
        return (
            <tr>
                <td>
                    <img src={URL} alt=""/>
                    <a href="#" className="user-link">{Name}</a>
                    <span className="user-subhead">{Role}</span>
                </td>
                <td className="text-center">
                {Created}
                </td>
                <td className="text-center">
                    <span className={statusStyle}>{Status}</span>
                </td>
                <td className="text-center">
                    <a className="email" href="#">{Email}</a>
                </td>
                <td className="text-center">
                    <a href="#" className="table-link">
                        <span className="fa-stack">
                            <i className="fa fa-square fa-stack-2x"></i>
                            <i className="fa fa-search-plus fa-stack-1x fa-inverse"></i>
                        </span>
                    </a>
                    <a href="#" className="table-link">
                        <span className="fa-stack">
                            <i className="fa fa-square fa-stack-2x"></i>
                            <i className="fa fa-pencil fa-stack-1x fa-inverse"></i>
                        </span>
                    </a>
                    <a href="#" className="table-link danger">
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
export default ContactItem;