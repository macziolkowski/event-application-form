import React, {Component} from 'react';
import UserListItem from '../presentation/UserListItem';
import {connect} from 'react-redux';
import {fetchUsers} from '../../actions/actions';

export class List extends Component {

    componentDidMount() {
        this.props.dispatch(fetchUsers());
    }

    render () {

        const userItems = this.props.users.map( (users, i) => {
            return (<UserListItem key={i} data={users}/>)
        });

        return (
            <div>
                <table className="table table-striped">
                    <thead className="bg-primary text-light">
                        <tr>
                            <th scope="col">First name</th>
                            <th scope="col">Last name</th>
                            <th scope="col">E-mail</th>
                            <th scope="col">Registration date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {(this.props.users.length > 0) ? userItems
                        : <tr>
                            <td>There are no participants enrolled</td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>}
                    </tbody>
                </table>
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
