import { combineReducers } from "redux"

import users from '../modules/user'
import notifications from '../modules/notification'
import profile from '../modules/profile'
import reservations from '../modules/reservation'
import news from '../modules/news'

export default combineReducers({
  users,
  notifications,
  profile,
  reservations,
  news
});

