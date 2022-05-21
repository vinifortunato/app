import { TypedUseSelectorHook, useSelector } from 'react-redux';
import { AppState } from '../../store/store.types';

const useAppSelector: TypedUseSelectorHook<AppState> = useSelector;

export default useAppSelector;
