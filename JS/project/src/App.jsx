import React, { Component } from 'react';
import Menu from './Menu/Menu.jsx';
import Main from './Main/Main.jsx';
import Chat from './Chat/Chat.jsx';
import Login from './Login/Login.jsx';
import Registration from './Registration/Registration';
import './App.css';
import { connect } from 'react-redux';
import { showLogMobile } from './redux/actions/logShowMobileAction';
import { regShowMobile } from './redux/actions/regShowMobileAction';

class App extends Component {

  render() {
    return (
      <div  className='app'> 
      {this.props.logShow && <Login prop={this.props.showLogMobile}/>}
      {this.props.regShow && <Registration prop={this.props.showRegMobile}/>}            
        <Menu/>
        <Main/>
        <Chat/>
      </div>
    );
  }
};


function MSTP(state){
  return {
    logShow: state.logShowMobile,
    regShow: state.regShowMobile,
  }
};

function MDTP(dispatch){
  return {
    showLogMobile: function(){
      dispatch(showLogMobile())
    },
    showRegMobile: function(){
      dispatch(regShowMobile())
    }
  }
}

export default connect(MSTP, MDTP) (App);
