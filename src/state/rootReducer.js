import { combineReducers } from 'redux';
import {
  cakeCounterReducer,
} from './cakeCounter/cakeCounterReducer';
import { iceCramCounterReducer } from './iceCramCounter/iceCramCounterReducer';

export const rootReducer = combineReducers({
  cake: cakeCounterReducer,
  iceCram: iceCramCounterReducer,
});
