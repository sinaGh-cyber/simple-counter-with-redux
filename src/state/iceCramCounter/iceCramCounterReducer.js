import { DECREASE_ICE_CREAM_QTY, INCREASE_ICE_CREAM_QTY, RESET_ICE_CREAM_QTY, SET_ICE_CREAM_QTY } from "./iceCramCounterActionTypes";


export const initIceCramCountStat = { qty: 0 };
export const iceCramCounterReducer = (
  iceCram = initIceCramCountStat,
  { type, payload }
) => {
  switch (type) {
    case INCREASE_ICE_CREAM_QTY:
      return { ...iceCram, qty: +iceCram.qty + 1 };

    case DECREASE_ICE_CREAM_QTY:
      return { ...iceCram, qty: +iceCram.qty - 1 };

    case SET_ICE_CREAM_QTY:
      return { ...iceCram, qty: +payload };

    case RESET_ICE_CREAM_QTY:
      return initIceCramCountStat;

    default:
      return iceCram;
  }
};
