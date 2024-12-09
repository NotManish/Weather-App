// import { useContext } from 'react';
// import { weatherContext } from "../App";  
// import './WeatherCondition.css'
// function WeatherCondition(){

//     const { weatherData }= useContext(weatherContext);
//     let imgUrl=`https://openweathermap.org/img/wn/${weatherData.icon}@2x.png`;
    
//     let key=weatherData.icon;
//     console.log(key);
//     return (
//         <div className='weather-condition'>
//             <div className='img'>
//             <img src={imgUrl}/>
//             <span>{weatherData.description}</span>
//             </div>
//             <p className='temperature'>{weatherData.temperature.toFixed(1)} °C</p>
//             <p className='location'>{weatherData.location}</p>
            
//         </div>
//     )
// }

// export default WeatherCondition;
import { useContext } from 'react';
import { weatherContext } from "../App";  
import './WeatherCondition.css';

function WeatherCondition() {
    const { weatherData } = useContext(weatherContext);


    if (!weatherData || !weatherData.icon || !weatherData.temperature) {
        return (
            <div className='weather-condition'>
                <p>Loading weather data...</p>
            </div>
        );
    }

    const imgUrl = `https://openweathermap.org/img/wn/${weatherData.icon}@2x.png`;

    return (
        <div className='weather-condition'>
            <div className='img'>
                <img src={imgUrl} alt={weatherData.description} />
                <span>{weatherData.description}</span>
            </div>
            <p className='temperature'>{weatherData.temperature.toFixed(1)} °C</p>
            <p className='location'>{weatherData.location}</p>
        </div>
    );
}

export default WeatherCondition;
