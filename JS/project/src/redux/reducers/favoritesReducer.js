export default function getFavorites (state=[], action){
    switch (action.type) {
        case 'ADD':
            return action.data;  
        case 'DELL':
            let id = action.event.target.id;
            let obj = JSON.parse(localStorage.getItem('films'));
            let res =  obj.favorites.filter(el =>el.id !== +id);  
            obj.favorites = res;
            localStorage.setItem('films', JSON.stringify(obj));
                return obj.favorites; 
        case 'REND_FAVOR':
            let data;
            localStorage.getItem('films') !== null ?
            data = JSON.parse(localStorage.getItem('films')).favorites : null;
                return data;     
        default:
            return state;
    }
}