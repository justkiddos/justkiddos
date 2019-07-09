/*import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();*/

//import React, {Component} from 'react';
import React from 'react';
import ReactDOM from 'react-dom';
import './styles/stylesheet.css'
import {BrowserRouter} from 'react-router-dom'
import {createStore, applyMiddleware} from 'redux'
import rootReducer from './redux/reducer'
import {Provider} from 'react-redux'
import App from './Components/App'
import thunk from 'redux-thunk'
import database from './database/config'

const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(), applyMiddleware(thunk))

//const element = React.createElement('h1', null, 'Hello World!');

//not needed since we're gonna use props from react
//const tasks = ['take out the trash', 'shovel the driveway', 'walk the dog'];

//using React.createElement
/*const element = React.createElement('ol', null, 
    tasks.map((task, index) => React.createElement('li', {key: index}, task))
);*/

//using JSX code, commented out since there is already a component for the title and list therefore this is not needed
/*const element = 
        <div>
            <h1> Task List </h1>
            <ol> 
                {tasks.map((task, index) => <li key = {index}> {task} </li>)}   
            </ol>
        </div>   */

//equivalent of tasks.map
// function funcName(task, index) {
//     return <li key = {index}>{task}</li>
// }






//make sure no space betweet thte main and browser tag
ReactDOM.render(<Provider store={store}><BrowserRouter><App/></BrowserRouter></Provider>, document.getElementById('root'));
