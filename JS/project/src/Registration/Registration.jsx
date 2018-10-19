import React from 'react';
import Modal from '../Modal/Modal.jsx';
import './Registration.css';


const Registration = ({prop}) => {
    
    return (
        <Modal prop={prop}>
        <form className='regForm regForm768' action="#">
            <input className='login' type="login" placeholder='Enter your login'/>
            <input className='email' type="email" placeholder='Enter your email'/> 
            <input className='login password' type="password" placeholder='Enter your password'/>
            <input className='email password' type="password" placeholder='Confirm your password'/>           
            <button className='logSubmit' type="submit">go</button>       
        </form>
        </Modal>
    );    
}

export default Registration;