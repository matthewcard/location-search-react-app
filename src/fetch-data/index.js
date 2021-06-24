const fetchLocationData = async (searchTerm) => {

try {
  if(searchTerm) {
    const res = (await fetch(`https://location-search-api.herokuapp.com/locations?q=${searchTerm}`)).json();
    return await res;
  }

  throw new Error();
  } catch (e) {
    console.log(`There was a problem`);
    return([]);
  }
};

export default fetchLocationData;