import React from 'react';
import './SearchFilms.css';
import SearchCard from '../SearchCard/SearchCard';
import { connect } from 'react-redux';
 
const searchFilms = ({searchResult}) => {
    return (
        <div className='searchBox'>
            {searchResult.map(el => <SearchCard img={el.poster_path} id={el.id} title={el.title}/>)}
        </div>
    );
};

function MSTP (state){
    return {
        searchResult: state.searchResult,
    }
}

export default connect(MSTP) (searchFilms);