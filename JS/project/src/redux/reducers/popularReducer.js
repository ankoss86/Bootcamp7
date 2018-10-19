export default function getPopular (state = [], action){
    switch (action.type) {
        case 'GET_POPULAR':
            return action.data;   
        default:
            return state;
    }
};
