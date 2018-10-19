import axios from 'axios';

const getNowPlaying = (data) => ({
    type: 'GET_NOW_PLAYING',
    data,    
});

function fetchNowPaying(){
    return axios.get('https://api.themoviedb.org/3/movie/now_playing?api_key=c078934a9430d72f0b98a6beeba0443b&language=ru-RUS&page=1&region=UA')
}

export const asyncNowPlaying = () => dispatch => {
    fetchNowPaying()
    .then(res => dispatch(getNowPlaying(res.data.results.map(el => el))))
    .catch(err => console.log(err))
}
    

