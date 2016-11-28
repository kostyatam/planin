'use strict';
import {guid} from 'utils';
import {TYPES} from './actions';

let initialState = {
    tasks: []
};

export default (state = initialState, action = {}) => {
    let {tasks} = state;
    let {task} = action;
   switch (action.type) {
       case TYPES.ADD_TASK:
           let createTime = (new Date).getTime();
           tasks.push({
               id: guid(),
               task,
               createTime
           });
           return {
               ...state,
               tasks
           };
       case TYPES.CHANGE_TASK:
           for (let i = 0, {length} = tasks; i < length; i++) {
               if (tasks[i].id !== task.id) continue;
               tasks[i] = task;
               return;
           }
       default:
           return state;
   }
};