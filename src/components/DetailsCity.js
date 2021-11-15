import React, {useRef} from 'react';
import { useNavigate} from "react-router-dom";
import CityData from '../services/CityData';
import ContainerIconClimate from './ContainerIconClimate';
import { BsPercent } from "react-icons/bs";

const DetailsCity = () => {

    //const city = CityData.data;

    const city = useRef(JSON.parse(localStorage.getItem("cityWeather")));

    const navigate = useNavigate();

    const returnMainScreen = () => {
        navigate(-1);
    }

    const styleClasses = {
        containerClass: 'container-simple-city', 
        iconClass: 'simpelCity-icon-details',
        paraClass: 'simpelCityName-icon-details'
    }   

    console.log('--------', city);

    return (
        <div className="background-details-screen">
            <div className="grass-container">
                <h1 className="detail-cityTitle">{city.current.name}</h1>
                <div className="container-coord">
                    <p className="coordinates ">Longitud <span className="outlineWhite">{city.current.coord.lon}°</span></p>
                    <p className="coordinates">Latitud  <span className="outlineWhite">{city.current.coord.lat}°</span></p>
                </div>
                <div className="container-main-temp">
                    <p>{(city.current.main.temp - 273).toString().substring(0,4)}° C</p>
                </div>
                <ContainerIconClimate weather={ city.current.weather } styleClasses={ styleClasses }  />
                <div className="container-humidity">
                    <p className="p-humidity"> Humedad <span className="outlineWhite">{city.current.main.humidity} %</span></p>
                </div>
                <div className="container-pressure">
                    <p className="p-pressure">Presión <span className="outlineWhite">{city.current.main.pressure} hPa</span></p>
                </div>
                <div className="container-button">
                    <button
                        className="button-return-main-screen"
                        onClick={ returnMainScreen }
                    >
                        Regresar
                    </button>
                </div>
            </div>
        </div>
    )
}

export default DetailsCity
