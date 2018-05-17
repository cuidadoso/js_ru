import {normalizedComments as defaultComments} from '../data';
import {} from "../constatns";

export default (commentState = defaultComments, action) => {
    const {type, payload} = action;
    switch (type) {
        default:
            return commentState;
    }
};
