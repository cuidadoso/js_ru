import { ADD_COMMENT, DELETE_ARTICLE, LOAD_ALL_ARTICLES } from '../constatns';
import { arrToMap } from '../helpers';

export default (articleState = {}, action) => {
  const { type, payload, randomId, response } = action;
  switch (type) {
    case DELETE_ARTICLE:
      const tempState = { ...articleState };
      delete tempState[payload.id];
      return tempState;
    case ADD_COMMENT:
      const article = articleState[payload.articleId];
      return {
        ...articleState,
        [payload.articleId]: {
          ...article,
          comments: (article.comments || []).concat(randomId)
        }
      };
    case LOAD_ALL_ARTICLES:
      return arrToMap(response);
    default:
      return articleState;
  }
};
