export default function getNowPaying (state=[], action){
    switch (action.type) {
        case 'GET_NOW_PLAYING':            
            return [...action.data];    
        default:
            return state;
    }
}