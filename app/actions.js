'use strict';
import {guid, ms} from 'utils';

export const TYPES = {
    GET_TASKS: 'get_tasks',
    CHANGE_TASK: 'change_task',
    CHANGE_NEW_TASK: 'change_new_task',
    ADD_TASK: 'change_task',
    CHOOSE_DAY: 'choose_day',
    SET_DATE: 'set_date'
};

export function chooseDay (day) {
    return {
        type:TYPES.CHOOSE_DAY,
        day
    }
}

export function getTasks () {
    return {
        type: TYPES.GET_TASKS,
    }
}

export function addTask (task) {
    task.id = guid();
    task.createDate = ms.getTime();
    return {
        type: TYPES.ADD_TASK,
        task
    }
}

export function changeTask (task) {
    return {
        type: TYPES.CHANGE_TASK,
        task
    }
}

export function setDate (date) {
    return (dispatch, getState) => {
        const {tasks} = getState();
        const {month, year} = ms.parseDate(date || Date.now());
        const weeks = ms.getWeeks(ms.getMonthCalendar(tasks, month, year));
        dispatch({
            type: TYPES.SET_DATE,
            weeks,
            navigator: {
                back: ms._monthNumber[month - 1 > 0 ? month - 1 : 12 + (month - 1)],
                forward: ms._monthNumber[month + 1 < 12 ? month + 1 : (month + 1) - 12],
                title: `${ms._monthNumber[month]}'${year}`
            }
        })
    }
}
export function newTaskChange (newTask) {
    return {
        type: TYPES.CHANGE_NEW_TASK,
        newTask
    }
}