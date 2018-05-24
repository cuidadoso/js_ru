import { Map, Record, OrderedMap } from 'immutable';

import { arrToMap } from '../helpers';
import {
  ADD_COMMENT,
  LOAD_ARTICLE_COMMENTS,
  LOAD_COMMENTS_FOR_PAGE,
  START,
  SUCCESS
} from '../constatns';

const CommentRecord = Record({
  id: null,
  text: null,
  user: null
});

const ReducerState = new Record({
  entities: new OrderedMap({}),
  pagination: new Map({}),
  total: null
});

const defaultSate = new ReducerState();

export default (commentState = defaultSate, action) => {
  const { type, payload, randomId, response } = action;
  switch (type) {
    case LOAD_ARTICLE_COMMENTS + SUCCESS:
      return commentState.update('entities', (entities) =>
        entities.merge(arrToMap(response, CommentRecord))
      );
    case LOAD_COMMENTS_FOR_PAGE + START:
      return commentState.setIn(['pagination', payload.page, 'loading'], true);
    case LOAD_COMMENTS_FOR_PAGE + SUCCESS:
      return commentState
        .set('total', response.total)
        .mergeIn(['entities'], arrToMap(response.records, CommentRecord))
        .setIn(
          ['pagination', payload.page, 'ids'],
          response.records.map((comment) => comment.id)
        )
        .setIn(['pagination', payload.page, 'loading'], false);
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
