export default function searchValue (state = '', action){
    switch (action.type) {
        case 'GET_VALUE':              
            return action.value;
        case 'CLEAR_INPUT':
            return ''
        default:
            return state;
    }
}