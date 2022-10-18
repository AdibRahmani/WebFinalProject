import {ADMIN_LOGIN, USER_LOGIN} from "../action/actionTypes";

export default function reducer(state = {person:"admin"}, action) {

    switch (action.type){
        case ADMIN_LOGIN:
            return {...state, person:'admin'}
        case USER_LOGIN:
            return {...state, person:'user'}

        default:
            return state
    }

}