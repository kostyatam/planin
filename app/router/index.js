'use strict';

import React from 'react';
import {render} from 'react-dom';
import {Router, Route, Link, browserHistory} from 'react-router';
import Main from './main/main.route.js';

export default () => (
    <Router history={browserHistory}>
        <Route path='/' component={Main}></Route>
    </Router>
)
