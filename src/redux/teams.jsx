import axios from 'axios';

// Action types
const READ = 'spaceTravel/missions/READ';

let baseURL = 'https://football-apis.herokuapp.com/api/v1/leagues'

// Action creators
export const read = (teams) => ({
  type: READ,
  payload: teams,
});

// Reducer
const teamsReducer = (state = [], action) => {
  switch (action.type) {
    case READ:
      return action.payload;
    default:
      return state;
  }
};

export const recieveLeagues = () => async () => {
  await axios.get(baseURL)
    .then((response) => {
      let leagues = response.data.leagues;
      console.log(leagues)
    });
};

export default teamsReducer;
