import React, { useState } from 'react'

export default function ListPlantForm() {
    const [plant, setPlant] = useState({})
    
    const handleSubmit = (event) => {
        event.preventDefault()
            fetch('http://localhost:8000/plants/', {
                method: 'POST',
                body: JSON.stringify({ 
                    name: plant.name,
                    img: plant.img,
                    description: plant.description
                }),
                headers: { 'Content-Type': 'application/json' },
            })
            .then(response => response.json())
            .then(plant => setPlant( plant ))
    }
        
    return (
        <form className="list-plant-form" onSubmit={handleSubmit}>
            <label>Plant Name</label>
                <input
                    type="text"
                    name="name"
                    value={plant.name}
                    onChange={event => setPlant({ ...plant, name: event.target.value })}
                />
            <label>Image</label>
                <input
                    type="text"
                    name="img"
                    value={plant.img}
                    onChange={event => setPlant({ ...plant, img: event.target.value })}
                />
            <label>Description</label>
                <input
                    type="text"
                    name="description"
                    value={plant.description}
                    onChange={event => setPlant({ ...plant, description: event.target.value })}
                />
            <input type="submit" value="Add Plant" />
        </form>
    );
}
