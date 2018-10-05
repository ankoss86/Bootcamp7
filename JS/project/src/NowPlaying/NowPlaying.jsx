import React, { Component } from 'react';
import Grid from '../Grid/Grid.jsx';
import PropTypes from 'prop-types';
import axios from 'axios';

class NowPlaying extends Component {

    state = {

       results: [],
        
    } 

componentDidMount(){
    axios.get('https://api.themoviedb.org/3/movie/now_playing?api_key=c078934a9430d72f0b98a6beeba0443b&language=ru-RUS&page=1&region=UA')
    .then(res => res.data.results.map(el => el))
    .then(res => this.setState({
      results: res
    }))
    .catch(err => console.log(err))
}        

    render() {
        return (
            <div>
                <Grid prop={this.state.results} getFullHandler={this.props.getFullHandler} addToFavoritesHendler={this.props.addToFavoritesHendler}/>
            </div>
        );
    }
}

export default NowPlaying;