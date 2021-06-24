import React from 'react';
import { useResultsContext } from '../state/results-context';
import { useInputValueContext } from '../state/input-value-context';
import styled from '@emotion/styled';

const StyledUnorderedList = styled.ul`
    list-style: none;
    padding: 0;
`;

const ResultsList = () => {
   const { results } = useResultsContext();
   const { inputValue } = useInputValueContext();

    return (
        <>
            { results.length > 0 && 
                <>
                    <h2>Your results</h2>
                    <p>{ results.length } result(s)</p>
                </>
            }
            
            { results.length < 1 && inputValue.length >= 2 &&
           
                <>  
                    <h2>Your results</h2>  
                    <p>Your search returned no results, please search again</p>
                </>
            }
            <StyledUnorderedList data-testid='test-result-list' >
                {
                    results.map((result, index) => 
                        <li key={index}>{result}</li>
                    )
                }
            </StyledUnorderedList>
        </>
    );
}

export default ResultsList