import React from 'react'

import * as userModule from '../modules/user'
import * as notificationModule from '../modules/notification'
import * as profileModule from '../modules/profile'
import * as advertsModule from '../modules/adverts'
import * as reservationModule from '../modules/reservation'
import * as messagesModule from '../modules/messages'
import * as newsModule from '../modules/news'
import * as groupModule from '../modules/group'

export function launchInitialActions(store, actionTypes) {
    for (var key in actionTypes) {
        launchInitialAction(store, actionTypes[key], 1);
    }
}

export default function launchInitialAction(store, actionType, x) {
    switch (actionType) {
        case reservationModule.types.RESERVATION_LIST_REQUESTED:
            getReservations(store);
            break;
        case userModule.types.USER_LIST_REQUESTED:
            getUsers(store);
            break;
        case userModule.types.USER_ME_REQUESTED:        
            getUser(store);
            break;            
        case newsModule.types.NEWS_LIST_REQUESTED:
            getNews(store);
            break;
        case advertsModule.types.ADVERTS_LIST_REQUESTED:
            getAdverts(store);
            break;
        case profileModule.types.PAYMENT_ITEM_REQUESTED:
            getProfileItems(store);
            break;
    }
}

function getUser(store) {
    if (store.getState().users.user.length == 0) {
        store.dispatch(userModule.getUser());
    }    
}

function getUsers(store) {
    if (store.getState().users.list.length == 0) {
        store.dispatch(userModule.getUsers());
    }
}

function getReservations(store) {
    if (store.getState().reservations.list.length == 0) {
        store.dispatch(reservationModule.getReservations());
    }
}

function getNews(store) {
    if (store.getState().news.list.length == 0) {
        store.dispatch(newsModule.getNews());
    }
}

function getAdverts(store) {
    if (store.getState().adverts.list.length == 0) {
        store.dispatch(advertsModule.getAdverts());
    }
}
function getProfileItems(store) {
    if (store.getState().history_items.list.length == 0) {
        store.dispatch(profileModule.getPaymentItems());
    }
}