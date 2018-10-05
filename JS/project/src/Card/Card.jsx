import React from 'react';
import PropTypes from 'prop-types';
import {NavLink} from 'react-router-dom';
import './Card.css';

const Card = ({getFullHandler, addToFavoritesHendler, id, img}) => {
    return (
        <div className='filmCard'>
        <img className='poster' src={img !== null ? `https://image.tmdb.org/t/p/w600_and_h900_bestv2${img}` : `https://mir-s3-cdn-cf.behance.net/project_modules/disp/7d2a1f22710747.563171ccee458.jpg`} alt={id}/>
        <div className="overlay">
            <div className="overlayIcon"><span data-title='add to faforites' className="tooltip"></span><i onClick={addToFavoritesHendler} id={id} className="hidenIcons far fa-star fa-3x"></i></div>
            <div className="overlayIcon"><span data-title='add to my wish' className="tooltip"></span><i id={id} className="hidenIcons far fa-grin-hearts fa-3x"></i></div>
            <div className="overlayIcon"><span data-title='go to disscision' className="tooltip"></span><i className="hidenIcons far fa-comment fa-3x"></i></div>
            <div className="overlayIcon"><span data-title='full info' className="tooltip"></span><NavLink to='/more'><i onClick={getFullHandler} id={id} className="hidenIcons fas fa-expand-arrows-alt fa-3x"></i></NavLink></div>
        </div>
        </div>
    );
};

Card.propTypes = {
    id: PropTypes.number,
    img: PropTypes.string,
    addToFavoritesHendler: PropTypes.func
};

export default Card;