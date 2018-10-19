import React from 'react';
import './SearchCard.css';
import {NavLink} from 'react-router-dom';


const SearchCard = ({img, id, title}) => {
    return (
        <NavLink to={`/more/${id}`}>
            <div id={id}>
                <img className='searchImg' src={img !== null ? `https://image.tmdb.org/t/p/w600_and_h900_bestv2${img}` : `https://mir-s3-cdn-cf.behance.net/project_modules/disp/7d2a1f22710747.563171ccee458.jpg`} alt='pic'/>
                <span className='searchTitle'>{title}</span> 
            </div>
        </NavLink>
    );
};

export default SearchCard;