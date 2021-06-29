# Location Search React App

## How to run 
 If you are running the app locally please use node 14 or above. If not please visit https://location-search-react-app.herokuapp.com/.

## React App

### Components
- This app uses a CSS-in-JS library called [Emotion js](https://emotion.sh/docs/introduction).

### Service
- This section of the application is where future business logic will be handled, filtering, sorting and enrichment if there was another source of data.

### State Management
- Making use of a combination of React Context Api and React Hooks (useContext & useState) for state management. Here is a medium post that details the pattern used
https://medium.com/simply/state-management-with-react-hooks-and-context-api-at-10-lines-of-code-baf6be8302c

### Architectural Decisions
- Arrangement of components: The decision was made to arrange the two main components on the same level and share state via the context api and react hooks. This works
and gave the opportunity to show the use of the context api pattern. Another solution would be managing and controlling the flow of state in a parent wrapper component, which will handle fetching data also. Passing results and input value to the results list component via props. Making the the search box component more pure.

## Testing
- Used [Mock Service Worker](https://mswjs.io) for mocking out calls to the api.
- `App.test.js` acts as an integration test making sure a the collection of componets do what they have been designed to do.
- `search-box.test.js` is an example of testing a component in isoloation.

## Todo 
- Fetch-data: In the react app add some form of caching where the request is made to the API
- Make the data fetching resuable, by wrapping the fetch and passing url and any headers in.
- Service: Remove genuine duplicate locations. This would require a conversation with Product Team or/and BA to find out what the best course of action is.
- UI: Add a loading spinner, the first request for data takes some time.
- UI: Let the user know is the system is down


