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
    yield takeEvery('FETCH_MOVIES', getMovies);
    yield takeEvery('FETCH_DETAIL', getDetail);
    yield takeEvery('FETCH_GENRES', getGenres);
}

//Using generator function to get data from server
function* getMovies(action) {
    //try catch
    try {
        const response = yield axios.get(`/movies`);//wait to get the data from database
        console.log('data in getMovies: ', response.data);
        yield put({
            type: 'SET_MOVIES', // set action type = SET_MOVIES
            payload: response.data // set payload equal datas that we got from database
        })
    } catch (err) {
        console.log(err);
    }
}



//get detail include title and description from MovieItem
function* getDetail(action) {
    // console.log('in getDetail', action.payload);
    let forDetail = action.payload;
    //try catch
    try {
        // console.log('data in try getDetail: ', forDetail);
        yield put({
            type: 'SET_DETAIL', // set action type = SET_DETAIL
            payload: forDetail// set payload equal dispatch that we got from `MovieItem.js`
        })
    } catch (err) {
        console.log('Error in get detail', err);
    }
}

function* getGenres(action) {
    console.log('----->----- in getGenres', action.payload);
    //try catch
    try {
        const response = yield axios.get(`/genres/${action.payload}`);//wait to get the data from database
        console.log('-------response in getGenres: ', response.data);
        yield put({
            type: 'SET_GENRES', // set action type = SET_MOVIES
            payload: response.data // set payload equal datas that we got from database
        })
    } catch (err) {
        console.log('Error in GET genres', err);
    }
}


// Create sagaMiddleware
const sagaMiddleware = createSagaMiddleware();

// Used to store movies returned from the server
const movies = (state = [], action) => {
    switch (action.type) {
        case 'SET_MOVIES':
            return action.payload;
        default:
            return state;
    }
}

const details = (state = {}, action) => {
    switch (action.type) {
        case 'SET_DETAIL':
            console.log('data detail: ', action.payload)
            return action.payload;
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

// Create one store that all components can use
const storeInstance = createStore(
    combineReducers({
        movies,
        details,
        genres,

    }),
    // Add sagaMiddleware to our store
    applyMiddleware(sagaMiddleware, logger),
);

// Pass rootSaga into our sagaMiddleware
sagaMiddleware.run(rootSaga);

ReactDOM.render(<Provider store={storeInstance}><App /></Provider>,
    document.getElementById('root'));
registerServiceWorker();
