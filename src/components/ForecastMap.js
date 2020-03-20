import React, { Component } from "react";

export default class ForecastMap extends Component {
  render() {
    const { items } = this.props;
    const finalObj = {};
    
    items.forEach(item => {
      const time = new Date(item.dt_txt);
      const day = time.toLocaleDateString("en-us", { weekday: "long" });
        
      if (finalObj[day]) {
        finalObj[day].push(item);
      } else {
        finalObj[day] = [item];
      }
    });
    console.log(finalObj);
    // console.log(final);
    console.log(this.props);
    const weekday =
      finalObj[
        ("Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday")
      ];
    console.log(weekday);
    // const Tuesday = finalObj["Tuesday"];
    // const Wednesday = finalObj["Wednesday"];
    // const Thursday = finalObj["Thursday"];
    // const Friday = finalObj["Friday"];
    // const Saturday = finalObj["Saturday"];
    // const Sunday = finalObj["Sunday"];

    return (
      <div>
        <div>
          {/* {day} */}
          {weekday.map(day => (
            <div key={day.dt}>
              {day.time}
              {day.main.temp}
            </div>
          ))}
        </div>
      </div>
    );
  }
}
