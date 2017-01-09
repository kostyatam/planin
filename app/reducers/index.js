'use strict';
import { combineReducers } from 'redux';

import calendar from './calendar';
import sidebar from './sidebar';
import tasks from './tasks';

export default combineReducers({
    tasks,
    sidebar,
    calendar
});
