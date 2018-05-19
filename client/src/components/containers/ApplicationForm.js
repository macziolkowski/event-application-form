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
            <nav className="navbar navbar-light pt-4 border-bottom bg-light">
                <div class="container">
                    <a class="navbar-brand text-primary">Registration</a>
                    <form className="form-inline">
                        <div className='mr-sm-2'>
                            <input type="text"
                                id="firstName"
                                name="firstName"
                                className="form-control"
                                placeholder="First name"
                                onChange={this.updateSubmission.bind(this)}
                            />
                            <small className="form-text text-danger alert-box">
                                {validation.firstName.message}
                            </small>
                        </div>
                        <div className='mr-sm-2'>
                            <input type="text"
                                id="lastName"
                                name="lastName"
                                className="form-control"
                                placeholder="Last name"
                                onChange={this.updateSubmission.bind(this)}
                            />
                            <small className="form-text text-danger alert-box">
                                {validation.lastName.message}
                            </small>
                        </div>
                        <div className='mr-sm-2'>
                            <input type="email"
                                onChange={this.updateSubmission.bind(this)}
                                id="email"
                                name="email"
                                className="form-control"
                                placeholder="E-mail"
                            />
                            <small className="form-text text-danger alert-box">
                                {validation.email.message}
                            </small>
                        </div>
                        <div className='mr-sm-2'>
                            <input type="date"
                                id="date"
                                name="date"
                                className="form-control"
                                placeholder="E-mail"
                                onChange={this.updateSubmission.bind(this)}
                            />
                            <small className="form-text text-danger alert-box">
                            </small>
                        </div>
                        <button className="btn btn-outline-primary" onClick={this.handleFormSubmit}>
                            Submit
                        </button>
                    </form>
                </div>
            </nav>
        )
    }
}

const mapStateToProps = state => {
    return {
    }
}

export default withRouter(connect(mapStateToProps)(ApplicationForm));
