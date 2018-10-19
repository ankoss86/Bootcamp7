import React from 'react';
import Modal from '../Modal/Modal.jsx';
import './Login.css';


const Login = ({prop}) => {
    
    return (
        <Modal prop={prop}>
        <form className='regForm regForm768' action="#">
            <input className='login' type="login" placeholder='Enter your login'/>
            <input className='email' type="email" placeholder='Enter your email'/>            
            <button className='logSubmit' type="submit">go</button>       
        </form>
        </Modal>
    );    
}

export default Login;