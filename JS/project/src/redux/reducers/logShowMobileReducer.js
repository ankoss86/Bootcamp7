export default function logShowMobile (state=false, action) {
    switch (action.type) {
        case 'LOG_SHOW_MOBILE':
            
        return !state       
    
        default:
            return state;
    }
}
