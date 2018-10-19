export default function logShowDesctop (state=false, action) {
    switch (action.type) {
        case 'LOG_SHOW_DESCTOP':
            
        return !state       
    
        default:
            return state;
    }
}