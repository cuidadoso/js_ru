import { normalizedComments as defaultComments } from '../data';
import {} from '../constatns';
import { arrToMap } from '../helpers';
import { ADD_COMMENT } from '../constatns';

export default (commentState = arrToMap(defaultComments), action) => {
  const { type, payload, randomId } = action;
  switch (type) {
    case ADD_COMMENT:
      return {
        ...commentState,
        [randomId]: { ...payload.comment, id: randomId }
      };
    default:
      return commentState;
  }
};
