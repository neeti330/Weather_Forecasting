import React from "react";
import Titles from "./Components/Titles.js";
import Form from "./Components/Form";
import Weather from "./Components/Weather";

const API_KEY = "904c7905202602894b0c07cc75c76475";

class App extends React.Component {
  state = {
    temperature: undefined,
    city: undefined,
    country: undefined,
    humidity: undefined,
    description: undefined,
    error: undefined,
  };
  getWeather = async (e) => {
    try {
      e.preventDefault();

      const city = e.target.elements.city.value;
      const country = e.target.elements.country.value;
      const api = `http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&APPID=${API_KEY}`;
      const api_call = await fetch(api);
      const data = await api_call.json();
      if (city) {
        this.setState({
          temperature: data.main.temp,
          city: data.name,
          country: data.sys.country,
          humidity: data.main.humidity,
          description: data.weather[0].description,
          error: "",
        });
      } else {
        this.setState({
          temperature: undefined,
          city: undefined,
          country: undefined,
          humidity: undefined,
          description: undefined,
          error: "Please Enter the value.",
        });
      }
    } catch (err) {
      this.setState({ error: "Cannot find!" });
    }
  };

  render() {
    return (
      <div>
        <div className="wrapper">
          <div className="main">
            <div className="container">
              <div className="row">
                <div className="col-xs-5 title-container">
                  <Titles />
                </div>
                <div className="col-xs-7 form-container">
                  <Form getWeather={this.getWeather} />
                  <Weather
                    temperature={this.state.temperature}
                    city={this.state.city}
                    country={this.state.country}
                    humidity={this.state.humidity}
                    description={this.state.description}
                    error={this.state.error}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
