import React from 'react';
import {api_key, base_url} from "../utils/constants";


function Form(props) {
   const handleGetCitySubmit = (e) => {
       e.preventDefault()
       const city = e.currentTarget.city.value.trim();
       props.getWeather(city)
   }

    return (
        <form onSubmit={handleGetCitySubmit}>
            <input type={'text'} name={'city'} placeholder={'city'}/>
            <button type={'submit'}>Get weather</button>
        </form>
    );
}

export default Form;