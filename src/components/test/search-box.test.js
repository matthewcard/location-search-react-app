import React from 'react';
import SearchBox from '../search-box';
import { render, screen } from '@testing-library/react';

jest.mock('../../state/results-context', () => ({
    useResultsContext: () => ({ setResults: jest.fn() })
}));

jest.mock('../../state/input-value-context', () => ({
    useInputValueContext: () => ({ setInputValue: jest.fn() })
}));

test('renders input button correctly', () => {

    render(<SearchBox />);
  
    const placeholderText = screen.getByPlaceholderText('Search locations here');
    expect(placeholderText).toBeInTheDocument();
});
  