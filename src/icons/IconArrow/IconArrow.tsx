import Entypo from '@expo/vector-icons/Entypo';
import { IconArrowProps } from './IconArrow.types';

// https://icons.expo.fyi/

const IconArrow = ({ size = 32 }: IconArrowProps) => {
  return <Entypo name="arrow-with-circle-right" size={size} color="black" />;
};

export default IconArrow;
