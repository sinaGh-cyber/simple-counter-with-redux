import {
  DECREASE_CAKE_QTY,
  INCREASE_CAKE_QTY,
  RESET_CAKE_QTY,
  SET_CAKE_QTY,
} from './cakeCounterActionTypes';

export const initCakeCountStat = { qty: 0 };
export const cakeCounterReducer = (
  cake = initCakeCountStat,
  { type, payload }
) => {
  switch (type) {
    case INCREASE_CAKE_QTY:
      return { ...cake, qty: +cake.qty + 1 };

    case DECREASE_CAKE_QTY:
      return { ...cake, qty: +cake.qty - 1 };

    case SET_CAKE_QTY:
      return { ...cake, qty: +payload };

    case RESET_CAKE_QTY:
      return initCakeCountStat;

    default:
      return cake;
  }
};
