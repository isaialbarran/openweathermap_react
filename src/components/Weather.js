import React, {Component} from 'react';

class Weather extends Component {

    showDetails = () => {
        const {name, weather, main, clouds} = this.props.results;

        if (!name || !weather || !main || !clouds)
            return null;
        else {
            const kelvin = 273.15;
            const urlIcon = `http://openweathermap.org/img/w/${weather[0].icon}.png`;
            const alt = `clima de ${name}`;

            return (
                <div id="weather_div">
                    <h3>Weather in: {name}</h3>
                    <p>Actual: {(main.temp - kelvin).toFixed(2)} &#8451;
                        <img src={urlIcon} alt={alt}/>
                    </p>
                    <p>Max: {(main.temp_max - kelvin).toFixed(2)} &#8451;</p>
                    <p>Min: {(main.temp_min - kelvin).toFixed(2)} &#8451;</p>
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