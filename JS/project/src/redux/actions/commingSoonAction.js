import axios from 'axios';

const getCommingSoon = (data) => ({
    type: 'GET_COMMING_SOON',
    data,    
});

function fetchCommingSoon(){
    return axios.get('https://api.themoviedb.org/3/movie/upcoming?api_key=c078934a9430d72f0b98a6beeba0443b&language=ru-RUS&page=1&region=UA')
}

export const asyncCommingSoon = () => dispatch => {
    fetchCommingSoon()
    .then(res => dispatch(getCommingSoon(res.data.results.map(el => el))))
    .catch(err => console.log(err))
}
    
