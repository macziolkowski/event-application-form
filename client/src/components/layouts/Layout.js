import React, {Component} from 'react';
import ApplicationForm from '../containers/ApplicationForm';
import List from '../containers/List';

class Layout extends Component {
    render() {
        return (
            <div>
                <div className="sticky-top">
                    <ApplicationForm></ApplicationForm>
                </div>
                <div className='container'>                    
                    <div className="d-flex justify-content-center mt-4">
                        <List></List>
                    </div>
                </div>
            </div>
        )
    }
}

export default Layout;
