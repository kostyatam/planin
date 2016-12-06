'use strict';
import React from 'react';
import style from './day.css';
import {classNames} from 'utils';

export const Day = ({data}) => {
    let {number, today, disabled, selected, tasks} = data;
    return (
        <div className={classNames(style.day, {
            [style.disabled]: disabled
        })}>
            <div className={classNames(style.row, style.row_center)}>
                <Title number={number} selected={selected} today={today}></Title>
            </div>
            <div className={style.row}>
                <TaskLists tasks={tasks}></TaskLists>
            </div>
        </div>
    )
};
Day.propTypes = {
    data: React.PropTypes.shape({
        number: React.PropTypes.number,
        today: React.PropTypes.boolean,
        disabled: React.PropTypes.boolean,
        selected: React.PropTypes.boolean,
        tasks: React.PropTypes.arrayOf(React.PropTypes.shape({
            id: React.PropTypes.string,
            title: React.PropTypes.title,
        })),
    }).isRequired
};

export const Task = ({title}) => (
    <li className={style.task}>
        {title}
    </li>
);

export const TaskLists = ({id, tasks}) => (
    <ul>
        {
            tasks.map(({id, title}) => (
                <Task key={id} title={title}></Task>
            ))
        }
    </ul>
);

export const Title = ({number, selected, today}) => (
    <div className={classNames(style.title, {
        [style.title_selected]: selected,
        [style.title_today]: today
    })}>
        {(!today) ? number : ['today', number].join(' ')}
    </div>
);

