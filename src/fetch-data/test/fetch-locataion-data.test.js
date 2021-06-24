import { rest } from 'msw'; 
import { setupServer } from 'msw/node';
import fetchLocationData from '../index';

const server = setupServer(
  rest.get("https://location-search-api.herokuapp.com/locations", async (req, res, ctx) => {
    const serchTerm = req.url.searchParams.get('q');

    if (serchTerm){
      return res(
        ctx.json(
          [
            'Dog Leap',
            'Dogmersfield House'
         ]
        )
       )
    } else {
      return res(ctx.status(500))
    }
     
   })
);

test('when there is a valid search term response is returned', async () => {
  server.listen( );
  const res = await fetchLocationData('dog');

  await expect(res).toEqual(["Dog Leap", "Dogmersfield House"]);
  server.close();
});

test('when there is no search term an empty array is retunred', async () => {
  server.listen();
  const res = await fetchLocationData('');

  await expect(res).toEqual([]);
  server.close();
});



