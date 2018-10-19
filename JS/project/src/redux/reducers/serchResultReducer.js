export default function searchResult (state =[], action) {
    switch (action.type) {
        case 'GET_SEARCH_RESULT':            
            return action.data; 
        case 'CLOSE_SEARCH':
            return [];       
        default:
            return state;
    }
}