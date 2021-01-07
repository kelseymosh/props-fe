import React, { useState, useEffect } from 'react'

export default function PlantPageContainer({ match }) {
    useEffect(() => {
        fetchPlant();
    }, []);

    const [plant, setPlant] = useState({});

    const fetchPlant = async () => {
        const data = await fetch(`http://localhost:8000/plants/${match.params.id}/`);

        const plant = await data.json();
        setPlant(plant)
    }
    return (
        <>
            { plant.id 
                ? 
                <div className="plant-page-container">
                    <span className="show-page-card">
                        <img className="show-page-image" src={`${plant.img}`} alt={`${plant.name}`} />
                        <div className="like-button">♥</div>
                    </span>
                    <span className="show-page-text">
                        <h2 className="plant-name-text">{`${plant.name}`}</h2>
                        <p>{`${plant.description}`}</p>
                        <hr></hr>
                            <p className="wishlist">{`${plant.listing_user}`}'s wishlist:</p>
                                <p className="wishlist-text">{`${plant.wishlist}`}</p>
                            <form className="contact-trader-form">
                                <label>contact the trader</label>
                                    <textarea className="contact-input" type="text" />
                                <input className="submit-button" type="submit" value="message" />
                            </form>
                    </span>
                </div>
                : null
            }
        </>
    )
}
