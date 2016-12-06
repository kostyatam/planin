'use strict';

import React, {Component} from 'react';
import {Month, Navigator, Task} from 'components';
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux';
import {ms, classNames} from 'utils';
import * as actions from '../../actions.js';
import styles from './main.route.css';

function select(state, props) {
    const {tasks, active, day} = state;
    const {params} = props;
    const {month, year} = ms.parseDate(params.date || Date.now());
    const weeks = ms.getWeeks(ms.getMonthCalendar(tasks, month, year, active));

    return {
        day,
        weeks,
        navigator: {
            back: ms._monthNumber[month - 1 > 0 ? month - 1 : 12 + (month - 1)],
            forward: ms._monthNumber[month + 1 < 12 ? month + 1 : (month + 1) - 12],
            title: `${ms._monthNumber[month]}'${year}`
        }
    }
}

function dispatch(dispatch) {
    return {
        actions: bindActionCreators(actions, dispatch)
    }
}

class Main extends Component {
    constructor (props) {
        super(props);
        this.state = {
            newTask: {
                title: '',
                text: ''
            }
        };

        this.onNewTaskChange = this.onNewTaskChange.bind(this);
        this.createNewTask = this.createNewTask.bind(this);
    }
    createNewTask (task) {
        let {actions, day} = this.props;
        this.setState({
            newTask: {
                title: '',
                text: ''
            }
        });
        task.assignDate = day.date;
        actions.addTask(task);
    }
    onNewTaskChange (newTask) {
        this.setState({newTask});
    }

    render () {
        let {day, navigator, weeks, actions} = this.props;
        let {newTask} = this.state;
        let {chooseDay} = actions;

        return (
            <div className={styles.page}>
                <div className={classNames(styles.sidebar, {
                    [styles.sidebar_show]: day
                })}>
                    <h2>{day && day.date}</h2>
                    <Task isNew={!newTask.title && !newTask.text}
                          task={newTask}
                          onTaskChange={this.onNewTaskChange} onComplete={this.createNewTask}></Task>
                </div>
                <div className={styles.main}>
                    <Navigator {...navigator}></Navigator>
                    <Month weeks={weeks} onChooseDay={chooseDay}></Month>
                </div>
            </div>
        )
    }
}
;


export default connect(select, dispatch)(Main);
