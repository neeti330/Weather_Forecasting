import React from "react";

const Form = (props) => (
  <form onSubmit={props.getWeather}>
    <input
      type="text"
      name="city"
      placeholder="City/State"
      autoComplete="off"
    />
    <input
      type="text"
      name="country"
      placeholder="Country(Optional)"
      autoComplete="off"
    />
    <button>Get Weather</button>
  </form>
);

export default Form;
