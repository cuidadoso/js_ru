import { Record, OrderedMap } from 'immutable';

import {
  ADD_COMMENT,
  DELETE_ARTICLE,
  LOAD_ALL_ARTICLES,
  START,
  SUCCESS
} from '../constatns';
import { arrToMap } from '../helpers';

const ArticleModel = Record({
  text: undefined,
  title: '',
  id: undefined,
  comments: []
});

const ReducerState = new Record({
  loading: false,
  loaded: false,
  entities: new OrderedMap({})
});

const defaultSate = new ReducerState();

export default (articleState = defaultSate, action) => {
  const { type, payload, randomId, response } = action;
  switch (type) {
    case DELETE_ARTICLE:
      return articleState.deleteIn(['entities', payload.id]);
    case ADD_COMMENT:
      return articleState.updateIn(
        ['entities', payload.articleId, 'comments'],
        (comments) => comments.concat(randomId)
      );
    case LOAD_ALL_ARTICLES + START:
      return articleState.set('loading', true).set('loaded', false);
    case LOAD_ALL_ARTICLES + SUCCESS:
      return articleState
        .set('entities', arrToMap(response, ArticleModel))
        .set('loading', false)
        .set('loaded', true);
    default:
      return articleState;
  }
};
