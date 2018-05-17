import React, {Component} from 'react';
import PropTypes from 'prop-types';

class UserListItem extends Component {
    render () {
        return (
            <div className='user-list-item'>
                <span>{this.props.data.firstName}</span>
                <span>{this.props.data.lastName}</span>
                <span>{this.props.data.email}</span>
                <span>{this.props.data.date}</span>
            </div>
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
