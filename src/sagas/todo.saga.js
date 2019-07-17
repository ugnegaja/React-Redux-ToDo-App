import {call, put, takeEvery} from 'redux-saga/effects'
import * as TodoService from '../services/todo.service';
import * as Constants from './constants';
import store from "../index";


function* fetchTodoItems(action) {
    try {
        const items = yield call(TodoService.fetchTodoIems);
        yield put({type: Constants.FETCH_TODO_REQUEST_SUCCESS, items: items});
    } catch (e) {
        yield put({type: Constants.FETCH_TODO_REQUEST_FAILED, message: e.message});
    }
}

function* addTodoItem(action) {
    try {
        yield call(TodoService.addTodoItem, action.payload);
        yield put({type: Constants.FETCH_TODO_ADD_REQUEST_SUCCESS});
        store.dispatch({type: Constants.FETCH_TODO_REQUEST});
    } catch (e) {
        yield put({type: Constants.FETCH_TODO_ADD_REQUEST_FAILED, message: e.message});
    }
}

function* deleteTodoItem(action) {
    try {
        yield call(TodoService.deleteTodoItem, action.payload);
        yield put({type: Constants.FETCH_TODO_DELETE_REQUEST_SUCCESS});
        store.dispatch({type: Constants.FETCH_TODO_REQUEST});
    } catch (e) {
        yield put({type: Constants.FETCH_TODO_DELETE_REQUEST_FAILED, message: e.message});
    }
}

function* updateTodoItem(action) {
    try {
        yield call(TodoService.updateTodoItem, action.payload);
        yield put({type: Constants.FETCH_TODO_UPDATE_REQUEST_SUCCESS});
        store.dispatch({type: Constants.FETCH_TODO_REQUEST});
    } catch (e) {
        yield put({type: Constants.FETCH_TODO_UPDATE_REQUEST_FAILED, message: e.message});
    }
}

function* todoSaga() {
    yield takeEvery(Constants.FETCH_TODO_REQUEST, fetchTodoItems);
    yield takeEvery(Constants.FETCH_TODO_ADD_REQUEST, addTodoItem);
    yield takeEvery(Constants.FETCH_TODO_DELETE_REQUEST, deleteTodoItem);
    yield takeEvery(Constants.FETCH_TODO_UPDATE_REQUEST, updateTodoItem);
}



export default todoSaga;