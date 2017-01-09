'use strict';

import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducers from 'reducers';
import Router from './router';

let checkTasks = store => next => action => {
    next(action);
    let isSorted = store.getState().tasks.tasks.every((t, i, a)=>{if (!i) return true;return a[i].assignDate >= a[i-1].assignDate});
    console.log(
        'TASKS IS',
         isSorted ?
            'SORTED' :
            'NOT SORTED',
        action,
        store.getState().tasks.tasks.map(task => new Date(task.assignDate))
    );
}

let store = createStore(reducers, applyMiddleware(thunk, checkTasks));

render(
    <Provider store={store}>
        <Router></Router>
    </Provider>,
    document.getElementById('app')
)

