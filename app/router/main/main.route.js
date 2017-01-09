'use strict';

import React, {Component} from 'react';
import {Month, Navigator, Task} from 'components';
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux';
import {ms, classNames} from 'utils';
import * as actions from 'actions';
import styles from './main.route.css';

function select(state, props) {
    const {calendar, sidebar} = state;
    return {
        weeks: calendar.weeks,
        navigator: calendar.navigator,
        day: sidebar.day,
        newTask: sidebar.newTask
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
        let {actions, params} = this.props;
        actions.setDate(params.date);
        this.onNewTaskChange = this.onNewTaskChange.bind(this);
        this.createNewTask = this.createNewTask.bind(this);
        this.onChooseDay = this.onChooseDay.bind(this);
    }
    createNewTask (task) {
        let {actions, day} = this.props;
        task.assignDate = day.date;
        actions.addTask(task);
    }
    onNewTaskChange (newTask) {
        let {actions} = this.props;
        actions.newTaskChange(newTask);
    }
    onChooseDay (day) {
        let {actions} = this.props;
        actions.chooseDay(day);
    }
    render () {
        let {day, navigator, weeks, newTask} = this.props;
        
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
                    <Month weeks={weeks} onChooseDay={this.onChooseDay}></Month>
                </div>
            </div>
        )
    }
}
;


export default connect(select, dispatch)(Main);
