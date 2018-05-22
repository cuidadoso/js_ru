import {
  DELETE_ARTICLE,
  INCREMENT,
  SET_SELECTION,
  SET_RANGE,
  RESET_DATE_RANGE,
  RESET_FILTERS,
  ADD_COMMENT,
  LOAD_ALL_ARTICLES,
  LOAD_ARTICLE,
  START,
  SUCCESS,
  FAIL,
  LOAD_ARTICLE_COMMENTS
} from '../constatns';

export function increment() {
  return {
    type: INCREMENT
  };
}

export function deleteArticle(id) {
  return {
    type: DELETE_ARTICLE,
    payload: {
      id
    }
  };
}

export function setSelection(selection) {
  return {
    type: SET_SELECTION,
    payload: {
      selection
    }
  };
}

export function setRange(dateRange) {
  return {
    type: SET_RANGE,
    payload: {
      dateRange
    }
  };
}

export function resetDateRange() {
  return {
    type: RESET_DATE_RANGE
  };
}

export function resetFilters() {
  return {
    type: RESET_FILTERS
  };
}

export function addComment(comment, articleId) {
  return {
    type: ADD_COMMENT,
    payload: {
      comment,
      articleId
    },
    generateId: true
  };
}

export function loadAllArticles() {
  return {
    type: LOAD_ALL_ARTICLES,
    callApi: '/api/article'
  };
}

export function loadArticle(id) {
  return (dispatch) => {
    dispatch({
      type: LOAD_ARTICLE + START,
      payload: { id }
    });

    setTimeout(() => {
      fetch(`/api/article/${id}`)
        .then((res) => res.json())
        .then((response) =>
          dispatch({
            type: LOAD_ARTICLE + SUCCESS,
            payload: { id, response }
          })
        )
        .catch((error) =>
          dispatch({
            type: LOAD_ARTICLE + FAIL,
            payload: { id, error }
          })
        );
    }, 1000);
  };
}

/*
export function loadArticle(id) {
  return {
    type: LOAD_ARTICLE,
    callApi: `/api/article/${id}`
  }
}
*/

export function loadArticleComments(articleId) {
  return {
    type: LOAD_ARTICLE_COMMENTS,
    callApi: `/api/comment?article=${articleId}`,
    payload: { articleId }
  };
}
