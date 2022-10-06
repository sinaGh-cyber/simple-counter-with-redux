import { useSelector } from 'react-redux';
import {
  decreaseIceCramQty,
  increaseIceCramQty,
  resetIceCramQty,
  setIceCramQty,
} from '../../state/iceCramCounter/iceCramCounterActionCreators';
import { useAction } from '../useAction/useAction';

export const useIceCramCounter = () => {
  const iceCram = useSelector((state) => state.iceCram);

  const actions = useAction({
    increase: increaseIceCramQty,
    decrease: decreaseIceCramQty,
    set: setIceCramQty,
    reset: resetIceCramQty,
  });

  return { count: iceCram, ...actions };
};
