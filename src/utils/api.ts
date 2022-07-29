import axios from 'axios';
import { makeLoopQuery, makeQuery } from './helper';

export const fetchWithLooping = async (
    account: string,
    startDate: string,
    endDate: string,
    unit: string,
    skip: number,
  ) => {
  var query = makeQuery(
    account,
    startDate,
    endDate,
    unit,
    skip,
  );

  while(true) {
    try {
      const result = await axios.get(query);
      console.log(result.data);
      return result.data.total.value <= (skip + 1000) ? {
        stop: true,
        data: result.data.actions,
      } : {
        stop: false,
        total: result.data.total.value,
        data: result.data.actions,
      }
    } catch (e) {
      console.log('error log')
    }
  }
}