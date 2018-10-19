export default function getCommingSoon (state=[], action){
    switch (action.type) {
        case 'GET_COMMING_SOON':            
            return [...action.data];    
        default:
            return state;
    }
}