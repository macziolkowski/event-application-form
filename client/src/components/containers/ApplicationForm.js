import React, {Component} from 'react';
import {connect} from 'react-redux';
import {submitUser} from '../../actions/actions';
import {withRouter} from 'react-router-dom';
import FormValidator from './FormValidator';

class ApplicationForm extends Component {

    constructor() {
        super();

        this.validator = new FormValidator([
            {
                field: 'email',
                method: 'isEmpty',
                validWhen: false,
                message: 'Email is required.'
            },
            {
                field: 'email',
                method: 'isEmail',
                validWhen: true,
                message: 'Please provide valid email.'
            },
            {
                field: 'firstName',
                method: 'isEmpty',
                validWhen: false,
                message: 'Please provide your first name.'
            },
            {
                field: 'lastName',
                method: 'isEmpty',
                validWhen: false,
                message: 'Please provide your last name.'
            }
        ])

        this.state = {
            submission: {}
        }
    }

    componentDidMount() {}

    updateSubmission(event) {
        let updatedSubmission = Object.assign({}, this.state.submission);

        console.log(this.state.submission);

        updatedSubmission[event.target.id] = event.target.value;
        this.setState({
            submission: updatedSubmission
        })
    }

    handleFormSubmit = event => {
        event.preventDefault(); // Do I need this?

        const validation = this.validator.validate(this.submission);
        this.setState({validation});
        this.submitted = true;

        if (validation.isValid) {
            this.submitSubmission.bind(this); // Bug ?
        }
    }

    submitSubmission() {
        this.props.dispatch(submitUser(this.state.submission));
        this.props.history.push("/");
    }

    render () {
        return (
            <form className='application-form'>
                <div>
                    <label htmlFor="firstName">First name</label>
                    <input type="text"
                        id="firstName"
                        placeholder="First name"
                        onChange={this.updateSubmission.bind(this)}
                    />
                </div>
                <div>
                    <label htmlFor="lastName">Last name</label>
                    <input type="text"
                        id="lastName"
                        placeholder="Last name"
                        onChange={this.updateSubmission.bind(this)}
                    />
                </div>
                <div>
                    <label htmlFor="email">E-mail</label>
                    <input type="email"
                        onChange={this.updateSubmission.bind(this)}
                        id="email"
                        placeholder="E-mail"
                    />
                </div>
                <div>
                    <label htmlFor="date">Date</label>
                    <input type="date"
                        id="date"
                        placeholder="E-mail"
                        onChange={this.updateSubmission.bind(this)}
                    />
                </div>

                <button onClick={this.submitSubmission.bind(this)}>
                    Submit
                </button>
            </form>
        )
    }
}

const mapStateToProps = state => {
    return {
    }
}

export default withRouter(connect(mapStateToProps)(ApplicationForm));
