import axios from 'axios';

const getSearch = (data) => ({
    type: 'GET_SEARCH_RESULT',
    data,    
});

function fetchSearch(query){
    return axios.get(`https://api.themoviedb.org/3/search/movie?api_key=c078934a9430d72f0b98a6beeba0443b&language=ru-RUS&query=${query}&page=1&include_adult=false&region=ua`)
};

export const asyncfetchSearch = (query) => dispatch => {
    fetchSearch(query)
    .then(res => dispatch(getSearch(res.data.results)))
    .catch(err => console.log(err))
};

export const closeSearch =()=>({
    type: 'CLOSE_SEARCH',
});