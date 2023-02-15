import React from 'react';
import Form from "./Form";
import Weather from "./Weather";
import FormAdd from "./FormAdd";
import {api_key, base_url} from "../utils/constants";
import FormControl from "./FormControl";

class Data extends React.Component {

    constructor(props)
    {
        super(props);
        this.state = {
            weatherInfo: {
                temp: null,
                city: null,
                country: null,
                pressure: null,
                sunset: null,
                error: 'Enter city name'
            }
        };

    }

    getWeather = (city) => {
        try
        {
            fetch(`${base_url}?q=${city}&appid=${api_key}&units=metric`).then(response => response.json()).then(data => this.setState(
                    {weatherInfo: {
                            temp: data.main.temp,
                            city: data.main.city,
                            country: data.sys.country,
                            pressure: data.main.pressure,
                            sunset: data.sys.sunset,
                            error: null,
                        }
                    }
                )
            )
        }catch (e) {
           this.setState(
               {weatherInfo: {
                       temp: null,
                       city: null,
                       country: null,
                       pressure: null,
                       sunset: null,
                       error: 'Enter correct city',
                   }
               }
           )
        }
    }

    // getWeather = async (city) => {
    //     const response = await fetch(`${base_url}?q=${city}&appid=${api_key}&units=metric`);
    //     const data = await response.json()
    //     this.setState(
    //         {weatherInfo: {
    //                 temp: data.main.temp,
    //                 city: data.main.temp,
    //                 country: data.sys.country,
    //                 pressure: data.main.pressure,
    //                 sunset: data.sys.sunset,
    //                 error: null,
    //         }
    //         }
    //     )
    // }




    render() {
        return (
            <div>
                <FormControl getWeather={this.getWeather}/>
                <Weather weatherInfo={this.state.weatherInfo}/>
            </div>
        );
    }
}

export default Data;