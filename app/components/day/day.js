'use strict';
import style from './day.css';
import {classNames} from 'utils';

export const Day = ({number, today, disabled, selected, tasks}) => (
    <div className={style.day}>
        <div className={classNames(style.row, style.row_center)}>
            <Title number={number} selected={selected} today={today}></Title>
        </div>
        <div className={style.row}>
            <TaskLists tasks={tasks}></TaskLists>
        </div>
    </div>
);

export const Task = ({title}) => (
    <div className={style.task}>
        {title}
    </div>
);

export const TaskLists = ({tasks}) => (
    <ul>
        {
            tasks.map(({title}) => (
                <li>
                    <Task title={title}></Task>
                </li>
            ))
        }
    </ul>
);

export const Title = ({number, selected, today}) => (
    <div className={classNames(styles.title, {
        [style.title_selected]: selected,
        [style.title_today]: today
    })}>
        {number}
    </div>
);

