import React from 'react';
import PropTypes from 'prop-types';
import NowPlaying from '../NowPlaying/NowPlaying.jsx';
import CommingSoon from '../CommingSoon/CommingSoon';
import {Switch, Route} from 'react-router-dom';
import './Main.css';
import Favorites from '../Favorites/Favorites';
import OneFilm from '../OneFilm/OneFilm.jsx';
import SearchFilms from '../SearchFilms/SearchFilms';
import { history } from '../redux/store/store';
import { ConnectedRouter } from 'connected-react-router';
import { connect } from 'react-redux';
import { showMenu } from '../redux/actions/showMenuAction';
import { showChat} from '../redux/actions/showChatAction';
import { asyncFavFilm, delFromFavorites} from '../redux/actions/favoritesAction';
import { getSearchValue } from '../redux/actions/searchAction';
import { asyncfetchSearch } from '../redux/actions/searchResultAction';
import { clearSearchValue } from '../redux/actions/searchAction';


const Main = ({clearSearchValue, searchResult,asyncfetchSearch, searchValue, getSearchValue, addFavorites, dellFavorites, showHideMenu, showHideChat}) => {

    return (
        <main className='main'>
            <form action="#" onSubmit={(event)=>{event.preventDefault(); clearSearchValue()}} className="searchForm">
                <label className='label'>
                    <input className='inputSearch' type="text" onChange={(event)=>{getSearchValue(event); asyncfetchSearch(searchValue)}} value={searchValue} placeholder='Search movie...' /><i className="fas fa-search"></i>                        
                </label>
                <i onClick={showHideMenu} className="fas fa-bars"></i>
                <i onClick={showHideChat} className="far fa-comments"></i>
            </form>
            
            {searchResult.length ? <SearchFilms/> : null}
            <ConnectedRouter history={history}>
                <Switch>
                    <Route exact path='/' render={props =><NowPlaying addToFavoritesHendler={addFavorites} {...props}/>}/>
                    <Route path='/comming' render={props =><CommingSoon  addToFavoritesHendler={addFavorites} {...props}/>}/>
                    <Route path='/favorites' render={props =><Favorites removeFromVavorites={dellFavorites} {...props}/>}/>
                    <Route path='/more/:id' render={props =><OneFilm addToFavoritesHendler={addFavorites} {...props}/>}/>
                </Switch>
            </ConnectedRouter>
        </main>
    );
};

Main.propTypes = {
    showMenuHendler: PropTypes.func,
    showChatHendler: PropTypes.func,
    addToFavoritesHendler: PropTypes.func,
};

function MSTP(state){
    return {
      showMenu: state.showMenu,
      searchValue: state.searchValue,
      searchResult: state.searchResult,
    }
  };
  
function MDTP(dispatch){
    return {
        showHideMenu: function(){
            dispatch(showMenu())
        },

        showHideChat: function(){
            dispatch(showChat())
        },

        addFavorites: function(event){
            dispatch(asyncFavFilm(event))
        },
        
        dellFavorites: function(event){
            dispatch(delFromFavorites(event))
        },
        
        getSearchValue: function(event){
            dispatch(getSearchValue(event))
        },

        asyncfetchSearch: function(query){
            dispatch(asyncfetchSearch(query))
        },

        clearSearchValue: function(){
            dispatch(clearSearchValue())
        }
    }
};

export default connect(MSTP, MDTP) (Main);