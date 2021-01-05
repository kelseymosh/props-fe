import React from 'react'
import LoginForm from '../components/LoginForm'

export default function LoginContainer({login}) {
    return (
        <div className="login-page-container">
            <img 
                className="login-page-image"
                src="https://i.pinimg.com/originals/1c/f1/77/1cf177b9dd23ff04497b94f365cd0881.jpg" 
                alt="plant shelf"
            />
            <LoginForm login={login}/>
        </div>
    )
}