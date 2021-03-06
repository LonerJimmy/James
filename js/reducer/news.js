/**
 * Created by panda on 16/8/30.
 */
'use strict';
import * as types from '../constants/actionTypes';

const initState = {
    loading: false,
    lastId: {},
    news: {},
    headNews: {},
};

export default function news(state = initState, action) {
    switch (action.type) {
        case types.RECEIVE_NEWS_LIST:
            return Object.assign({}, state, {
                loading: false,
                lastId: setLastId(state, action),
                news: addNews(state, action),
                headNews: addHeadNews(state, action),
            });
        case types.FETCH_NEWS_LIST:
            return Object.assign({}, state, {
                loading: true,
            });
        default:
            return state;
    }

    function addNews(state, action) {
        if (state.news[action.themeId]) {
            state.news[action.themeId] = state.news[action.themeId].concat(action.news);
        } else {
            state.news[action.themeId] = action.news;
        }
        return state.news;
    }

    function addHeadNews(state, action) {
        if (action.headNews) {
            state.headNews[action.themeId] = action.headNews;
        }
        return state.headNews;
    }

    function setLastId(state, action) {
        state.lastId[action.themeId] = action.lastId;
        return state.lastId;
    }
}