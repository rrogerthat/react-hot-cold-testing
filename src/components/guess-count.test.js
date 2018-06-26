import React from 'react';
import {shallow, mount} from 'enzyme';

import GuessCount from './guess-count';

describe('<GuessCount />', () => {
	it('Renders without crashing', () => {
		shallow(<GuessCount />);
	});

	it('Feedback on number of guesses', () => {
		const num = 10;
		const wrapper = shallow(<GuessCount guessCount={num}/>);
		expect(wrapper.text()).toEqual(`You've made ${num} guesses!`);
	});

});