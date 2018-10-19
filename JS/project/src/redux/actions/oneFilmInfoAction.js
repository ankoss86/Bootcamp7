import axios from 'axios';
import { isLoading } from '../actions/isLoadingAction';
import { closeSearch } from '../actions/searchResultAction';
import { clearSearchValue } from '../actions/searchAction';

const getFullInfo = (data) => ({
    type: 'GET_FULL_INFO',
    data,    
});

function fetchFullInfo(id){
    
    return Promise.all([
        axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=c078934a9430d72f0b98a6beeba0443b&language=ru-RUS`)
        ,axios.get(`https://api.themoviedb.org/3/movie/${id}/similar?api_key=c078934a9430d72f0b98a6beeba0443b&language=ru-RUS&page=1`)
        ,axios.get(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=c078934a9430d72f0b98a6beeba0443b&language=en-US`)
      ])
}

export const asyncFullInfo = (id) => dispatch => {
    fetchFullInfo(id)
    .then(data => { 
        let [res, sim, trailer] = data;
        let result = res.data;
        let similar = sim.data.results;
        let videos = trailer.data.results;
        let finalInfo = {
            results: result,
            similarResults: similar,
            trailer: videos
        };       
        dispatch(getFullInfo(finalInfo));          
    })
    .then(res => dispatch(isLoading()))
    .then(res=> dispatch(closeSearch()))
    .then(res=> dispatch(clearSearchValue()))
    .catch(err => console.log(err))
}
    