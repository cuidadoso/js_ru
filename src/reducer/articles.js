import {normalizedArticles as defaultArticles} from '../data';
import {DELETE_ARTICLE} from '../constatns';
import {arrToMap} from '../helpers';

export default (articleState = arrToMap(defaultArticles), action) => {
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
