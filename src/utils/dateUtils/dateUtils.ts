import { AppDate } from '@src/types/common.types';

const appDateToString = (appDate: AppDate): string => {
  const day = appDate.day.toString();
  const month = appDate.month.toString();
  const year = appDate.year.toString();
  return day.padStart(2, '0') + '/' + month.padStart(2, '0') + '/' + year;
};

const dateToTimestamp = (rawDate: string): number => {
  const parsed = rawDate.split('/');

  const day = Number(parsed[0]);
  const month = Number(parsed[1]);
  const year = Number(parsed[2]);
  const hours = 0;
  const minutes = 0;
  const seconds = 0;
  const ms = 0;

  const date = new Date(year, month - 1, day, hours, minutes, seconds, ms);
  const timestamp = date.getTime();
  return timestamp;
};

const greet = () => {
  const today = new Date();
  const hours = today.getUTCHours();

  if (hours < 12) {
    return 'Bom dia';
  } else if (hours < 18) {
    return 'Boa tarde';
  } else {
    return 'Boa noite';
  }
};

const timestampToAppDate = (timestamp: string): AppDate => {
  const parsedDate = Number(timestamp);
  const date: Date = new Date(parsedDate);

  return {
    day: date.getUTCDate(),
    month: date.getUTCMonth() + 1,
    year: date.getUTCFullYear()
  };
};

const today = (): AppDate => {
  const today = new Date();
  return {
    day: today.getUTCDate(),
    month: today.getUTCMonth() + 1,
    year: today.getUTCFullYear()
  };
};

const dateUtils = {
  appDateToString,
  dateToTimestamp,
  greet,
  timestampToAppDate,
  today
};

export default dateUtils;
