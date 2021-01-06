import React, { useState } from 'react'

export default function ListPlantForm() {
    const [name, setName] = useState("")
    const [img, setImage] = useState("")
    const [wishlist, setWishlist] = useState("")
    const [description, setDescription] = useState("")
    
    const handleSubmit = (event) => {
        event.preventDefault()
        fetch('http://localhost:8000/plants/', {
            method: 'POST',
            body: JSON.stringify({ 
                name: name,
                img: img,
                description: description,
                wishlist: wishlist
            }),
            headers: { 'Content-Type': 'application/json' },
        })
        .then(response => response.json())
        .then(input => {
            setName( "" )
            setImage( "" )
            setWishlist( "" )
            setDescription( "" )
        })
    }

    return (
        <form className="list-plant-form" onSubmit={handleSubmit}>
            <label>plant name</label>
                <input
                    spellCheck="false"
                    autoComplete="off"
                    type="text"
                    name="name"
                    value={name}
                    onChange={event => setName( event.target.value )}
                />
            <label>image</label>
                <input
                    spellCheck="false"
                    autoComplete="off"
                    type="text"
                    name="img"
                    value={img}
                    onChange={event => setImage( event.target.value )}
                />
            <label>plant wishlist</label>
                <input
                    spellCheck="false"
                    autoComplete="off"
                    type="text"
                    name="wishlist"
                    value={wishlist}
                    onChange={event => setWishlist( event.target.value )}
                />
            <label>description</label>
                <textarea
                    className="description-input"
                    spellCheck="false"
                    autoComplete="off"
                    type="text"
                    name="description"
                    value={description}
                    onChange={event => setDescription( event.target.value )}
                />
            <input className="submit-button" type="submit" value="add plant" />
        </form>
    );
}
