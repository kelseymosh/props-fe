import React from 'react'
import PlantCard from '../components/PlantCard'

export default function PlantsContainer(props) {
    const plants = props.plants.map(plant => {
        return <PlantCard plant={plant} />
    })

    return (
        <div className="plants-container">
            {plants}
        </div>
    )
}
