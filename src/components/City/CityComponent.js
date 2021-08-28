import React from "react";
import {WelcomeWeatherLogo, SearchBox, ChooseCityLabel} from "./styles";

const CityComponent = (props) => {
  const { updateCity, fetchWeather } = props;
  return (
    <>
      <WelcomeWeatherLogo src={"/react-weather-app/icons/perfect-day.svg"} />
      <ChooseCityLabel>Busca una zona</ChooseCityLabel>
      <SearchBox onSubmit={fetchWeather}>
        <input
          onChange={(e) => updateCity(e.target.value)}
          placeholder="Ciudad"
        />
        <button type={"submit"}>Buscar</button>
      </SearchBox>
    </>
  );
};
export default CityComponent;
