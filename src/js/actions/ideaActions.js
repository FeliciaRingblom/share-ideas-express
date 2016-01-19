import ActionTypes from '../constants/actionTypes';
import { dispatch } from '../dispatcher';

export default {
  increasePoints( idea ) {
    dispatch({
      actionType: ActionTypes.LIKE_IDEA, idea
    });
  },
  decreasePoints( idea ) {
    dispatch({
      actionType: ActionTypes.DISLIKE_IDEA, idea
    });
  }
};
