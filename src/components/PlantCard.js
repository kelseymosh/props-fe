import React from 'react';
import { Link } from 'react-router-dom'

export default function PlantCard({plant}) {

    return (
        <div>
            <div className="plant-card">
                <Link to={`/plants/${plant.id}`}>
                    <img 
                        alt={plant.name}
                        src={plant.img}
                        className="plant-image"
                    />
                </Link>
                <div className="like-button">♥</div>
            </div>
        </div>
    )
}
