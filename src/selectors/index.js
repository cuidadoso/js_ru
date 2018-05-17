import {createSelector} from 'reselect';

const articlesGetter = state => state.articles;
const filtersGetter = state => state.filters;

export const filtrateArticlesSelector = createSelector(
    articlesGetter,
    filtersGetter,
    (articles, filters) => {
        const {selection, dateRange: {from, to}} = filters;
        return articles.filter(article => {
            const published = Date.parse(article.date);
            return (!selection.length || selection.includes(article.id)) &&
                (!from || !to || (published > from && published < to));
        });
    }
);
