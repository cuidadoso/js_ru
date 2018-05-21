import { Record, OrderedMap } from 'immutable';

import { arrToMap } from '../helpers';
import { ADD_COMMENT, LOAD_ALL_COMMENTS, START, SUCCESS } from '../constatns';

const CommentRecord = Record({
  text: undefined,
  user: undefined,
  id: undefined,
  loading: false
});

const ReducerState = new Record({
  loading: false,
  loaded: false,
  error: undefined,
  entities: new OrderedMap({})
});

const defaultSate = new ReducerState();

export default (commentState = defaultSate, action) => {
  const { type, payload, randomId, response } = action;
  switch (type) {
    case LOAD_ALL_COMMENTS + START:
      return commentState.set('loading', true).set('loaded', false);
    case LOAD_ALL_COMMENTS + SUCCESS:
      return commentState
        .set('entities', arrToMap(response.records, CommentRecord))
        .set('loading', false)
        .set('loaded', true);
    case ADD_COMMENT:
      return commentState.setIn(['entities', randomId], {
        ...payload.comment,
        id: randomId
      });
    default:
      return commentState;
  }
};
