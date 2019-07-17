import {TODO_ADD, TODO_DELETE, TODO_EDIT, TODO_VIEW} from './api.paths';

export const addTodoItem = (param) => {
    return fetch(TODO_ADD, {
        headers: {
            'Content-Type': 'application/json'
        },
        method: 'post',
        body: JSON.stringify({label: param, done: false})
    });
};

export const deleteTodoItem = (param) => {
    return fetch(TODO_DELETE, {
        headers: {
            'Content-Type': 'application/json'
        },
        method: 'delete',
        body: JSON.stringify(param)
    });
};
export const updateTodoItem = (param) => {
    return fetch(TODO_EDIT, {
        headers: {
            'Content-Type': 'application/json'
        },
        method: 'put',
        body: JSON.stringify(param)
    });
};

export const fetchTodoIems = () => {
    return fetch(TODO_VIEW).then((result) => result.json());
};