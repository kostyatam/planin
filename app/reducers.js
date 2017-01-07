'use strict';
import {TYPES} from './actions';
import {ms} from 'utils';

let initialState = {
    tasks: [],
    day: null
};

export default (state = initialState, action = {}) => {
    let {tasks} = state;
    let {task} = action;
   switch (action.type) {
       case TYPES.ADD_TASK:
           tasks = ms.insertTask(tasks, task);
           return {
               ...state,
               tasks
           };
       case TYPES.CHANGE_TASK:
           for (let i = 0, {length} = tasks; i < length; i++) {
               if (tasks[i].id !== task.id) continue;
               tasks[i] = task;
               return state;
           }
       case TYPES.CHOOSE_DAY:
           let {day} = action;
           return {
               ...state,
               day
           }
       default:
           return state;
   }
};