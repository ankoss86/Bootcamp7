import React, { Component } from 'react';
import axios from 'axios';
import './Popular.css';
import PopularCard from '../PopularCard/PopularCard';

class Popular extends Component {

    state = {
        results: []
    }

componentDidMount(){
    axios.get('https://api.themoviedb.org/3/movie/top_rated?api_key=c078934a9430d72f0b98a6beeba0443b&language=ru-RUS&page=1&region=ua')
    .then(res => {
        this.setState({results: res.data.results});
        console.log(this.state.results)
    })    
    .catch(err => console.log(err))
}


    render() {
        return (
            <div className='wish'>
                <p className="best">Today best choise</p>
                <div className='as'>
                {this.state.results.map(el => <PopularCard title={el.title} rating={el.vote_average} img={el.poster_path}/>)}
                </div>
            </div>
        );
    }
}

export default Popular;