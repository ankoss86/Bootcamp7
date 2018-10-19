import axios from 'axios';

const getPopular = (data) => ({
    type: 'GET_POPULAR',
    data,    
});

function fetchPopular(){
    return axios.get('https://api.themoviedb.org/3/movie/top_rated?api_key=c078934a9430d72f0b98a6beeba0443b&language=ru-RUS&page=1&region=ua')
};

export const asyncPopular = () => dispatch => {
    fetchPopular()
    .then(res => dispatch(getPopular(res.data.results)))
    .catch(err => console.log(err))
};