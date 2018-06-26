import React from 'react';
import {shallow, mount} from 'enzyme';

import Game from './game';

describe('<Feedback />', () => {
	it('Renders without crashing', () => {
		shallow(<Game />);
	});

	it('Starts a new game', () => {
		const wrapper = shallow(<Game />);
		wrapper.setState({
			guesses: [2, 6, 8],
			feedback: 'Very close!',
			correctAnswer: -10
		});
		wrapper.instance().restartGame();
		expect(wrapper.state('guesses')).toEqual([]);
		expect(wrapper.state('feedback')).toEqual('Make your guess!');
		expect(wrapper.state('correctAnswer')).toBeGreaterThanOrEqual(0);
    	expect(wrapper.state('correctAnswer')).toBeLessThanOrEqual(100);	  	
	});

	it('Can record guesses and provide feedback', () => {
		const wrapper = shallow(<Game />);
		wrapper.setState({
			correctAnswer: 10
		});
		wrapper.instance().makeGuess(40);
		expect(wrapper.state('guesses')).toEqual([40]);
    	expect(wrapper.state('feedback')).toEqual('You\'re Cold...');

    	wrapper.instance().makeGuess(20);
    	expect(wrapper.state('guesses')).toEqual([40, 20]);
    	expect(wrapper.state('feedback')).toEqual('You\'re Warm.');

    	wrapper.instance().makeGuess(10);
    	expect(wrapper.state('guesses')).toEqual([40, 20, 10]);
    	expect(wrapper.state('feedback')).toEqual('You got it!');
	});
});