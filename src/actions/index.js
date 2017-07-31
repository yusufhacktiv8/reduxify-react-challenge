import axios from 'axios';

const SWAPI_URL = 'https://swapi.co/api/people';

export const loadPeople = (people) => {
  return {
    type: 'LOAD_PEOPLE',
    people,
  };
};

export const getPeople = () => {
  return (dispatch) => {
    axios.get(SWAPI_URL)
    .then((response) => {
      dispatch(loadPeople(response.data.results));
    });
  };
};

