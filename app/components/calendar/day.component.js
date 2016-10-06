'use strict'
import React from 'react';
import {classNames} from 'utils';
import styles from './calendar.component.scss';

export default class Day extends React.Component {
    render() {
        let {props} = this;
        let {number, isToday, tasks, disabled} = props;
        let tasksList = tasks.map(task => {
            return (
                <div className={styles.day__task} key={task.id}>
                    {task.text}
                </div>
            )
        });
        return (
            <div className={classNames(styles.day, {[styles.day_disabled]: disabled})}>
                <div className={classNames(styles.day__row, styles.day__row_header)}>
                    <div className={classNames(styles.day__number, {[styles.day__number_active]: isToday})}>
                        {(isToday) ? 'today ' : ''}
                        {number}
                    </div>
                </div>
                <div className={styles.day__row}>
                    {tasksList}
                </div>
            </div>
        )
    }
}