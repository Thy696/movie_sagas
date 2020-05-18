

// Used to store movies returned from the server
export const movies = (state = [], action) => {
    switch (action.type) {
        case 'SET_MOVIES':
            return action.payload;//return what we have from server
        default:
            return state;
    }
}

// Used to store details that we get from Saga generator function 
export const details = (state = {}, action) => {
    switch (action.type) {
        case 'SET_DETAIL': // if action. type = SET_DETAIL return the data that got from function generator getDetail
            console.log('data detail: ', action.payload)
            return action.payload;
        case 'EDIT_DETAIL':// if action. type = SET_EDIT return the data that got from function generator editDetail
            console.log('data after edit detail: ', action.payload)
            return action.payload.detail;
        default:
            return state;
    }
}

// Used to store genres that we get from Saga generator function 
export const genres = (state = [], action) => {
    switch (action.type) {
        case 'SET_GENRES':
            console.log('------- data to append:', action.payload)
            return action.payload;
        default:
            return state;
    }
}

// Used to store new genres that we get databasae 
export const addRendes = (state = [], action) => {
    switch (action.type) {
        case 'FETCH_NEW_GENRES':
            console.log('data after add genres: ', action.payload)
            return action.payload;
        default:
            return state;
    }
}

// Used to store movies that we search from databasae 
export const search = (state = [], action) => {
    // console.log('in giphyReducer', action.payload);
    if (action.type === 'FOUND_MOVIE') {
        state = action.payload
        return state;
    }
    return state;
};//end reducer

// Used to store genres returned from the server
export const genresDatabase = (state = [], action) => {
    switch (action.type) {
        case 'SET_GENRES_DATABASE':
            return action.payload;//return what we have from server
        default:
            return state;
    }
}