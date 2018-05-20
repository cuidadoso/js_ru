import { Map, Record } from 'immutable';

import { ADD_COMMENT, DELETE_ARTICLE, LOAD_ALL_ARTICLES } from '../constatns';
import { arrToMap } from '../helpers';

const ArticleModel = Record({
  text: undefined,
  title: '',
  id: undefined,
  comments: []
});

const defaultSate = new Map({});

export default (articleState = defaultSate, action) => {
  const { type, payload, randomId, response } = action;
  switch (type) {
    case DELETE_ARTICLE:
      return articleState.delete(payload.id);
    case ADD_COMMENT:
      return articleState.updateIn(
        [payload.articleId, 'comments'],
        (comments) => comments.concat(randomId)
      );
    case LOAD_ALL_ARTICLES:
      return arrToMap(response, ArticleModel);
    default:
      return articleState;
  }
};
