import React from 'react';
import './PopularCard.css';

const PopularCard = ({title, rating, img}) => {
    return (
        <div className='popCard'>
            <div className="img-name">
                <img src={`https://image.tmdb.org/t/p/w600_and_h900_bestv2${img}`} alt="2" className="popImg"/>                
                    <div className="stars">
                        <span className="popTitle">{title}</span>
                        <div className='starsIcon'>
                        <i id='stars' class="sd fas fa-star"></i>
                        <i id='stars' class="fas fa-star"></i>
                        <i id='stars' class="fas fa-star"></i>
                        <i id='stars' class="fas fa-star"></i>
                        <i id='stars' class="fas fa-star"></i>
                        </div>
                    </div>
            </div>            
        </div>
    );
};

export default PopularCard;