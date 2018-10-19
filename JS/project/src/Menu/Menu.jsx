import React, { Component } from 'react';
import Login from '../Login/Login.jsx';
import Popular from '../Popular/Popular.jsx';
import PropTypes from 'prop-types'; 
import {NavLink} from 'react-router-dom';
import './Menu.css';

import { connect } from 'react-redux';
import { showMenu } from '../redux/actions/showMenuAction';
import { showLogMobile } from '../redux/actions/logShowMobileAction';
import { regShowMobile } from '../redux/actions/regShowMobileAction';
import { asyncCommingSoon } from '../redux/actions/commingSoonAction';
import { playNowLength } from '../redux/selector/menuSelectors';

const Menu = ({playNowLength, nowPlaying, commingSoon, favorites, showHideMenu, showLogMobile, showRegMobile, showMenu}) => {
        return (
            <nav  className='menu'>  
                <div className="nameLogo">
                <div className="wrapLogo">
                    <i className="fas fa-video fa-2x"></i>
                    <span className="name">Filmoteka</span>
                </div>
                <div className="wrapUser">
                    <button onClick={showLogMobile} className='userButton'>login</button>
                    <button onClick={showRegMobile} className='userButton'>sign up</button>               
                </div>    
                </div>                
                <ul className={showMenu ? 'show' : 'hide'}>
                <li className="hideMenu"><i onClick={showHideMenu} className="hideMenuIcon far fa-window-close fa-2x"></i></li>
                    <li className="menuItem"><i className="menuIcon fas fa-film"></i><NavLink to='/' className="menuLink">Now playing</NavLink><span className="quontity">{playNowLength}</span></li>
                    <li className="menuItem"><i className="menuIcon fas fa-calendar-alt"></i><NavLink to='/comming' className="menuLink">Comming soon</NavLink><span className="quontity">{commingSoon.length}</span></li>
                    <li className="menuItem"><i className="menuIcon far fa-star"></i><NavLink to='/favorites' className="menuLink">Favorites</NavLink><span className="quontity">{
                        JSON.parse(localStorage.getItem('films')).favorites.length === favorites.length
                        ? favorites.length : JSON.parse(localStorage.getItem('films')).favorites.length
                    }</span></li>
                    <li className="menuItem"><i className="menuIcon far fa-grin-hearts"></i><NavLink to='/wishlist' className="menuLink">Wish list</NavLink><span className="quontity">0</span></li>
                    <li className="menuItem"><i className="menuIcon far fa-comment"></i><NavLink to='/disscussion' className="menuLink">Discussion</NavLink><span className="quontity">0</span></li>
                    
                </ul>
                <Popular/>
            </nav>            
        );
    
}

Menu.propTypes = {
    showMenu:  PropTypes.bool,
    showMenuHendler: PropTypes.func,
    
}
  
function MSTP(state){
    return {
        showMenu: state.showMenu,
        nowPlaying: state.getNowPaying,
        commingSoon: state.getCommingSoon,
        favorites: state.getFavorites,
        playNowLength: playNowLength(state),
    };
};
  
function MDTP(dispatch){
    return {
        showHideMenu: function(){
            dispatch(showMenu())
        },

        showLogMobile: function(){
            dispatch(showLogMobile())
        },

        showRegMobile: function(){
            dispatch(regShowMobile())
        },

    };
};
  
export default connect(MSTP, MDTP) (Menu);