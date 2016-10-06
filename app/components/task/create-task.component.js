'use strict';

import React from 'react';
import {classNames} from 'utils';
import styles from './create-task.component.scss';

export class CreateTask extends React.Component {
    constructor () {
        super();
        this.onChange = this.onChange.bind(this);
    }

    render () {
        let {isOpen} = this.props;
        return (
            <div>
                <div className={classNames(styles.task, {[styles.task_open]: isOpen})}>
                    <div className={classNames(styles.taskTitle, styles.taskRow)}>
                        <div className={styles.bullet}></div>
                        <input className={styles.title} type="text" onChange={this.onChange} placeholder="HI, Anna! Create task."/>
                    </div>
                    <textarea className={classNames(styles.taskText, styles.taskRow)} name="" id="" cols="30" rows="4"></textarea>
                </div>
            </div>

        )
    }

    onChange (event) {
        let value = event.target.value;
        let {onChange} = this.props;
        if (typeof onChange !== 'function') {
            return;
        }
        onChange(value);
    }
}