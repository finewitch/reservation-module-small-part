import { all, call, put, take, takeLatest } from 'redux-saga/effects'
import AuthService from '../services/auth'
import {apiUrl, apiReactUrl} from '../config'

export const types = {
    RESERVATION_LOAD: 'RESERVATION_LOAD',
    RESERVATION_LIST_REQUESTED: 'RESERVATION_LIST_REQUESTED',
    RESERVATION_CATEGORY_REQUESTED: 'RESERVATION_CATEGORY_REQUESTED',
    RESERVATION_CATEGORY_LOAD: 'RESERVATION_CATEGORY_LOAD',
    RESERVATION_ITEMS_IN_CATEGORY_REQUESTED: 'RESERVATION_ITEMS_IN_CATEGORY_REQUESTED',
    RESERVATION_ITEMS_IN_CATEGORY_LOAD: 'RESERVATION_ITEMS_IN_CATEGORY_LOAD',
    RESERVATION_ITEM_DELETE: 'RESERVATION_ITEM_DELETE'
}

export const initialState = {
    loaded: false,
    list: [],
    categories: [],
    items_in_categories: []
}

const auth = new AuthService()

// Reducer
export default function reducer(state = initialState, action) {
    switch (action.type) {
        case types.RESERVATION_ITEM_DELETE:
            return {
                ...state,
                list: action.data
            }
        case types.RESERVATION_LOAD:
            return {
                ...state,
                loaded: action.data.status,
                list: action.data.data.reservations
            }
        case types.RESERVATION_CATEGORY_LOAD:

            return {
                ...state,
                categories: {
                    ...state.categories,
                    [action.category]: action.data
                }
            }

        case types.RESERVATION_ITEMS_IN_CATEGORY_LOAD:

            return {
                ...state,
                items_in_categories: {
                    ...state.items_in_categories,
                    [action.id]: action.data
                }
            }

        default:
            return state
    }
}

// Action creators
export function removeItemFromList(data) {
    return { type: types.RESERVATION_ITEM_DELETE, data }
}
export function getReservationsSuccess(data) {
    return { type: types.RESERVATION_LOAD, data }
}

export function getReservations() {
    return { type: types.RESERVATION_LIST_REQUESTED }
}

export function getReservationCategory(id, category) {
    return { type: types.RESERVATION_CATEGORY_REQUESTED, id, category }
}

export function getReservationCategorySuccess(data, category) {
    return { type: types.RESERVATION_CATEGORY_LOAD, data, category }
}

export function getItemsInCategory(id) {
    return { type: types.RESERVATION_ITEMS_IN_CATEGORY_REQUESTED, id}
}

export function getItemsInCategorySuccess(data,id) {
    return { type: types.RESERVATION_ITEMS_IN_CATEGORY_LOAD, data, id }
}

// Saga
export function* loadReservations() {
    try {

        var token = auth.getToken();    
        if(!token) return;        

        const res = yield fetch(apiUrl + '/reservation/me', {
            method: 'POST',
            body: JSON.stringify({'token':token}), 
        });

        const data = yield res.json();
        yield put(getReservationsSuccess(data))
    }
    catch (err) {
        console.log('error with news!' + err);
    }
}

export function* loadReservationCategory(param) {
    var id = param.id;
    if(param.id === 3){

        try {
            const res = yield fetch('/static/api/reservation_desk.json')
            const data = yield res.json();
            yield put(getReservationCategorySuccess(data, param.category))
        }
        catch (err) {
            console.log('error with news!' + err);
        }

    }else{

        try {
            const res = yield fetch(apiReactUrl + '/reservation/list/' + id)
            const data = yield res.json();
            yield put(getReservationCategorySuccess(data, param.category))
        }
        catch (err) {
            console.log('error with news!' + err);
        }

    }
}

export function* loadItemsInCategory(param) {
    var id = param.id;
    if(id === 'FAKE_1' || id === 'FAKE_2'){
        try {
            const res = yield fetch('/static/api/3.json');
            const data = yield res.json();
            yield put(getItemsInCategorySuccess(data, id))
        } catch (err) {
            console.log('error with news!' + err);
        }        
    } else {
        try {
            const res = yield fetch(apiReactUrl + '/reservation/facility/' + id + '/2018-05-15');
            const data = yield res.json();
            yield put(getItemsInCategorySuccess(data, id))
        } catch (err) {
            console.log('error with news!' + err);
        }
    }
}