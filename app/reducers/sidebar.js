import {TYPES} from 'actions';
import {ms} from 'utils';

const initialState = {
    day: null,
    newTask: {}
};

export default (state = initialState, action = {}) => {
    switch (action.type) {
        case TYPES.CHOOSE_DAY:
            let {day} = action;
           return {
               ...state,
               day
           };
        case TYPES.CHANGE_NEW_TASK:
            let {newTask} = action; 
            return {
                ...state,
                newTask
            }
        default:
           return state;
   }
};