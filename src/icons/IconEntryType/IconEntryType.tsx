import { IconEntryTypeProps } from './IconEntryType.types';
import Svg, { Path } from 'react-native-svg';

const IconEntryType = ({ fill = 'black' }: IconEntryTypeProps) => {
  return (
    <Svg
      fill={fill}
      height="100%"
      viewBox="0 0 24 24"
      width="100%"
    >
      <Path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2z" />
    </Svg>
  );
};

export default IconEntryType;
