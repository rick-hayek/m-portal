// actions: update values and save to store

import {ActionType}  from './action-type';

// export const login = (user) => {
//     return dispatch => { 
//             dispatch({
//                 type: ActionType.LOGIN_SUCCEEDED,
//                 user
//             });
//         };
// }

export const login = (user) => {
    return {
        type: ActionType.LOGIN_SUCCEEDED,
        user
    };
}