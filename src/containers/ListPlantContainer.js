import React from 'react'
import ListPlantForm from '../components/ListPlantForm'

export default function ListPlantContainer() {
    return (
        <div className="list-plant-container">
            <ListPlantForm />
            <img
                className="list-plant-image" 
                src="https://thatplantylife.com/wp-content/uploads/2020/01/Rhaphidophora-tetrasperma-ginny-philodendron-Mini-monstera-Bright-light-houseplants-best-houseplants-easy-houseplants-houseplant-care-guide-Rhaphidophora-tetrasperma-care-amazing-houseplants.jpeg" 
                alt="houseplants"
            />
        </div>
    )
}
