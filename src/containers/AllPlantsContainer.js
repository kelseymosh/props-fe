import React, { useState, useEffect } from 'react'
import PlantCard from '../components/PlantCard'

export default function PlantsContainer() {   
    useEffect(() => {
        fetchPlants();
    }, []);

    const [plants, setPlants] = useState([]);

    const fetchPlants = async () => {
        const data = await fetch('http://localhost:8000/plants/');

        const plants = await data.json();
        setPlants(plants)
    }

    return (
        <div className="all-plants-container">
            {plants.slice(0).reverse().map(plant => (
                <PlantCard key={plant.id} plant={plant} />
            ))}
        </div>
    )
}
