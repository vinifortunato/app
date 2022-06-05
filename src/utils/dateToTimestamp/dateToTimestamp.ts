import DateToTimestampProps from './dateToTimestamp.types';

const dateToTimestamp = ({ rawDate }: DateToTimestampProps): number => {
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

export default dateToTimestamp;
