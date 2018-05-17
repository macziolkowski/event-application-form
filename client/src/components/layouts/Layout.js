import React, {Component} from 'react';
import ApplicationForm from '../containers/ApplicationForm';
import List from '../containers/List';

class Layout extends Component {
    render() {
        return (
            <div className='layout'>
                <ApplicationForm></ApplicationForm>
                <List></List>
            </div>
        )
    }
}

export default Layout;
