import {DELETE_ARTICLE, INCREMENT} from '../constatns';

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
