import React from 'react'
import ListPlantForm from '../components/ListPlantForm'
import ListPlant from '../images/ListPlant.jpg'

export default function ListPlantContainer() {
    return (
        <div className="list-plant-container">
            <ListPlantForm />
            <img
                className="list-plant-image" 
                src={ListPlant} 
                alt="houseplants"
            />
        </div>
    )
}
