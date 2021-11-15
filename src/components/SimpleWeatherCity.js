import React from 'react';
import ContainerIconClimate from './ContainerIconClimate';
import { useNavigate} from "react-router-dom";

const SimpleWeatherCity = ({ citydata }) => {
    
    const { weather, name } = citydata;
    let navigate = useNavigate();

    const styleClasses = {
        containerClass: 'container-simple-city', 
        iconClass: 'simpelCity-icon',
        paraClass: 'simpelCityName-icon'
    }   

    const gotDetailsCitytScreen = () => {
        navigate('/details', {sta: 90});
    }

    return (
        <div className="container-simple-city-c">
            <h2 className="title-city">{ name }</h2>
            <ContainerIconClimate weather={ weather } styleClasses={ styleClasses }  />
            <div className="container-see-more-button">
                <button 
                    className="see-more-button"
                    onClick={ gotDetailsCitytScreen }
                >Ver más...</button>
            </div>
        </div>
    )
}

export default SimpleWeatherCity
