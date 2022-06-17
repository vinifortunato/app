import * as Types from './splitName.types';

const splitName = ({ fullName = 'Full Name Example' }: Types.SplitNameProps): Types.SplittedName => {
  const parts = fullName.split(' ');

  return {
    first: parts[0],
    last:  parts[parts.length - 1],
    parts: parts
  };
};

export default splitName;
