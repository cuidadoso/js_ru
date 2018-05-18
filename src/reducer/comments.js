import {normalizedComments as defaultComments} from '../data';
import {} from '../constatns';
import {arrToMap} from '../helpers';

export default (commentState = arrToMap(defaultComments), action) => {
    const {type, payload} = action;
    switch (type) {
        default:
            return commentState;
    }
};
