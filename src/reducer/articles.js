import {normalizedArticles as defaultArticles} from '../data';
import {ADD_COMMENT, DELETE_ARTICLE} from '../constatns';
import {arrToMap} from '../helpers';

export default (articleState = arrToMap(defaultArticles), action) => {
    const {type, payload, randomId} = action;
    switch (type) {
        case DELETE_ARTICLE:
            const tempState = {...articleState};
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
        default:
            return articleState;
    }
};
