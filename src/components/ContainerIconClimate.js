import React from 'react';
import { 
    WiDayThunderstorm,   // thunderstorm
    WiDayHail,     //  Drizzle
    WiHail  ,     // rain
    WiSandstorm,   // atmosphere
    WiCloud ,      //   clouds
    WiDaySunny,    // clear



} from "react-icons/wi";
import { BsSnow2 } from "react-icons/bs";

const ContainerIconClimate = ({ weather, styleClasses }) => {

    const { containerClass, iconClass, paraClass } = styleClasses;
    console.log('weather', weather);
    return (
        <>
            {(() => {         switch (weather[0].main) {
                        case 'Thunderstorm':
                            return(
                                <div className={containerClass}>
                                    <WiDayThunderstorm className={iconClass} />
                                    <p className={paraClass}>Tormenta</p>
                                </div>
                            );

                        case 'Drizzle':
                            return(
                                <div className={containerClass}>
                                    <WiDayHail className={iconClass} />
                                    <p className={paraClass}>Llovizna</p>
                                </div>
                            );

                        case 'Rain':

                            return(
                                <div className={containerClass}>
                                    <WiHail className={iconClass} />
                                    <p className={paraClass}>Lluvia</p>
                                </div>
                            );

                        case 'Snow':
                            return(
                                <div className={containerClass}>
                                    <BsSnow2 className={iconClass} />
                                    <p className={paraClass}>Nevado</p>
                                </div>
                            );

                        case 'Atmosphere':
                            return(
                                <div className={containerClass}>
                                    <WiSandstorm  className={iconClass}/>
                                    <p className={paraClass}>Neblina</p>
                                </div>
                            );
                        
                        case 'Clear':
                            return(
                                <div className={containerClass}>
                                    <WiDaySunny className={iconClass} />
                                    <p className={paraClass}>Soleado</p>
                                </div>
                            );
                    
                        case 'Clouds':
                            console.log('clouds');
                            return(
                                <div className={containerClass}>
                                    <WiCloud  className={iconClass}/>
                                    <p className={paraClass}>Nublado</p>
                                </div>
                            );

                        default:
                            console.log('default');
                            break;
                    } } )()}
        </>
    )
}

export default ContainerIconClimate
