// import humidity from '../assets/humidity.png';
// import wind from '../assets/wind.png';
import './WeatherWindAndHumidity.css'
import { weatherContext } from "../App"; 
import { useContext } from 'react';

function WeatherWindAndHumidity(){

 const { weatherData }= useContext(weatherContext);
//  const sunRise=new Date(weatherData.sunrise * 1000).toLocaleTimeString();
//  const sunSet=new Date(weatherData.sunset * 1000).toLocaleTimeString();

    return(
        <div className="humidity-wind">
                <div className="humidity">
                    {/* <img src={humidity} alt="" /> */}
                    <div className='humidity-data'>
                    <p>Humidity: {weatherData.humidity}%</p>
                    <p>Visibility: {weatherData.visibility/1000} km</p>
                    {/* <p>Sunrise: {sunRise}</p> */}
                 </div>
                </div>
                <div className="wind">
                    {/* <img src={wind} alt="" /> */}
                    <div>
                    
                    <p>Wind: {(weatherData.wind*3.6).toFixed(2)} km/hr</p>
                    <p>Pressure: {weatherData.pressure} hpa</p>
                    {/* <p>Sunset: {sunSet}</p> */}

                    </div>
                </div>
        </div>
    )
}


export default WeatherWindAndHumidity;