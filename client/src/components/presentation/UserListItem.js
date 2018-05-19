import React, {Component} from 'react';
import PropTypes from 'prop-types';

class UserListItem extends Component {
    render () {
        return (
            <tr>
                <td>{this.props.data.firstName}</td>
                <td>{this.props.data.lastName}</td>
                <td>{this.props.data.email}</td>
                <td>{this.props.data.date}</td>
            </tr>
        )
    }
}

UserListItem.propTypes = {
    data: PropTypes.shape({
        _id: PropTypes.string.isRequired,
        firstName: PropTypes.string.isRequired,
        lastName: PropTypes.string.isRequired,
        email: PropTypes.string.isRequired,
        date: PropTypes.string.isRequired
    })
}

export default UserListItem;
