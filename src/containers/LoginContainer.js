import React from 'react'
import LoginForm from '../components/LoginForm'

export default function LoginContainer({login, user}) {
    return (
        <div className="login-page-container">
            <img 
                className="login-page-image"
                src="https://thatplantylife.com/wp-content/uploads/2020/05/houseplant-inspiration-Plant-shelfie-Houseplants-Best-houseplants-Houseplant-swap-How-to-ship-houseplants-mini-monstera.jpg" 
                alt="plant shelf"
            />
            <LoginForm login={login} user={user}/>
        </div>
    )
}