import React, {Component} from 'react';
import UserListItem from '../presentation/UserListItem';
import {connect} from 'react-redux';
import {fetchUsers} from '../../actions/actions';

class List extends Component {

    componentDidMount() {
        this.props.dispatch(fetchUsers());
    }

    render () {

        const userItems = this.props.users.map( (users, i) => {
            return (<li key={i}><UserListItem data={users}/></li>)
        });

        return (
            <div>
                <div>
                    <h3>Participants</h3>
                </div>
                <ul>
                    {(this.props.users.length > 0) ? <ul>{userItems}</ul>
                    : <div>There are no participants enrolled</div>}
                </ul>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        users: state.users.users // #
    }
}

export default connect(mapStateToProps)(List);
