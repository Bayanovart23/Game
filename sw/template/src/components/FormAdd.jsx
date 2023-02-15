import React from 'react';
import {api_key, base_url} from "../utils/constants";


class Form extends React.Component {

    constructor(props) {
        super(props);
        this.state =
            {}
    }
    handleGetCitySubmit =  (e) => {
        e.preventDefault()
        const city = e.currentTarget.city.value.trim();
         fetch(`${base_url}?q=${city}&appid=${api_key}`).then(response => response.json()).then(data => this.setState(
             {
               city: data.name,
                 temp: data.main.temp
             }
         )
        )
    }

    render() {
        return (
            <React.Fragment>
            <form onSubmit={this.handleGetCitySubmit}>
                <input type={'text'} name={'city'} placeholder={'city'}/>
                <button type={'submit'}>Get weather</button>
            </form>
                <h2>Location: {this.state.city}</h2>
                <h2>Temperature: {this.state.temp}</h2>
            </React.Fragment>

        )
    }

}

export default Form;