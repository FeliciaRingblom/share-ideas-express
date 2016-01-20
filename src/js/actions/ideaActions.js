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
  },
  createIdea( idea ) {
    dispatch({
      actionType: ActionTypes.ADD_IDEA, idea
    });
  },
  updateIdea( idea ) {
    dispatch({
      actionType: ActionTypes.UPDATE_IDEA, idea
    });
  }
};
