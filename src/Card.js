import './Card.css';
import { Typography } from 'antd';
import { WiSunrise, WiSunset} from 'react-icons/wi';
import {FaTemperatureHigh, FaWind} from 'react-icons/fa';
const { Title } = Typography;

export default function Card({name, weather_description, sunset, sunrise, temperature, wind}) {
	  return (
	<div className="Card__content">
	  <Title level={2} style={{color: "white"}}>Name : {name}</Title>
	  <Title level={3} style={{color: "white"}}>Description :  {weather_description}</Title>
	  <Title level={3} style={{color: "white"}}>Sunrise: {sunrise} <WiSunrise /></Title>
	  <Title level={3} style={{color: "white"}}>Sunset: {sunset} <WiSunset /></Title>
	  <Title level={3} style={{color: "white"}}>Temperature :  {temperature} <FaTemperatureHigh /></Title>
	  <Title level={3} style={{color: "white"}}>Wind speed :  {wind}km/h <FaWind /></Title>
	</div>
  );
}