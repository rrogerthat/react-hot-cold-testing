import React from 'react';
import {shallow, mount} from 'enzyme';

import Feedback from './feedback';

describe('<Feedback />', () => {
	it('Renders without crashing', () => {
		shallow(<Feedback />);
	});

	it('Provides feedback', () => {
		const response = 'You are close!';
		const wrapper = shallow(<Feedback feedback={response} />);
		expect(wrapper.contains(response)).toEqual(true);
	});

});