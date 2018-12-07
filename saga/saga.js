/* global fetch */

import { all, takeLatest } from 'redux-saga/effects'

import api from '../services/api'
import * as userModule from '../modules/user'
import * as notificationModule from '../modules/notification'
import * as profileModule from '../modules/profile'
import * as reservationModule from '../modules/reservation'
import * as newsModule from '../modules/news'

function* rootSaga() {
    yield all([
        takeLatest(userModule.types.USER_LIST_REQUESTED, userModule.loadUsers),
        takeLatest(userModule.types.USER_ME_REQUESTED, userModule.loadUser),   
        takeLatest(notificationModule.types.NOTIFICATION_LIST_REQUESTED, notificationModule.loadNotifications),                
        takeLatest(profileModule.types.PAYMENT_ITEM_REQUESTED, profileModule.loadPaymentItems),        
        takeLatest(reservationModule.types.RESERVATION_LIST_REQUESTED, reservationModule.loadReservations),
        takeLatest(reservationModule.types.RESERVATION_CATEGORY_REQUESTED, reservationModule.loadReservationCategory),
        takeLatest(reservationModule.types.RESERVATION_ITEMS_IN_CATEGORY_REQUESTED, reservationModule.loadItemsInCategory),
        takeLatest(newsModule.types.NEWS_LIST_REQUESTED, newsModule.loadNews),
    ])
}

export default rootSaga
