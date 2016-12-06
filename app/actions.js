'use strict';
import {guid, ms} from 'utils';

export const TYPES = {
    GET_TASKS: 'get_tasks',
    CHANGE_TASK: 'change_task',
    ADD_TASK: 'change_task',
    CHOOSE_DAY: 'choose_day'
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