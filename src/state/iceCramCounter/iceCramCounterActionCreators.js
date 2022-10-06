import {
  DECREASE_ICE_CREAM_QTY,
  INCREASE_ICE_CREAM_QTY,
  RESET_ICE_CREAM_QTY,
  SET_ICE_CREAM_QTY,
} from './iceCramCounterActionTypes';

export const increaseIceCramQty = () => ({ type: INCREASE_ICE_CREAM_QTY });
export const decreaseIceCramQty = () => ({ type: DECREASE_ICE_CREAM_QTY });
export const setIceCramQty = (payload) => ({
  type: SET_ICE_CREAM_QTY,
  payload,
});
export const resetIceCramQty = () => ({ type: RESET_ICE_CREAM_QTY });
