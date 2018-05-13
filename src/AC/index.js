import {DELETE_ARTICLE, INCREMENT, SET_SELECTION, SET_RANGE, RESET_DATE_RANGE, RESET_FILTERS} from '../constatns';

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
    }
}

export function setRange(dateRange) {
    return {
        type: SET_RANGE,
        payload: {
            dateRange
        }
    }
}

export function resetDateRange() {
    return {
        type: RESET_DATE_RANGE
    }
}

export function resetFilters() {
    return {
        type: RESET_FILTERS
    }
}
