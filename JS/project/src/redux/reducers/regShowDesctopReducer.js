export default function regShowDesctop (state=false, action) {
    switch (action.type) {
        case 'REG_SHOW_DESCTOP':
            
        return !state       
    
        default:
            return state;
    }
}