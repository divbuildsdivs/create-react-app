import React, { useState } from 'react'
import Button from "react-bootstrap/Button";
import '../styles/LoginButton.css'

const LoginButton = () => {
    const [isLogin, setIsLogin] = useState(false);
    const toggleLogin = () => setIsLogin(!isLogin);
  return (
    <Button type="button" className='login-button' onClick={toggleLogin}>{isLogin ? 'Logout' : 'Login'}</Button>
  )
}

export default LoginButton