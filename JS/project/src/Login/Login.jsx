import React from 'react';
import './Login.css';


const Login = () => {
    
    return (
        <form className='regForm' action="#">

            <input className='login' type="login" placeholder='Enter your login'/>
            <input className='email' type="email" placeholder='Enter your email'/>
            
            <button type="submit">go</button>
       
        </form>
    );    
}

export default Login;