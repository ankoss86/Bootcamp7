import React from 'react';
import Card from '../Card/Card.jsx';
import PropTypes from 'prop-types';
import './Grid.css';

const Grid = ({getFullHandler, addToFavoritesHendler, prop}) => {
    
    return (
        <div className='grid'>
            {prop.map(el => <Card getFullHandler={getFullHandler} addToFavoritesHendler={addToFavoritesHendler} key={el.id} id={el.id} img={el.poster_path}/>)} 
        </div>
    );
};

Grid.propTypes = {
    prop: PropTypes.arrayOf(PropTypes.object),
    addToFavoritesHendler: PropTypes.func,
};

export default Grid;