import React from 'react';
import {ApplicationForm, handleFormSubmit} from './ApplicationForm';

describe('Application Form Component', () => {

    it('should render without crash', () => {
        expect(shallow(<ApplicationForm />).exists(<nav className="nav"></nav>)).to.equal(true);
    })

    it('should render first name input', () => {
        expect(shallow(<ApplicationForm />).find('#firstName').length).to.equal(1);
    })

    it('should render last name input', () => {
        expect(shallow(<ApplicationForm />).find('#lastName').length).to.equal(1);
    })

    it('should render email input', () => {
        expect(shallow(<ApplicationForm />).find('#email').length).to.equal(1);
    })

    it('should render date input', () => {
        expect(shallow(<ApplicationForm />).find('#date').length).to.equal(1);
    })

});

describe('First name input', () => {

    it('should respond to change event and change the state of the Component', () =>{
        const wrapper = shallow(<ApplicationForm/>);

        wrapper.find('#firstName').simulate(
            'change', {
                target: {
                    id: 'firstName',
                    value: 'John'
                }
            }
        )

        expect(wrapper.state().submission.firstName).to.equal('John');
    })

    it('should return validation alert when empty after submitting', () => {
        const wrapper = shallow(<ApplicationForm/>);

        wrapper.find('#submit').simulate('click', { preventDefault() {} });

        expect(
            wrapper.state().validation.firstName.message
        ).to.not.equal('');
    })
})

describe('Last name input', () => {

    it('should respond to change event and change the state of the Component', () =>{
        const wrapper = shallow(<ApplicationForm/>);

        wrapper.find('#lastName').simulate(
            'change', {
                target: {
                    id: 'firstName',
                    value: 'John'
                }
            }
        )

        expect(wrapper.state().submission.firstName).to.equal('John');
    })

    it('should return validation alert when empty after submitting', () => {
        const wrapper = shallow(<ApplicationForm/>);

        wrapper.find('#submit').simulate('click', { preventDefault() {} });

        expect(
            wrapper.state().validation.lastName.message
        ).to.not.equal('');
    })

})

describe('Email input', () => {

    it('should respond to change event and change the state of the Component', () =>{
        const wrapper = shallow(<ApplicationForm/>);

        wrapper.find('#email').simulate(
            'change', {
                target: {
                    id: 'firstName',
                    value: 'John'
                }
            }
        )

        expect(wrapper.state().submission.firstName).to.equal('John');
    })

    it('should return validation alert when empty after submitting', () => {
        const wrapper = shallow(<ApplicationForm/>);

        wrapper.find('#submit').simulate('click', { preventDefault() {} });

        expect(
            wrapper.state().validation.email.message
        ).to.not.equal('');
    })

})
