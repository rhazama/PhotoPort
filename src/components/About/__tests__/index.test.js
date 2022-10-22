import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import About from '..';
import Nav from '..';

afterEach(cleanup);

describe('About component', () => {
    // First Test
    it('renders', () => {
      render(<About />);
    });
    // Second Test
    it('matches snapshot DOM node structure', () => {
        // render About
        const { asFragment } = render(<About />);
        expect(asFragment()).toMatchSnapshot();
    });
});

describe('Nav component', () => {
    // baseline test
    it('renders', () => {
        render(<Nav />);
    });

    // snapshot test
    it('matches snapshot', () => {
        const { asFragment } = render(<Nav />);
        // assert value comparison
    });
})