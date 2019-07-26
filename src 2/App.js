import React, { Component } from 'react';
import './App.css';
import Titles from './components/Title';
import Form from './components/Form';
import Weather from './components/Weather';


const API_KEY = "bc25eec2d89b2453ac78e4e93acaf1ba";


class App extends Component {
  state = {
    temparature: undefined,
    temp_max: undefined,
    temp_min: undefined,
    city: undefined,
    country: undefined,
    humidity: undefined,
    description: undefined,
    error: undefined

  }
  getWeather = async (e) => {
    e.preventDefault();
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=imperial`);
    //we need to converto to json response
    const data = await api_call.json();
    if (city && country) {
      console.log(data);
      this.setState({
        temparature: data.main.temp,
        temp_max:data.main.temp_max,
        temp_min: data.main.temp_min,
        city: data.name,
        country: data.sys.country,
        humidity: data.main.humidity,
        description: data.weather[0].description,
        error: ""
      });
    }
    else {
      this.setState({
        temparature: undefined,
        temp_max: undefined,
        temp_min: undefined,
        city: undefined,
        country: undefined,
        humidity: undefined,
        description: undefined,
        error: "Please enter city & country name"
      })
    }

  }

  render() {
    return (
      <div className="wrapper">
        <div className="main">
          <div className="container">
            <div className="row">
              <div className="col-xs-5 title-container">
                <Titles />
                <Form getWeather={this.getWeather} />
                <div className="weather-results">
                <Weather
                  temparature={this.state.temparature}
                  temp_max = {this.state.temp_max}
                  temp_min = {this.state.temp_min}
                  city={this.state.city}
                  country={this.state.country}
                  humidity={this.state.humidity}
                  description={this.state.description}
                  error={this.state.error}
                /> </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;

