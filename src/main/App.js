import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import * as Constants from "../sagas/constants";
import store from '../index';
import ItemComponent from "../components/item.component";


export class App extends React.Component {
    state = {
        input: '',

    };


    componentDidMount() {
        store.dispatch({type: Constants.FETCH_TODO_REQUEST});
    }

    handleSubmit = (event) => {
        store.dispatch({type: Constants.FETCH_TODO_ADD_REQUEST, payload: this.state.input});
    };


    handleInputChange = (event) => {
        this.setState({input: event.target.value});
    };

    render() {

        return (
            <div className="App container">
                <div className="App-header text-center">
                    <h1>To do list</h1>
                </div>
                <div className='row justify-content-center'>
                    <div className='col-6 m-2 input-group'>
                        <input type='text' name="label" onChange={this.handleInputChange}
                               value={this.state.input} className='form-control border border-dark'
                               placeholder='Add new task'
                               aria-describedby='basic-addon2'/>
                        <div className='input-group-append '>
                            <button value="add item" className="btn btn-outline-dark"
                                    onClick={this.handleSubmit} id='basic-addon2'>Add
                            </button>
                        </div>
                    </div>

                    <div className='col-6'>
                        <ul className="list-group">
                            {
                                this.props.items.map((item, key) => {
                                    return (
                                        <ItemComponent key={key} label={item.label} isDone={item.done} id={item.id}/>
                                    )
                                })
                            }
                        </ul>

                    </div>
                </div>
            </div>
        );
    }
}

export default App;
