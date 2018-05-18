import {normalizedArticles as defaultArticles} from '../data';
import {DELETE_ARTICLE} from '../constatns';

const articlesMap = defaultArticles.reduce((acc, article) => {
    acc[article.id] = article;
    return acc;
}, {});

export default (articleState = articlesMap, action) => {
    const {type, payload} = action;
    switch (type) {
        case DELETE_ARTICLE:
            const tempState = {...articleState};
            delete tempState[payload.id];
            return tempState;
        default:
            return articleState;
    }
};
