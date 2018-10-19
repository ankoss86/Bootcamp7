import React from 'react';
import {NavLink} from 'react-router-dom';
import './PopularCard.css';

const PopularCard = ({title, id, img}) => {
    return (
        <div className='popCard'>
           
            <div  className="img-name">
                <img src={`https://image.tmdb.org/t/p/w600_and_h900_bestv2${img}`} alt="2" className="popImg"/>                
                    <div className="stars">
                    <NavLink  to={`/more/${id}`}><span id={id}  className="popTitle">{title}</span></NavLink> 
                        <div className='starsIcon'>
                        <i id='stars' className="sd fas fa-star"></i>
                        <i id='stars' className="fas fa-star"></i>
                        <i id='stars' className="fas fa-star"></i>
                        <i id='stars' className="fas fa-star"></i>
                        <i id='stars' className="fas fa-star"></i>
                        </div>
                    </div>
            </div>  
                     
        </div>
    );
};

export default PopularCard;