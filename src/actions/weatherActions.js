import { GET_WEATHER } from './types';
import axios from 'axios';

export const getWeather = () => async dispatch => {
  const res = await axios.get('https://fishingbooker.com/test/data.json');
  dispatch({
    type: GET_WEATHER,
    payload: res.data
  });
};
