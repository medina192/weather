import React, { useState, useRef } from 'react';
import { BsSearch, BsFillCheckCircleFill } from "react-icons/bs";
import axios from 'axios';


import SimpleWeatherCity from './SimpleWeatherCity';
//import { CityData } from '../services/CityData';

const token = '5f62cfc9e248aea9613ec3bbb0076a86';

const MainPage = () => {

    const currentCity = useRef('');
    const [cityData, setCityData] = useState(null);
    const [showAlert, setShowAlert] = useState(false);

    
    const searchCity = (e) => {
        e.preventDefault();

        if(currentCity.current.length > 0)
        {
            axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${currentCity.current}&appid=${token}`, {
            
            })
            .then((resp) => {
                console.log('resp',resp.data);
                //CityData.data = resp.data;
                setCityData( resp.data );
                localStorage.setItem("cityWeather", JSON.stringify(resp.data));
            })
            .catch((error) => {
                setCityData(null);
                setShowAlert(true);
                console.log('error',error);
            });
        }

    }

    const closeAlert = () => {
        setShowAlert(false);
    }

    const textChanges = ( event ) => {
         console.log( event.target.value );
         currentCity.current = event.target.value;
    }


    return (
        <div className="background-image">
            <h1 className="main-title">Weather app</h1>
            <div className="contianer-searcher">
                <form className="container-input-logo" onSubmit={(e) => searchCity(e)}>
                    <input type="text" className="input-searcher" onChange={textChanges}/>
                    <div
                        onClick={(e) => searchCity(e)}
                    >
                        <BsSearch className="icon-lens" />
                    </div>
                </form>
            </div>

                {
                    cityData ? 
                        (
                            <div className="container-simple-city">
                                <div className="contianer-searcher-city">
                                    <SimpleWeatherCity citydata={ cityData }/>
                                </div>
                            </div>
                        )
                        :
                        (
                            <>
                            </>
                        )
                }
            {
                showAlert ? 
                (
                    <div className="container-flex-alert">
                        <div className="alert-no-city">
                            <h3 className="title-alert">La ciudad no existe :(</h3>
                            <button
                                onClick={ closeAlert }
                                className="button-close-alert"
                            >
                                <BsFillCheckCircleFill className="icon-close" />
                            </button>
                        </div>
                    </div>
                )
                :
                (
                    <>
                    </>
                )
            }
        </div>
    )
}

export default MainPage
