import { all, call, put, take, takeLatest } from 'redux-saga/effects'
import AuthService from '../services/auth'
import {apiUrl, apiReactUrl} from '../config'

export const types = {
    NEWS_LIST_LOADED: 'NEWS_LIST_LOADED',
    NEWS_LIST_REQUESTED: 'NEWS_LIST_REQUESTED'    
}

export const initialState = {
    loaded: false,
    list: []
}

const auth = new AuthService()

// Reducer
export default function reducer(state = initialState, action) {  

    switch (action.type) {
        case types.NEWS_LIST_LOADED:
        return {
            ...state,
            loaded: action.data.status ? true : false,
            list: action.data.data.news
        }

        default:
            return state
    }
}

// Action creators
export function newsLoaded(data) {
    return { type: types.NEWS_LIST_LOADED, data }
}

export function getNews() {
    return { type: types.NEWS_LIST_REQUESTED }
}
   
// Saga
export function* loadNews() {
    try {
        const res = yield fetch(apiUrl + '/news')
        const data = yield res.json();
        yield put(newsLoaded(data))
    }
    catch (err) {
        console.log('error with news!' + err);
    }
}