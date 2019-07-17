import {FETCH_TODO_ADD_REQUEST_SUCCESS, FETCH_TODO_REQUEST_SUCCESS} from "./sagas/constants";

export default function todoReducer(state = {items:[]}, action) {
    switch (action.type) {
        case FETCH_TODO_REQUEST_SUCCESS:
            state = {items: action.items};
            return state;

        case FETCH_TODO_ADD_REQUEST_SUCCESS:
            return state;

        default:
            return state
    }
}