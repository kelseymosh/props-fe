import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import PlantIcon from '../images/PlantIcon.png'

export default function LoginForm({login}) {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    const handleSubmit = (event) => {
        event.preventDefault()
        login(username, password)
    }
    
    return (
        <form onSubmit={handleSubmit}>
            <label>username</label>
                <input
                    autoComplete="off" 
                    name="username" 
                    value={username} 
                    onChange={event => setUsername(event.target.value)}
                />
            <label>password</label>
                <input
                    className="password-input"
                    autoComplete="off" 
                    type="password" 
                    name="password" 
                    value={password} 
                    onChange={event => setPassword(event.target.value)}
                />
            <input className="submit-button" type="submit" value="login"></input>
                <span className="signup-prompt">
                    <img className="plant-icon" src={PlantIcon} alt="plant icon"/>
                    <p style={{marginTop:"-1%"}}>grow with us. sign up <Link className="signup-link" to={'/signup'}>here</Link></p>
                </span>
        </form>
    )
}
