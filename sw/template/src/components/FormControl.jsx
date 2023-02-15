import React from 'react';
import {api_key, base_url} from "../utils/constants";


class FormControl extends React.Component  {
    constructor(props) {
        super(props);
        this.state = {city: ''}
    }

    handleChange = event => {
        this.setState({city: event.target.value})
    }

 handleGetCitySubmit = (e) => {
       e.preventDefault()
       const city = e.currentTarget.city.value.trim();
       this.props.getWeather(city)
   }
   handleClick = () => {
       this.props.getWeather(this.state.city);
       this.setState({city: ''});
   }

    render() {
        return (
            <div>
                <input onChange={this.handleChange} value={this.state.city} type={'text'} name={'city'} placeholder={'city'}/>
                <button onClick={this.handleClick}>Get weather</button>
            </div>
        );
    }
}

export default FormControl;