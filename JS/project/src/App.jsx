import React, { Component } from 'react';
import Menu from './Menu/Menu.jsx';
import Main from './Main/Main.jsx';
import Chat from './Chat/Chat.jsx';
import axios from 'axios';

import './App.css';

class App extends Component {

state = {
  showMenu: false,
  showChat: false,
  storadge: false,
  results: [],
}

showMenuHendler = () => {
  this.setState(prew =>({
    showMenu: !prew.showMenu
  }))
}

showChatHendler = () => {
  this.setState(prew => ({
    showChat: !prew.showChat
  }))
}

addToFavoritesHendler = (event) => {
  
  this.state.storadge === false&&localStorage.length === 0 ? localStorage.setItem('films', JSON.stringify({favorites: [], wishlist: []}))&&this.setState({storadge: true}) : null 
  let id = event.target.id;
  let obj =JSON.parse(localStorage.getItem('films'));
  
  axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=c078934a9430d72f0b98a6beeba0443b&language=ru-RUS`)
    .then(res => res.data)
    .then(res => {
      obj.favorites.length === 0 ? obj.favorites.push(res) : obj.favorites.map(el => el.id).includes(res.id) ? null : obj.favorites.push(res);
      localStorage.setItem('films', JSON.stringify(obj));      
      console.log(JSON.parse(localStorage.getItem('films')));
      return res
    })
    .catch(err => console.log(err))     
}

getFullHandler = (event) => {

  let id = event.target.id;
  console.log(id);
  
  axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=c078934a9430d72f0b98a6beeba0443b&language=ru-RUS`)
  .then(res => res.data)
  .then(res => this.setState({results: res}))
  .catch(err => console.log(err)) 
}

  render() {
    return (
      <div  className='app'>
                
        <Menu showMenuHendler={this.showMenuHendler} showMenu={this.state.showMenu}/>
        <Main propToOneCard={this.state.results} getFullHandler={this.getFullHandler} addToFavoritesHendler={this.addToFavoritesHendler} showMenuHendler={this.showMenuHendler} showChatHendler={this.showChatHendler}/>
        <Chat showChatHendler={this.showChatHendler} showChat={this.state.showChat}/>
      </div>
    );
  }
}

export default App;
