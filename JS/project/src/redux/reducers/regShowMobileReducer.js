export default function regShowMobile (state=false, action) {
    switch (action.type) {
        case 'REG_SHOW_MOBILE':
            
        return !state       
    
        default:
            return state;
    }
}