import { expect } from 'chai';
import { mount, render, shallow, configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { createMockStore } from 'redux-test-utils';

configure({ adapter: new Adapter() });

const shallowWithStore = (component, store) => {
    const context = {
        store,
    };
    return shallow(component, {context});
}


global.expect = expect;
global.createMockStore = createMockStore;

global.mount = mount;
global.render = render;
global.shallow = shallow;
global.shallowWithStore = shallowWithStore;
