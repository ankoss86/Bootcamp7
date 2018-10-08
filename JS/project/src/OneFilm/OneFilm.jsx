import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import Slider from "react-slick";
import './OneFilm.css';

const OneFilm = ({propToOneCard, propToOneCardSimilar, getFullHandler}) => {
    console.log(propToOneCard);
    console.log(propToOneCardSimilar);

    let settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 1
      };
    
    return (
        <div className='oneFilm'>
            <img src={`https://image.tmdb.org/t/p/w600_and_h900_bestv2${propToOneCard.poster_path}`} alt="" className="litleImgOne"/>
            <div style={{backgroundImage: `url("https://image.tmdb.org/t/p/w600_and_h900_bestv2${propToOneCard.backdrop_path}")`}}  className="bgImg">                
                <div className="mainInfoOne">
                    <span className="yearOne">{(moment(propToOneCard.release_date).format('YYYY'))}</span>
                    <span className="nameOne">{propToOneCard.original_title}</span>
                    <span className="timeingOne"><i id='oneTimer' className="far fa-clock"></i>{propToOneCard.runtime} минут</span>
                    <span className="voteOne">{propToOneCard.vote_average}</span>
                    <span className='voteQuon'>{propToOneCard.vote_count} голосов</span>
                </div>
            </div>
                <div className="fullInfo">
                    <div className='titles'>
                        {/* <div className="ganres"> */}
                            <p className='ganreText'>Жанры:</p>
                                {propToOneCard.genres === undefined ? null : propToOneCard.genres.map(el=> <span className='ganre'>{el.name}</span>)}               
                            <p className='siteName'>Официальный сайт:</p>
                            <span className="webSite"><a href={propToOneCard.homepage} className='toWeb'>{propToOneCard.homepage}</a></span>
                            <span className='tagName'>Лозунг:</span>
                            <span className='tagline'>{propToOneCard.tagline}</span>
                        {/* </div> */}
                    </div>
                    <div className='fullText'>
                        <p className='aboutOne'>Про фильм:</p>
                            <p className='fullOne'>{propToOneCard.overview}</p>
                    </div>
                    <div className='trailer'>
                        <img className='youtube' src="https://www.tubefilter.com/wp-content/uploads/2018/03/youtube-picture-in-picture.jpg" alt=""/>
                    </div>
                </div>
                    <div className="sameFilms">
                    <Slider {...settings}>
                        {propToOneCardSimilar.map(el => <div  className='similar'><img id={el.id} onClick={getFullHandler} className='poster pointer' src={el.poster_path !== null ? `https://image.tmdb.org/t/p/w600_and_h900_bestv2${el.poster_path}` : `https://mir-s3-cdn-cf.behance.net/project_modules/disp/7d2a1f22710747.563171ccee458.jpg`} alt={el.id}/></div>)}
                    </Slider>
                    </div>
        </div>
    );
};

OneFilm.propTypes = {
    
};

export default OneFilm;