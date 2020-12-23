import React, { useState } from 'react'

export default function ListPlantForm() {
    const [name, setName] = useState("")
    const [img, setImage] = useState("")
    const [description, setDescription] = useState("")
    
    const handleSubmit = (event) => {
        event.preventDefault()
        fetch('http://localhost:8000/plants/', {
            method: 'POST',
            body: JSON.stringify({ 
                name: name,
                img: img,
                description: description
            }),
            headers: { 'Content-Type': 'application/json' },
        })
        .then(response => response.json())
        .then(input => {
            setName( "" )
            setImage( "" )
            setDescription( "" )
        })
    }

    return (
        <form className="list-plant-form" onSubmit={handleSubmit}>
            {/* <input type="hidden" value="something" /> */}
            <label>Plant Name</label>
                <input
                    autoComplete="off"
                    type="text"
                    name="name"
                    value={name}
                    onChange={event => setName( event.target.value )}
                />
            <label>Image</label>
                <input
                    autoComplete="off"
                    type="text"
                    name="img"
                    value={img}
                    onChange={event => setImage( event.target.value )}
                />
            <label>Description</label>
                <input
                    autoComplete="off"
                    type="text"
                    name="description"
                    value={description}
                    onChange={event => setDescription( event.target.value )}
                />
            <input type="submit" value="Add Plant" />
        </form>
    );
}
