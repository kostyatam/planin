import {TYPES} from 'actions';
import {ms} from 'utils';

const initialState = {
    weeks: [],
    navigator: {}
};

export default (state = initialState, action = {}) => {
    switch (action.type) {
        case TYPES.SET_DATE:
            const {weeks, navigator} = action;
            return {
                ...state,
                weeks,
                navigator
            }
        default:
            return state;
   }
};