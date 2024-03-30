import { forEach, map } from 'lodash';
import { formateDate } from '@/utils/formateDate';

export const formateDatesInData = (data: any[]) => {
  const formattedData = map(data, (obj) => {
    const formattedObj: any = {};
    forEach(obj, (value, key) => {
      if (key.match(/date/i)) {
        formattedObj[key] = formateDate(value);
      } else {
        formattedObj[key] = value;
      }
    });
    return formattedObj;
  });

  return formattedData;
};
