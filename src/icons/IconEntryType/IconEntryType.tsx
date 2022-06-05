import { IconEntryTypeProps } from './IconEntryType.types';

const IconEntryType = ({ fill = 'black' }: IconEntryTypeProps) => {
  return (
    <svg
      fill={fill}
      height="100%"
      viewBox="0 0 24 24"
      width="100%"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2z" />
    </svg>
  );
};

export default IconEntryType;
