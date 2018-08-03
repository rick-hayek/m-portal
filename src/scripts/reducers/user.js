import { ActionType } from '../actions/action-type';

const initState = {
    user_id: undefined,
    user_name: undefined,
    is_superuser: false,
    is_master: false,
    system_status: undefined,
};

const user = (state = initState, action)=> {
    switch(action.type) {
        case ActionType.LOGIN_SUCCEEDED:
            return Object.assign({}, state, action.user);
        default:
            return state;
    }
}

export default user;