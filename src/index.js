import React from 'react';

import ReactDOM from 'react-dom';
import './index.css';
import App from './main/App';
import {applyMiddleware, createStore} from 'redux';
import createSagaMiddleware from 'redux-saga';



import reducer from './reducers';
import todoSaga from './sagas/todo.saga';


// create the saga middleware
const sagaMiddleware = createSagaMiddleware();
// mount it on the Store
const store = createStore(
    reducer,
    applyMiddleware(sagaMiddleware)
);

// then run the saga
sagaMiddleware.run(todoSaga);

const render = () => {
    ReactDOM.render(<App items={store.getState().items}/>, document.getElementById('root'));
};


export default store;

store.subscribe(render);
render();
