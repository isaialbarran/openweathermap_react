import React, {Component} from 'react';

class Weather extends Component {

    showDetails = () => {
        const {name, weather, main} = this.props.results;

        if (!name || !weather || !main)
            return null;
        else {
            const kelvin = 273.15;
            const urlIcon = `http://openweathermap.org/img/w/${weather[0].icon}.png`;
            const alt = `clima de ${name}`;

            return (
                <div id="weather_div">
                    <h3>Weather in: {name}</h3>
                    <p>Actual: {(main.temp - kelvin).toFixed(2)}
                        <img src={urlIcon} alt={alt}/>
                    </p>
                    <p>Max: {(main.temp_max - kelvin).toFixed(2)}</p>
                    <p>Min: {(main.temp_min - kelvin).toFixed(2)}</p>
                </div>
            );
        }
    };

    render() {
        return (
            <div>
                {this.showDetails()}
            </div>
        );
    }
}

export default Weather;