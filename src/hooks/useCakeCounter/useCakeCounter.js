import { useSelector } from 'react-redux';
import {
  decreaseCakeQty,
  increaseCakeQty,
  resetCakeQty,
  setCakeQty,
} from '../../state/cakeCounter/cakeCounterActionCreators';
import { useAction } from '../useAction/useAction';

export const useCakeCounter = () => {
  const cake = useSelector((state) => state.cake);

  const actions = useAction({
    increase: increaseCakeQty,
    decrease: decreaseCakeQty,
    set: setCakeQty,
    reset: resetCakeQty,
  });

  return {count: cake, ...actions };
};
