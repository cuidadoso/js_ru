import {normalizedComments as defaultComments} from '../data';
import {} from '../constatns';
import {arrToMap} from '../helpers';


const commentsMap = arrToMap(defaultComments);

export default (commentState = commentsMap, action) => {
    const {type, payload} = action;
    switch (type) {
        default:
            return commentState;
    }
};
