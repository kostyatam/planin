'use strict';

import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import todo from './reducers.js';
import Router from './router';

let store = createStore(todo);

render(
    <Provider store={store}>
        <Router></Router>
    </Provider>,
    document.getElementById('app')
)

