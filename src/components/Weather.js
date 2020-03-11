import React from "react";
import { FaTemperatureHigh } from "react-icons/fa";
import { TiLocation, TiWeatherPartlySunny } from "react-icons/ti";
import { WiHumidity } from "react-icons/wi";

const Weather = props => {
  return (
    <div className="weather__info">
      {props.city && props.country && (
        <p className="weather__key">
          <TiLocation /> Location:
          <span className="weather__value">
            {" "}
            {props.city}, {props.country}{" "}
          </span>
        </p>
      )}

      {props.temperature && (
        <p className="weather__key">
          <FaTemperatureHigh /> Temperature:
          <span className="weather__value"> {props.temperature}°C</span>
        </p>
      )}

      {props.humidity && (
        <p className="weather__key">
          <WiHumidity /> Humidity:
          <span className="weather__value"> {props.humidity} %</span>
        </p>
      )}

      {props.description && props.icon && (
        <p className="weather__key">
          <TiWeatherPartlySunny /> Conditions:
          <span className="weather__value">
            {" "}
            <img
              src={`http://openweathermap.org/img/w/${props.icon}.png`}
              alt="weather img"
            />{" "}
            {props.description}
          </span>
        </p>
      )}

      {props.error && <p className="weather__error">{props.error}</p>}
    </div>
  );
};

export default Weather;
