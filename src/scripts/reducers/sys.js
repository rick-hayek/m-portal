import { ActionType } from '../actions/action-type';

const initState = {
    cpu: undefined,
};

const performance = (state = initState, action)=> {
    switch(action.type) {
        case ActionType.PERF_CPU:
            return Object.assign({}, state, action.performance);
        default:
            return state;
    }
}

export default performance;