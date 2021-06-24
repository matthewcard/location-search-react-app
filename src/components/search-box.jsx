import React from 'react';
import styled from '@emotion/styled';
import getLocationSearchResults from '../results-service/search-result-service';
import { useResultsContext } from '../state/results-context';
import { useInputValueContext } from '../state/input-value-context';

const StyledInput = styled.input`
    padding: 0.5rem;
    display: block;
    width: 15.5rem;
    border-radius: 0.375rem;
    margin: 0 auto;
`;

const VisuallyHiddenSpan = styled.span`
    overflow: hidden;
    margin: 0;
    width: 1px;
    height: 1px;
    clip-path: inset(100%);
`;

const SearchBox = () => {
    const { setResults } = useResultsContext();
    const { setInputValue } = useInputValueContext();
    
    const clearSearchBox = () => {
        setResults([]);
    }

    const processSearchTerm = async (e) => {
        const value = e.target.value.trim();

        if(value.length >= 2) {
            const getResults = await getLocationSearchResults(value);
    
            setResults(getResults);
            setInputValue(value);
        } else {
            clearSearchBox();
            setInputValue(value);
        }
    }

    return (
        <>  
            <VisuallyHiddenSpan>
                <label htmlFor='search-box'>Search for a location</label>
            </VisuallyHiddenSpan>
            <StyledInput
                type='search'
                id='search-box'
                onChange={processSearchTerm}
                role="search-box"
                data-testid="test-search-box"
                placeholder='Search locations here'
            />
        </>
    );
}

export default SearchBox;