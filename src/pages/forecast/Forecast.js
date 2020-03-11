import React, { Component } from "react";
import "../../App.css";
import ForecastMap from "../../components/ForecastMap";
import Form from "../../components/Form";
import { BarLoader } from "react-spinners";
const API_KEY = "668546b6a330e072bb0d0dd15ce37314";

export default class Forecast extends Component {
  state = {
    items: [],
    loading: true
  };

  getWeather = async e => {
    e.preventDefault();
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
    const res = await fetch(
      `http://api.openweathermap.org/data/2.5/forecast?q=${city},${country}&APPID=${API_KEY}&units=metric`
    );
    const items = await res.json();
    this.setState({ items, loading: false });
    // console.log(items.list[1]);
  };

  render() {
    const { items, loading } = this.state;
    return (
      <div className="wrapper">
        <div className="main">
          <div className="container">
            <div className="row">
              <div className="col-xs-5 title-container"></div>
              <div className="col-xs-7 form-container">
                <Form getWeather={this.getWeather} />
                {loading ? (
                  <BarLoader loading={loading} />
                ) : (
                  <ForecastMap items={items.list} />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
