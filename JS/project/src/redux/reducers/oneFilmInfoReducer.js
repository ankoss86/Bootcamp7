export default function getFullInfo (
    state={}, action){

    switch (action.type) {
        case 'GET_FULL_INFO':            
            return action.data;    
        default:
            return state;
    }
}