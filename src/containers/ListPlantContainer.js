import React from 'react'
import ListPlantForm from '../components/ListPlantForm'

export default function ListPlantContainer() {
    return (
        <div className="list-plant-container">
            <ListPlantForm />
            <img
                className="list-plant-image" 
                src="https://i.pinimg.com/originals/1c/f1/77/1cf177b9dd23ff04497b94f365cd0881.jpg" 
                alt="houseplants"
            />
        </div>
    )
}
