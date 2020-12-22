import React, { useState, useEffect } from 'react'

export default function PlantPageContainer({ match }) {
    useEffect(() => {
        fetchPlant();
    }, []);

    const [plant, setPlant] = useState({});

    const fetchPlant = async () => {
        const fetchPlant = await fetch(`http://localhost:8000/plants/${match.params.id}/`
        );

        const plant = await fetchPlant.json();
        setPlant(plant)
    }
    return (
        <div className="plant-page-container">
            <span className="show-page-card">
                <img className="show-page-image" src={`${plant.img}`} alt={`${plant.name}`} />
                <div className="like-button">♥</div>
            </span>
            <h2>{`${plant.name}`}</h2>
            <span className="show-page-comments">
                <p>{`${plant.description}`}</p>
            </span>
        </div>
    )
}
