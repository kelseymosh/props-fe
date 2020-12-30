import React, { useState } from 'react'

export default function LoginForm({login}) {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    
    const clearForm = () => (input => {
        setUsername( "" )
        setPassword( "" )
    })

    const handleSubmit = (event) => {
        event.preventDefault()
        login(username, password)
        clearForm()
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
            {/* { error ? <p style={{color: 'red'}}>{error}</p> : null } */}
            <input className="submit-button" type="submit" value="login"></input>
        </form>
    )
}
