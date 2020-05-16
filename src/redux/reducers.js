

// Used to store movies returned from the server
export const movies = (state = [], action) => {
    switch (action.type) {
        case 'SET_MOVIES':
            return action.payload;//return what we have from server
        default:
            return state;
    }
}

// Used to store detail data 
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

// Used to store the movie genres
export const genres = (state = [], action) => {
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
