import React from 'react';
import PlantPageContainer from "../containers/PlantPageContainer"

export default function PlantCard({plant}) {

    function handleClick(event){
        return(
            <PlantPageContainer />
        )
    }

    return (
        <div>
            <div className="plant-card">
                <img 
                    alt="plant"
                    src={plant.img}
                    className="plant-image"
                    onClick={handleClick}
                />
                <div className="like-button">♥</div>
            </div>
        </div>
    )
}
