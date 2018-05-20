import React from 'react';
import {ApplicationForm, handleFormSubmit} from './ApplicationForm';

describe('Application form tests', () => {

    it('should render successfully if string is not provided by store', () => {
        const wrapper = shallow(<ApplicationForm />);

        expect(wrapper.find('div').first()).to.have.length(1);
    })

});
