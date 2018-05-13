import {articles as defaultArticles} from '../data';
import {DELETE_ARTICLE} from '../constatns';

export default (articleState = defaultArticles, action) => {
    const {type, payload} = action;
    switch (type) {
        case DELETE_ARTICLE:
            return articleState.filter(article => article.id !== payload.id);
    }

    return articleState;
};