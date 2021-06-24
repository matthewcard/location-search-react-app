import fetchLocationData from '../fetch-data/index';

const getLocationSearchResults = async (value) => {
    return await fetchLocationData(value);
}

export default getLocationSearchResults;
