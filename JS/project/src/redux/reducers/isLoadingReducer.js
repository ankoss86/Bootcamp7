export default function isLoading(state=true, action){
    switch (action.type) {
        case 'COMPLIT':
            return state=false;    
        default:
            return state;
    }
}