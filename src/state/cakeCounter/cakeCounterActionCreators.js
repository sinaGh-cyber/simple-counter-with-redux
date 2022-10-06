import {
  DECREASE_CAKE_QTY,
  INCREASE_CAKE_QTY,
  RESET_CAKE_QTY,
  SET_CAKE_QTY,
} from './cakeCounterActionTypes';

export const increaseCakeQty = () => ({ type: INCREASE_CAKE_QTY });
export const decreaseCakeQty = () => ({ type: DECREASE_CAKE_QTY });
export const setCakeQty = (payload) => ({ type: SET_CAKE_QTY, payload });
export const resetCakeQty = () => ({ type: RESET_CAKE_QTY });
