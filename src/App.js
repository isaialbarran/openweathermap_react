import React, { Component } from 'react';
import axios from 'axios';

import Header from './components/Header';
import Weather from "./components/Weather";
import Error from "./components/Error";
import Form from './components/Form';

import './css/App.css';

class App extends Component {

  state = {
    error: false,
    cityNotFound: false,
    dataForm: {},
    results: {},
    countries: {}
  };

  componentWillMount() {
      let url = `https://restcountries.eu/rest/v2/all`;
      axios.get(url)
          .then(res => {
            const dataCountriesApi = res.data;
            this.setState({countries:dataCountriesApi});
          })
          .catch(e => {
            console.log(e);
          });
  };

  reqApi = (city,country) => {
    const appId = '735229ccf1f5abc43613d2fd59bf7374';
    //read url and add API key
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${appId}`;
    //axios to get the data
    axios.get(url)
        .then(res => {
          const dataFromApi = res.data;
          this.setState({results:dataFromApi, cityNotFound:false})
        })
        .catch(e => {
          this.setState({cityNotFound:true});
          console.log(e);
        })
  };

  dataQuery = answer => {
    if(answer.city === "" || answer.country === ""){
      this.setState({error:true})
    }
    else{
      this.setState({error:false, dataForm:answer});
      this.reqApi(answer.city, answer.country)
    }
  };

  render() {
    const {error, cityNotFound} = this.state;

    let result;

    if(error){
      result = <Error message="Both field are required"/>
    }
    else if(cityNotFound){
      result = <Error message="City Not Found"/>
    }
    else{
      result = <Weather results={this.state.results}/>
    }
    return (
      <div className="App">
        <Header title="Open Weather Map"/>
        <Form dataQuery={this.dataQuery}
              countries={this.state.countries}/>
        {result}
      </div>
    );
  }
}

export default App;
