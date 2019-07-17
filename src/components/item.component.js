import React from "react";
import store from "../index";
import * as Constants from "../sagas/constants";
import FontAwesome from 'react-fontawesome';

export default class ItemComponent extends React.Component {

    handleDelete = (event) => {
        event.preventDefault();
        store.dispatch({type: Constants.FETCH_TODO_DELETE_REQUEST, payload: event.target.value});
    };

    handleIsDone = (event) => {
        debugger;
        store.dispatch({
            type: Constants.FETCH_TODO_UPDATE_REQUEST,
            payload: {id: this.props.id, done: !this.props.isDone, label: this.props.label}
        });
    };


    render() {
        return (
            <li className='list-group-item d-flex justify-content-between ' key={this.key} style={this.props.isDone ? {backgroundColor: "#94d0a1"} : {backgroundColor: "#e87676b8"}}>
                <input type="checkbox" value={this.props.id} checked={this.props.isDone === true}
                       onChange={this.handleIsDone}/>
                {this.props.label}
                <button value={this.props.id} className="btn btn-outline-dark"
                        onClick={this.handleDelete}><FontAwesome name='trash'/>
                </button>
            </li>

        );
    }
}