import React, { Component } from 'react';
import Message from '../Message/Message.jsx';
import Login from '../Login/Login.jsx';
import Registration from '../Registration/Registration.jsx';
import './Chat.css';

import { connect } from 'react-redux';
import { showChat } from '../redux/actions/showChatAction';
import { showLogDesctop } from '../redux/actions/logShowDesctopAction';
import { regShowDesctop } from '../redux/actions/regShowDesctopAction';

class Chat extends Component {

    state = {

        messages: [
            {   
                logo: 'https://cdn.dribbble.com/users/182238/screenshots/2383317/lion2.jpg',
                message: 'hello wos adfasd asd sadf rld',
                userName: 'Petro'
            },

            {   
                logo: 'https://cdn.dribbble.com/users/1141243/screenshots/3231998/lion_saf_v23.png',
                message: 'asjdfhjkssa dsd fsd ffsadf sadf sadf fasahfkjs',
                userName: 'kolia'
            },

            {   
                logo: 'https://cdn.dribbble.com/users/182238/screenshots/2383317/lion2.jpg',
                message: 'hello wsd fsdf asdf asdfsdfsadforld',
                userName: 'Petro'
            },

            {   
                logo: 'https://cdn.dribbble.com/users/182238/screenshots/2383317/lion2.jpg',
                message: 'hello ws dfasdfsa dfasdfasdfs df asdorld',
                userName: 'Petro'
            },

            {   
                logo: 'https://cdn.dribbble.com/users/182238/screenshots/2383317/lion2.jpg',
                message: 'loremsdf as sdf sadf sadf sadf asfsdfasd fsadfsadf',
                userName: 'Olia'
            },
        ],
    }    

    render() {
        return (
            <div className={this.props.showChat ? 'showChat' : 'chatBox'}>            
                <div className="userLogName">
                <div className="wrapChatBtn">
                {this.props.logShow && <Login prop={this.props.showLogDesctop}/>}
                {this.props.regShow && <Registration prop={this.props.showRegDesctop}/>}
                <button onClick={this.props.showLogDesctop} className='chatBtn768'>login</button>
                <button onClick={this.props.showRegDesctop} className='chatBtn768' id='regShow'>sign up</button>
                </div>
                <div className="closs"><i onClick={this.props.showHideChat} className="hideChatIconTop far fa-window-close fa-2x"></i></div>
                </div>
                    <div className="chat">
                        {(this.state.messages).map(el => <Message key={Math.random()*100} logo={el.logo} message={el.message} userName={el.userName}/>)}
                    </div>
                        <form action="#" className="chatForm">
                            <textarea name="" id="" cols="30" rows="5" placeholder='Enter your coment' className="area"></textarea>
                            <button className="chatSend">send</button>
                            <i onClick={this.props.showHideChat} className="hideChatIcon far fa-window-close fa-2x"></i>
                            
                        </form>
            </div>
        );
    }
}

function MSTP (state) {
    return {
        showChat: state.showChat,
        logShow: state.logShowDesctop,
        regShow: state.regShowDesctop,
    }
};

function MDTP (dispatch) {
    return {
        showHideChat: function(){
            dispatch(showChat())
    },
        showLogDesctop: function(){
            dispatch(showLogDesctop())
    },

        showRegDesctop: function(){
            dispatch(regShowDesctop())
    },
    
}
};

export default connect(MSTP, MDTP) (Chat);