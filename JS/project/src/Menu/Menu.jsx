import React, { Component } from 'react';
import Login from '../Login/Login.jsx';
import Popular from '../Popular/Popular.jsx';
import PropTypes from 'prop-types'; 
import {NavLink} from 'react-router-dom';
import './Menu.css';

class Menu extends Component {
    render() {
        return (
            <nav  className='menu'>  
            <Login/>              
                <div className="nameLogo">
                    <i className="fas fa-video fa-2x"></i>
                    <span className="name">Filmoteka</span>
                </div>                
                <ul className={this.props.showMenu ? 'show' : 'hide'}>
                <li className="hideMenu"><i onClick={this.props.showMenuHendler} className="hideMenuIcon far fa-window-close fa-2x"></i></li>
                    <li className="menuItem"><i className="menuIcon fas fa-film"></i><NavLink to='/' className="menuLink">Now playing</NavLink><span className="quontity">0</span></li>
                    <li className="menuItem"><i className="menuIcon fas fa-calendar-alt"></i><NavLink to='/comming' className="menuLink">Comming soon</NavLink><span className="quontity">0</span></li>
                    <li className="menuItem"><i className="menuIcon far fa-star"></i><NavLink to='/favorites' className="menuLink">Favorites</NavLink><span className="quontity">{JSON.parse(localStorage.getItem('films')) === null ? '0' : JSON.parse(localStorage.getItem('films')).favorites.length}</span></li>
                    <li className="menuItem"><i className="menuIcon far fa-grin-hearts"></i><NavLink to='/wishlist' className="menuLink">Wish list</NavLink><span className="quontity">0</span></li>
                    <li className="menuItem"><i className="menuIcon far fa-comment"></i><NavLink to='/disscussion' className="menuLink">Discussion</NavLink><span className="quontity">0</span></li>
                    
                </ul>
                <Popular getFullHandler={this.props.getFullHandler}/>
            </nav>            
        );
    }
}

Menu.propTypes = {
    showMenu:  PropTypes.bool,
    showMenuHendler: PropTypes.func,
}
  

export default Menu;