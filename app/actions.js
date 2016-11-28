'use strict';

export const TYPES = {
    GET_TASKS: 'get_tasks',
    CHANGE_TASK: 'change_task',
    ADD_TASK: 'change_task'
};

export function getTasks () {
    return {
        type: TYPES.GET_TASKS,
    }
}

export function addTask (task) {
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