'use strict'

import React from 'react';
import style from './task.css';
import {classNames} from 'utils';

export const Task = ({task = {title: '', text: ''}, isNew = false, handlers = {}}) => (
    <div className={classNames(style.task, {
        [style.task_new]: isNew
    })}>
        <div className={style.header}>
            <div className={style.circle}></div>
            <input
                className={style.title}
                type="text"
                value={task.title}/>
        </div>
        <textarea
            className={style.body}
            value={task.text}
            >
        </textarea>
    </div>
);