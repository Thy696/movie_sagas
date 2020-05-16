import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App.js';
import registerServiceWorker from './registerServiceWorker';
import { createStore, combineReducers, applyMiddleware } from 'redux';
// Provider allows us to use redux within our react app
import { Provider } from 'react-redux';
import logger from 'redux-logger';
// Import saga middleware
import createSagaMiddleware from 'redux-saga';
// Import saga takeEvery and put
import { takeEvery, put } from 'redux-saga/effects'
import axios from 'axios';

// Create the rootSaga generator function
function* rootSaga() {
    // find the specific action from another component and give it an function generator
    yield takeEvery('FETCH_MOVIES', getMovies);
    yield takeEvery('FETCH_DETAIL', getDetail);
    yield takeEvery('FETCH_GENRES', getGenres);
    yield takeEvery('SUBMIT', editDetail);

}

//Using generator function to get all movies from server
function* getMovies(action) {
    //try catch
    try {
        const response = yield axios.get(`/movies`);//wait to get the data from server
        console.log('data in getMovies: ', response.data);
        yield put({
            type: 'SET_MOVIES', // set this action type = SET_MOVIES
            payload: response.data // set payload equal datas that we got from database
        })
    } catch (err) {
        console.log(err); // if get data is not success, logging out error
    }
}

//get detail include title and description from MovieItem
function* getDetail(action) {
    // console.log('--------in getDetail', action.payload);
    let detail = action.payload;// assigning the data title and description that we got from Movie.js to a variable
    //try catch
    try {
        // console.log('--------in getDetail', action.payload);
        yield put({
            type: 'SET_DETAIL', // set action type = SET_DETAIL
            payload: detail// set payload equal dispatch that we got from `MovieItem.js`
        })
    } catch (err) {
        console.log('Error in get detail', err);
    }
}



function* getGenres(action) {
    console.log('--------in getGenres', action.payload);
    let forGenres = action.payload;
    //try catch
    try {
        console.log('--------in getGenres', action.payload);
        yield put({
            type: 'SET_GENRES', // set action type = SET_DETAIL
            payload: forGenres// set payload equal dispatch that we got from `MovieItem.js`
        })
    } catch (err) {
        console.log('Error in get genres', err);
    }
}


function* editDetail(action) {
    // console.log('in getDetail', action.payload);
    let editDetail = action.payload;
    //try catch
    try {
        // console.log('data in try getDetail: ', forDetail);
        yield put({
            type: 'EDIT_DETAIL', // set action type = SET_DETAIL
            payload: editDetail// set payload equal dispatch that we got from `MovieItem.js`
        })
    } catch (err) {
        console.log('Error in edit detail', err);
    }
}


// Create sagaMiddleware
const sagaMiddleware = createSagaMiddleware();

// Used to store movies returned from the server
const movies = (state = [], action) => {
    switch (action.type) {
        case 'SET_MOVIES':
            return action.payload;//return what we have from server
        default:
            return state;
    }
}

const details = (state = {}, action) => {
    switch (action.type) {
        case 'SET_DETAIL':
            console.log('data detail: ', action.payload)
            return action.payload;
        case 'EDIT_DETAIL':
            console.log('data after edit detail: ', action.payload)
            return action.payload.detail;
        default:
            return state;
    }
}

// Used to store the movie genres
const genres = (state = [], action) => {
    switch (action.type) {
        case 'SET_GENRES':
            console.log('------- data to append:', action.payload)
            return action.payload;
        default:
            return state;
    }
}

// const editDetails = (state = [], action) => {
//     switch (action.type) {
//         case 'EDIT_DETAIL':
//             console.log('data after edit detail: ', action.payload)
//             return action.payload.detail;
//         default:
//             return state;
//     }
// }

// Create one store that all components can use
const storeInstance = createStore(
    combineReducers({
        movies,
        details,
        genres,
        // editDetails

    }),
    // Add sagaMiddleware to our store
    applyMiddleware(sagaMiddleware, logger),
);

// Pass rootSaga into our sagaMiddleware
sagaMiddleware.run(rootSaga);

ReactDOM.render(<Provider store={storeInstance}><App /></Provider>,
    document.getElementById('root'));
registerServiceWorker();
