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
            submission: {
                firstName: '',
                lastName: '',
                email: '',
                date: '',
                validation: this.validator.valid()
            }
        }

        this.submitted = false;
    }

    componentDidMount() {}

    updateSubmission(event) {
        let updatedSubmission = Object.assign({}, this.state.submission);

        updatedSubmission[event.target.id] = event.target.value;
        this.setState({
            submission: updatedSubmission
        })
    }

    handleFormSubmit = event => {
        event.preventDefault(); // Do I need this?

        const validation = this.validator.validate(this.state.submission);
        this.setState({validation});
        this.submitted = true;

        console.log(validation);

        if (validation.isValid) {
            this.submitSubmission(); // Bug ?
        }
    }

    submitSubmission() {
        this.props.dispatch(submitUser(this.state.submission));
        this.props.history.push("/");
    }

    render () {
        let validation = this.submitted ?
                        this.validator.validate(this.state.submission) :
                        this.state.submission.validation

        return (
            <form className='application-form'>
                <div>
                    <label htmlFor="firstName">First name</label>
                    <input type="text"
                        id="firstName"
                        name="firstName"
                        placeholder="First name"
                        onChange={this.updateSubmission.bind(this)}
                    />
                    <span>{validation.firstName.message}</span>
                </div>
                <div>
                    <label htmlFor="lastName">Last name</label>
                    <input type="text"
                        id="lastName"
                        name="lastName"
                        placeholder="Last name"
                        onChange={this.updateSubmission.bind(this)}
                    />
                    <span>{validation.lastName.message}</span>
                </div>
                <div>
                    <label htmlFor="email">E-mail</label>
                    <input type="email"
                        onChange={this.updateSubmission.bind(this)}
                        id="email"
                        name="email"
                        placeholder="E-mail"
                    />
                    <span>{validation.email.message}</span>
                </div>
                <div>
                    <label htmlFor="date">Date</label>
                    <input type="date"
                        id="date"
                        name="date"
                        placeholder="E-mail"
                        onChange={this.updateSubmission.bind(this)}
                    />
                </div>

                <button onClick={this.handleFormSubmit}>
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
