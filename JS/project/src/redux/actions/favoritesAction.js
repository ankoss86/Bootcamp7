import axios from 'axios';

const addFavorites = (data) => ({
    type: 'ADD',
    data,    
});

function fetchFavFilm(event){     
    let id = event.target.id;
    return axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=c078934a9430d72f0b98a6beeba0443b&language=ru-RUS`)
}

export const asyncFavFilm = (event) => dispatch => {    
    fetchFavFilm(event)
    .then(res => {
        localStorage.getItem('films') === undefined ? localStorage.setItem('films', JSON.stringify({favorites: [], wishlist: []}))&&this.setState({storadge: true}) : null 
        let obj = JSON.parse(localStorage.getItem('films'));
        obj.favorites.length === 0 ? obj.favorites.push(res.data) : obj.favorites.map(el => el.id).includes(res.data.id) ? null : obj.favorites.push(res.data);
        localStorage.setItem('films', JSON.stringify(obj));
        dispatch(addFavorites(obj.favorites))    
    })  
    .catch(err => console.log(err))
};

export const delFromFavorites = (event) => ({
    type: 'DELL',
    event,    
});
    
export const renderFavorites = () => ({
    type: 'REND_FAVOR',
});
    