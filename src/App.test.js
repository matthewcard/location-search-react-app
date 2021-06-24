import React from 'react';
import { fireEvent, render, screen} from '@testing-library/react';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import App from './App';

const server = setupServer(
  rest.get("https://location-search-api.herokuapp.com/locations", (req, res, ctx) => {
    const serchTerm = req.url.searchParams.get('q');

    const mockedReturnedValues = {
      'dog': [
        'Dog Leap',
        'Dogmersfield House'
      ],
     'dogm': [
      'Dogmersfield House'
      ]
    }

    return res(
      ctx.json(
        mockedReturnedValues[serchTerm] || []
       )
      )
   })
);

test('returns 2 results based on the search term', async () => {
  server.listen();
  render(<App />);
  
  const input = screen.getByRole('search-box');

  await fireEvent.change(input, { target: { value: 'dog' } });
  await screen.findByText('Dog Leap');
  await screen.getByText('2 result(s)');

  server.close();
});

test('returns 1 result based on the search term', async () => {
  server.listen();
  render(<App />);
  
  const input = screen.getByRole('search-box');

  await fireEvent.change(input, { target: { value: 'dogm' } });
  await screen.findByText('Dogmersfield House');
  await screen.getByText('1 result(s)');  

  server.close();
});

test('returns no results based on the search term', async () => {
  server.listen();
  render(<App />);
  
  const input = screen.getByRole('search-box');

  await fireEvent.change(input, { target: { value: 'no results' } });
  await screen.findByText('Your search returned no results, please search again');  

  server.close();
});
