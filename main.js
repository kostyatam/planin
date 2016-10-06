'use strict';
import React from 'react';
import ReactDOM from 'react-dom';

import {Header, Calendar, CreateTask} from 'components';

import {data as calendarData} from 'components/calendar/calendar.data.js';

class UiKit extends React.Component {
    constructor (props) {
        super(props);

        this.state = {
            taskOpen: false
        };
        this.onTaskChange = this.onTaskChange.bind(this);
    }
    onTaskChange (value) {
        this.setState({taskOpen: !!value})
    }

    render() {
        let {taskOpen} = this.state;
        return (
            <div>
                <Header/>
                <Calendar days={calendarData.days} currentDay={calendarData.currentDay}/>
                <CreateTask isOpen={taskOpen} onChange={this.onTaskChange}/>
            </div>
        )
    }
}
ReactDOM.render(<UiKit/>, document.getElementById('ui-kit'));