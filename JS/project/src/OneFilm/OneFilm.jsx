import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import './OneFilm.css';

const OneFilm = ({propToOneCard}) => {
    console.log(propToOneCard.genres);
    
    return (
        <div className='oneFilm'>
        <img src={`https://image.tmdb.org/t/p/w600_and_h900_bestv2${propToOneCard.poster_path}`} alt="" className="litleImgOne"/>
            <div style={{backgroundImage: `url("https://image.tmdb.org/t/p/w600_and_h900_bestv2${propToOneCard.backdrop_path}")`}}  className="bgImg">                
                <div className="mainInfoOne">
                    <span className="yearOne">{(moment(propToOneCard.release_date).format('YYYY'))}</span>
                    <span className="nameOne">{propToOneCard.original_title}</span>
                    <span className="timeingOne"><i id='oneTimer' class="far fa-clock"></i>{propToOneCard.runtime} минут</span>
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
                    </div>
        </div>
    );
};

OneFilm.propTypes = {
    
};

export default OneFilm;