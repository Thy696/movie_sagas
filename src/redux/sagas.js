
// Import saga takeEvery and put
import { takeEvery, put } from 'redux-saga/effects'
import axios from 'axios';

// Create the rootSaga generator function
export function* rootSaga() {
    // find the specific action from another component and give it an function generator
    yield takeEvery('FETCH_MOVIES', getMovies);
    yield takeEvery('FETCH_DETAIL', getDetail);
    yield takeEvery('FETCH_GENRES', getGenres);
    yield takeEvery('SUBMIT', editDetail);

}

export function* getMovies(action) {
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

export function* getDetail(action) {
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

export function* getGenres(action) {
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

export function* editDetail(action) {
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

