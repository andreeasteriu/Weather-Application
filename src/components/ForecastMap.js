import React, { Component } from "react";

export default class ForecastMap extends Component {
  render() {
    console.log(this.props);
    const { items } = this.props;

    return (
      <div>
        {items.map(item => (
          <div key={item.dt}>{item.dt_txt}</div>
        ))}
      </div>
    );
  }
}
