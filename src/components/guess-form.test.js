import React from 'react';
import {shallow, mount} from 'enzyme';

import GuessForm from './guess-form';

describe('<GuessForm />', () => {
	it('Renders without crashing', () => {
		shallow(<GuessForm />);
	});

	it('Should fire the onAdd callback when the form is submitted', () => {
        const callback = jest.fn();
        const wrapper = mount(<GuessForm onMakeGuess={callback} />);
        const value = 10;   
        wrapper.update();   //to render form
        wrapper.find('input[type="number"]').instance().value = value;
        wrapper.simulate('submit');
        expect(callback).toHaveBeenCalledWith(value.toString());
    });

});