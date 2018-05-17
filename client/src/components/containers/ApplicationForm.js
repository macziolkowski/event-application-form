import React, {Component} from 'react';
import {connect} from 'react-redux';
import {submitUser} from '../../actions/actions';
import {withRouter} from 'react-router-dom';

class ApplicationForm extends Component {

    constructor() {
        super();

        this.state = {
            submission: {}
        }
    }

    componentDidMount() {}

    updateSubmission(event) {
        let updatedSubmission = Object.assign({}, this.state.submission);

        updatedSubmission[event.target.id] = event.target.value;
        this.setState({
            submission: updatedSubmission
        })
    }

    submitSubmission() {
        this.props.dispatch(submitUser(this.state.submission));
        this.props.history.push("/");
    }

    render () {
        return (
            <div>
                First name <input onChange={this.updateSubmission.bind(this)} id="firstName" type="text" placeholder="First name"/><br/>
                Last name <input onChange={this.updateSubmission.bind(this)} id="lastName" type="text" placeholder="Last name"/><br/>
                E-mail <input onChange={this.updateSubmission.bind(this)} id="email" type="email" placeholder="E-mail"/><br/>
                Date <input onChange={this.updateSubmission.bind(this)} id="date" type="date" placeholder="E-mail"/><br/>
                <button onClick={this.submitSubmission.bind(this)}>Submit</button>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
    }
}

export default withRouter(connect(mapStateToProps)(ApplicationForm));
