import React from 'react';
import PropTypes from 'prop-types';
import NowPlaying from '../NowPlaying/NowPlaying.jsx';
import CommingSoon from '../CommingSoon/CommingSoon';
import {Switch, Route} from 'react-router-dom';
import './Main.css';
import Favorites from '../Favorites/Favorites';
import OneFilm from '../OneFilm/OneFilm.jsx';

const Main = ({propToOneCard, propToOneCardSimilar, getFullHandler, showMenuHendler, showChatHendler, addToFavoritesHendler}) => {

        return (
            <main className='main'>
                <form action="#" className="searchForm">
                    <label className='label'>
                        <input className='inputSearch' type="text" placeholder='Search movie...'/>
                        <i className="fas fa-search"></i>                        
                    </label>
                        <i onClick={()=>showMenuHendler()} className="fas fa-bars"></i>
                        <i onClick={()=>showChatHendler()} className="far fa-comments"></i>
                </form>
                <Switch>
                    <Route exact path='/' render={props =><NowPlaying getFullHandler={getFullHandler} addToFavoritesHendler={addToFavoritesHendler} {...props}/>}/>
                    <Route path='/comming' render={props =><CommingSoon getFullHandler={getFullHandler} addToFavoritesHendler={addToFavoritesHendler} {...props}/>}/>
                    <Route path='/favorites' component={Favorites}/>
                    <Route path='/more' render={props =><OneFilm getFullHandler={getFullHandler} propToOneCard={propToOneCard} propToOneCardSimilar={propToOneCardSimilar} {...props}/>}/>
                </Switch>
            </main>
        );
    }

Main.propTypes = {
    showMenuHendler: PropTypes.func,
    showChatHendler: PropTypes.func,
    addToFavoritesHendler: PropTypes.func,
};

export default Main;