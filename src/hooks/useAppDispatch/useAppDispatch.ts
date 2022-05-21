import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../store/store.types';

const useAppDispatch = () => {
  return useDispatch<AppDispatch>();
};

export default useAppDispatch;
