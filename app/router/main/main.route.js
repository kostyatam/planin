'use strict';

import React, {Component} from 'react';
import {Month, Navigator, Task} from 'components';
import {connect} from 'react-redux';
import {ms} from 'utils';

function select (state, props) {
    const {tasks} = state;
    const {params} = props;
    const {month, year} = ms.parseDate(params.date || Date.now());

    return {
        day: {date: ms.getTime(year, month, 5), tasks: []},
        weeks: ms.getMonthCalendar(tasks, month, year)
            .map(task => (task.date !== ms.getTime(year, month, 5) ? task : Object.assign({}, task, {selected: true}))),
        navigator: {
            back: ms._monthNumber[month - 1 > 0 ? month - 1 : 12 + (month - 1)],
            forward: ms._monthNumber[month + 1 < 12 ? month + 1 : (month + 1) - 12],
            title: `${ms._monthNumber[month]}'${year}`
        }
    }
}

const Main = ({navigator, weeks, day}) => (
    <div>
        <Tasks day={day}></Tasks>
        <Navigator {...navigator}></Navigator>
        <Month weeks={weeks}></Month>
    </div>
);


export default connect(select)(Main);
