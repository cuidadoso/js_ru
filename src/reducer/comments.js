import { Record, OrderedMap } from 'immutable';

import { arrToMap } from '../helpers';
import { ADD_COMMENT, LOAD_ARTICLE_COMMENTS, SUCCESS } from '../constatns';

const CommentRecord = Record({
  text: undefined,
  user: undefined,
  id: undefined
});

const ReducerState = new Record({
  entities: new OrderedMap({})
});

const defaultSate = new ReducerState();

export default (commentState = defaultSate, action) => {
  const { type, payload, randomId, response } = action;
  switch (type) {
    case LOAD_ARTICLE_COMMENTS + SUCCESS:
      return commentState.update('entities', (entities) =>
        entities.merge(arrToMap(response, CommentRecord))
      );
    case ADD_COMMENT:
      return commentState.setIn(
        ['entities', randomId],
        new CommentRecord({
          ...payload.comment,
          id: randomId
        })
      );
    default:
      return commentState;
  }
};
