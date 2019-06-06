import {
    CREATE_EMPLOYEE,
    UPDATE_EMPLOYEE,
    EMPLOYEE_SAVE_SUCCESS
} from '../../actions/types';

const INITIAL_STATE = {
    name: '',
    phone: '',
    shift: ''
};

export default (state = INITIAL_STATE, action) => {
    console.log('action', action);
    switch (action.type) {
        case CREATE_EMPLOYEE:
            return INITIAL_STATE;
        case UPDATE_EMPLOYEE:
            return { ...state, [action.payload.prop]: action.payload.value };
        case EMPLOYEE_SAVE_SUCCESS: 
            return INITIAL_STATE;
        default:
            return state;
    }
};
