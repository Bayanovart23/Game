import React from 'react';

function Weather(props)
{
    // if(props.weatherInfo.error)
    //     return (
    //         <div>
    //             <p>{props.weatherInfo.error}</p>
    //         </div>
    //     )
    // else
    // return (
    //     <div>
    //         <p>Location: {props.weatherInfo.country} , {props.weatherInfo.city} </p>
    //         <p>Temperature: {props.weatherInfo.temp} <sup>0</sup> </p>
    //         <p>Sunset: {new Date(props.weatherInfo.sunset*1000).toTimeString()} </p>
    //         <p>Pressure: {props.weatherInfo.pressure} </p>
    //     </div>
    // );

    return (
        <div className={'infoWeath'}>
        {!props.weatherInfo.error &&
        <div>
             <p>Location: {props.weatherInfo.country} , {props.weatherInfo.city} </p>
            <p>Temperature: {props.weatherInfo.temp} <sup>с</sup> </p>
            <p>Sunset: {new Date(props.weatherInfo.sunset*1000).toTimeString()} </p>
            <p>Pressure: {props.weatherInfo.pressure} </p>
         </div>}
    <p>{props.weatherInfo.error}</p>
        </div>
    )
}

export default Weather;