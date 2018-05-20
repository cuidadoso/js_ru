import {
  SET_SELECTION,
  SET_RANGE,
  RESET_DATE_RANGE,
  RESET_FILTERS,
  DELETE_ARTICLE
} from '../constatns';

const defaultFilters = {
  selection: [],
  dateRange: {
    from: null,
    to: null
  }
};

export default (filters = defaultFilters, action) => {
  const { type, payload } = action;
  switch (type) {
    case SET_SELECTION:
      return {
        ...filters,
        selection: payload.selection
      };
    case SET_RANGE:
      return {
        ...filters,
        dateRange: payload.dateRange
      };
    case RESET_DATE_RANGE:
      return {
        ...filters,
        dateRange: {
          from: null,
          to: null
        }
      };
    case RESET_FILTERS:
      return defaultFilters;
    case DELETE_ARTICLE:
      return {
        ...filters,
        selection: filters.selection.filter((id) => id !== payload.id)
      };
    default:
      return filters;
  }
};
