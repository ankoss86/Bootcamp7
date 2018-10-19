import React, { Component } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import Loader from 'react-loader-spinner';
import {NavLink} from 'react-router-dom';
import Slider from "react-slick";
import './OneFilm.css';
import { connect } from 'react-redux';
import { asyncFullInfo } from '../redux/actions/oneFilmInfoAction';
import { closeSearch } from '../redux/actions/searchResultAction';

class OneFilm extends Component {

componentWillReceiveProps(nextProps){
    nextProps.match.params.id !== this.props.match.params.id ?
    this.props.getFullInfo(nextProps.match.params.id) :
    null;
    
};

componentDidMount(){
    this.props.getFullInfo((this.props.match.params.id));
    
};    

    render() {

        let settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 1
        };
      
        return (            
            <div className='wrap'>
            {this.props.isLoading ? <div className='loaderWrap'>< Loader type="Plane" color="#00BFFF" height="100" width="100"/></div>
            :
                <div className='oneFilm'>
                    <div className='trailer'>
                    {this.props.trailer[0] === undefined
                    ?
                    <img className='iFrame' src="https://i.ytimg.com/vi/coD8Yem9K7I/hqdefault.jpg" alt="trailer not found"/>
                    :
                        <iframe className='iFrame' src={`https://www.youtube.com/embed/${this.props.trailer[0].key}?autoplay=0`}
                            frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen>
                        </iframe>
                    }
                    </div>

                    <div className='wrapImg'>
                        <div className="oneIcons">
                            <i id={this.props.match.params.id} onClick={this.props.addToFavoritesHendler} className="oneOneIcon far fa-star fa-3x"></i>
                            <i className="oneOneIcon far fa-grin-hearts fa-3x"></i>
                            <i className="oneOneIcon far fa-comment fa-3x"></i>
                        </div>
                            <img src={`https://image.tmdb.org/t/p/w600_and_h900_bestv2${this.props.results.poster_path}`} alt="" className="litleImgOne"/>
                    </div>
                    <div style={{backgroundImage: `url("https://image.tmdb.org/t/p/w600_and_h900_bestv2${this.props.results.backdrop_path}")`}}  className="bgImg">                
                        <div className="mainInfoOne">
                            <span className="yearOne">{(moment(this.props.results.release_date).format('YYYY'))}</span>
                            <span className="nameOne">{this.props.results.original_title}</span>
                            <span className="timeingOne"><i id='oneTimer' className="far fa-clock"></i>{this.props.results.runtime} минут</span>
                            <span className="voteOne">{this.props.results.vote_average}</span>
                            <span className='voteQuon'>{this.props.results.vote_count} голосов</span>
                        </div>
                    </div>
                    <div className="fullInfo">
                        <div className='titles'>
                            <p className='ganreText'>Жанры:</p>
                                {this.props.results.genres.map(el=> <span key={Math.random()*1000} className='ganre'>{el.name}</span>)}               
                            <p className='siteName'>Официальный сайт:</p>
                            <span className="webSite"><a href={this.props.results.homepage} className='toWeb'>{this.props.results.homepage}</a></span>
                            <span className='tagName'>Лозунг:</span>
                            <span className='tagline'>{this.props.results.tagline}</span>
                        </div>
                    <div className='fullText'>
                        <p className='aboutOne'>Про фильм:</p>
                        <p className='fullOne'>{this.props.results.overview}</p>
                    </div>
                    <div>
                    {this.props.trailer[0] === undefined
                    ?
                    <img className='bottom' src="https://i.ytimg.com/vi/coD8Yem9K7I/hqdefault.jpg" alt="trailer not found"/>
                    :
                        <iframe className='bottom' src={`https://www.youtube.com/embed/${this.props.trailer[0].key}?autoplay=0`}
                            frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen>
                        </iframe>
                    }
                    </div>
                    <div className="sameBottom">
                        <Slider {...settings}>
                            {this.props.similarResults.map(el => <div key={Math.random()*1000}  className='similar'><NavLink  to={`/more/${el.id}`}><img id={el.id} onClick={this.props.getFullInfo} className='poster pointer' src={el.poster_path !== null ? `https://image.tmdb.org/t/p/w600_and_h900_bestv2${el.poster_path}` : `https://mir-s3-cdn-cf.behance.net/project_modules/disp/7d2a1f22710747.563171ccee458.jpg`} alt={el.id}/></NavLink></div>)}
                        </Slider>
                    </div>
                </div>               
                <div className="sameFilms">
                    <Slider {...settings}>
                        {this.props.similarResults.map(el => <div key={Math.random()*1000}  className='similar'><NavLink  to={`/more/${el.id}`}><img id={el.id} className='poster pointer' src={el.poster_path !== null ? `https://image.tmdb.org/t/p/w600_and_h900_bestv2${el.poster_path}` : `https://mir-s3-cdn-cf.behance.net/project_modules/disp/7d2a1f22710747.563171ccee458.jpg`} alt={el.id}/></NavLink></div>)}
                    </Slider>
                </div>
            </div>
            }
        </div>
        )
    }
}

OneFilm.propTypes = {
    
};

function MSTP (state) {
    return {
        isLoading: state.isLoading,
        trailer: state.getFullInfo.trailer,
        results: state.getFullInfo.results,
        similarResults: state.getFullInfo.similarResults,
    }
};

function MDTP (dispatch) {
    return {
        getFullInfo: function(id){
            dispatch(asyncFullInfo(id))
        },

        closeSearch: function(){
            dispatch(closeSearch())
        },
    }
};

export default connect(MSTP, MDTP) (OneFilm);